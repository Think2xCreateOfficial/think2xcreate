/**
 * hooks/useBudget.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Manages the monthly budget value.
 *
 * FIXES APPLIED:
 * • isBudgetValid is derived (useMemo) — never a separate state that can drift
 * • setBudget clamps value to [0, MAX_BUDGET] on every write
 * • formatINR is memoised so it's a stable reference (no needless re-renders)
 * • step1Done now accurately reflects whether the budget meets the minimum
 */

import { useState, useMemo, useCallback } from "react";
import { MIN_BUDGET, MAX_BUDGET, BUDGET_STEP } from "../utils/constant/homeConstant";

export function useBudget() {
  // ── Raw state ───────────────────────────────────────────────────────────────
  const [budget, setBudgetRaw] = useState(10_000); // default ₹10K

  // ── Clamped setter — prevents out-of-range values ──────────────────────────
  const setBudget = useCallback((val) => {
    const n = Number(val);
    if (!isNaN(n)) {
      setBudgetRaw(Math.min(MAX_BUDGET, Math.max(0, n)));
    }
  }, []);

  // ── Derived validity — step 1 is ONLY done when budget ≥ MIN_BUDGET ─────────
  // FIX: Previously `step1Done = true` always, meaning step 1 never failed.
  const isBudgetValid = useMemo(() => budget >= MIN_BUDGET, [budget]);

  // ── Stable formatter: ₹1,50,000 → "₹1.5L", ₹10,000 → "₹10K" ──────────────
  const formatINR = useCallback((amount) => {
    if (amount >= 1_00_000) return `₹${(amount / 1_00_000).toFixed(1)}L`;
    if (amount >= 1_000)    return `₹${(amount / 1_000).toFixed(1)}K`;
    return `₹${Math.round(amount)}`;
  }, []);

  return {
    budget,
    setBudget,
    isBudgetValid,
    formatINR,
    MIN_BUDGET,
    MAX_BUDGET,
    BUDGET_STEP,
  };
}
