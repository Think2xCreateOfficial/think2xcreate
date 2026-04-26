/**
 * hooks/useAllocationEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * The allocation engine is the heart of the calculator.
 *
 * ARCHITECTURE — single source of truth:
 * ┌──────────────────────────────────────────────────────┐
 * │  State: manualOverrides  (object | null)             │
 * │  • null  → auto mode  → percentages from allocations │
 * │  • object → manual mode → user-set percentages       │
 * └──────────────────────────────────────────────────────┘
 * Everything else (monetaryAllocation, remaining, isOverBudget)
 * is DERIVED via useMemo. No redundant state.
 *
 * FIXES APPLIED:
 * • Removed the conflicting percentage + monetary dual-state that caused bugs
 * • +/− buttons adjust percentages and REBALANCE from/to other services
 *   so the total always stays at 100%
 * • syncToServices() re-normalises overrides when selectedServices changes
 * • All monetary values are computed:  (pct / 100) × budget
 *   so changing the budget slider is instantly reflected everywhere
 */

import { useState, useMemo, useCallback } from "react";
import { allocations, outcomes, ALLOC_STEP, ALLOC_FLOOR } from "../utils/constant/homeConstant";

export function useAllocationEngine({ budget, businessType, selectedServices }) {
  // ── State: null = auto, object = manual percentages ─────────────────────────
  const [manualOverrides, setManualOverrides] = useState(null);
  const isManualMode = manualOverrides !== null;

  // ── Auto percentages ─────────────────────────────────────────────────────────
  // Read weights from allocations table, keep only selected services, normalise to 100.
  const autoPercentages = useMemo(() => {
    if (!businessType || selectedServices.length === 0) return {};

    const weights = allocations[businessType] ?? {};
    const filtered = Object.fromEntries(
      selectedServices.map((id) => [id, weights[id] ?? 25]) // fallback 25 if missing
    );

    const total = Object.values(filtered).reduce((a, b) => a + b, 0);
    if (total === 0) return {};

    // Normalise so they sum to exactly 100
    const normalised = Object.fromEntries(
      Object.entries(filtered).map(([id, w]) => [id, Math.round((w / total) * 100)])
    );

    // Fix rounding drift: adjust the largest entry so total is exactly 100
    const sum = Object.values(normalised).reduce((a, b) => a + b, 0);
    if (sum !== 100) {
      const largest = Object.entries(normalised).sort(([, a], [, b]) => b - a)[0][0];
      normalised[largest] += 100 - sum;
    }

    return normalised;
  }, [businessType, selectedServices]);

  // ── Active percentages ───────────────────────────────────────────────────────
  // In manual mode: keep overrides but restrict to currently selected services.
  const currentPercentages = useMemo(() => {
    if (!isManualMode) return autoPercentages;

    // Only retain keys that are still selected
    return Object.fromEntries(
      selectedServices.map((id) => [id, manualOverrides[id] ?? autoPercentages[id] ?? 0])
    );
  }, [isManualMode, manualOverrides, autoPercentages, selectedServices]);

  // ── Monetary allocation (DERIVED — never stored as state) ───────────────────
  // FIX: Previously monetary + percentage were separate states that could desync
  //      when budget changed. Now monetary is always computed from percentages × budget.
  const monetaryAllocation = useMemo(() =>
    Object.fromEntries(
      Object.entries(currentPercentages).map(([id, pct]) => [
        id,
        Math.round((pct / 100) * budget),
      ])
    ),
    [currentPercentages, budget]
  );

  // ── Summary figures ──────────────────────────────────────────────────────────
  const totalAllocated = useMemo(
    () => Object.values(monetaryAllocation).reduce((a, b) => a + b, 0),
    [monetaryAllocation]
  );
  const remaining    = budget - totalAllocated;
  const isOverBudget = totalAllocated > budget;

  // ── Projected outcomes (scaled from ₹5,000 baseline) ────────────────────────
  const projectedOutcomes = useMemo(() => {
    if (!businessType || selectedServices.length === 0) return null;
    const base  = outcomes[businessType];
    if (!base) return null;
    const scale = budget / 5_000;
    return {
      reachMin: Math.round(base.reach[0] * scale),
      reachMax: Math.round(base.reach[1] * scale),
      leadsMin: Math.round(base.leads[0] * scale),
      leadsMax: Math.round(base.leads[1] * scale),
      roi:      base.roi,
    };
  }, [businessType, selectedServices, budget]);

  // ── Manual mode entry ────────────────────────────────────────────────────────
  const enableManualMode = useCallback(() => {
    // Seed manual overrides from current auto percentages
    setManualOverrides({ ...autoPercentages });
  }, [autoPercentages]);

  const resetToAuto = useCallback(() => {
    setManualOverrides(null);
  }, []);

  // ── Increase a service's % by ALLOC_STEP ─────────────────────────────────────
  // To keep total = 100%, steal from the service with the HIGHEST current %.
  // FIX: Previously +/− changed monetary amounts independently, causing >100% total.
  const increaseAllocation = useCallback(
    (serviceId) => {
      setManualOverrides((prev) => {
        const base   = prev ?? { ...autoPercentages };
        const current = base[serviceId] ?? 0;

        // Find donors (services other than target that are above the floor + ALLOC_STEP)
        const donors = selectedServices.filter(
          (id) => id !== serviceId && (base[id] ?? 0) - ALLOC_STEP >= ALLOC_FLOOR
        );
        if (donors.length === 0) return base; // Cannot increase — everyone is at floor

        // Take from the service with the most allocation
        const donor = donors.reduce((a, b) =>
          (base[a] ?? 0) >= (base[b] ?? 0) ? a : b
        );

        return {
          ...base,
          [serviceId]: current + ALLOC_STEP,
          [donor]:     (base[donor] ?? 0) - ALLOC_STEP,
        };
      });
    },
    [autoPercentages, selectedServices]
  );

  // ── Decrease a service's % by ALLOC_STEP ─────────────────────────────────────
  // Give the freed % to the service with the LOWEST current %.
  const decreaseAllocation = useCallback(
    (serviceId) => {
      setManualOverrides((prev) => {
        const base    = prev ?? { ...autoPercentages };
        const current = base[serviceId] ?? 0;

        if (current - ALLOC_STEP < ALLOC_FLOOR) return base; // At floor — cannot decrease

        const receivers = selectedServices.filter((id) => id !== serviceId);
        if (receivers.length === 0) return base;

        // Give to the service with the least allocation
        const receiver = receivers.reduce((a, b) =>
          (base[a] ?? 0) <= (base[b] ?? 0) ? a : b
        );

        return {
          ...base,
          [serviceId]: current - ALLOC_STEP,
          [receiver]:  (base[receiver] ?? 0) + ALLOC_STEP,
        };
      });
    },
    [autoPercentages, selectedServices]
  );

  // ── Sync manual overrides when selectedServices changes ──────────────────────
  // Called by a useEffect in the coordinator hook whenever services change.
  // Drops stale keys, fills missing keys from auto, re-normalises to 100%.
  const syncToServices = useCallback(() => {
    setManualOverrides((prev) => {
      if (!prev) return null; // Still in auto mode — nothing to do

      if (selectedServices.length === 0) return null; // No services → back to auto

      const synced = Object.fromEntries(
        selectedServices.map((id) => [
          id,
          prev[id] ?? autoPercentages[id] ?? Math.round(100 / selectedServices.length),
        ])
      );

      // Re-normalise
      const total = Object.values(synced).reduce((a, b) => a + b, 0);
      if (total === 0) return null;

      const normalised = Object.fromEntries(
        Object.entries(synced).map(([id, v]) => [id, Math.round((v / total) * 100)])
      );

      // Fix rounding drift
      const sum = Object.values(normalised).reduce((a, b) => a + b, 0);
      if (sum !== 100) {
        const largest = Object.entries(normalised).sort(([, a], [, b]) => b - a)[0][0];
        normalised[largest] += 100 - sum;
      }

      return normalised;
    });
  }, [selectedServices, autoPercentages]);

  return {
    currentPercentages,
    monetaryAllocation,
    totalAllocated,
    remaining,
    isOverBudget,
    isManualMode,
    enableManualMode,
    resetToAuto,
    increaseAllocation,
    decreaseAllocation,
    syncToServices,
    projectedOutcomes,
  };
}
