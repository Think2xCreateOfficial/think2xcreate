/**
 * hooks/useBudgetCalculator.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Coordinator hook — composes useBudget, useServiceSelection, useAllocationEngine.
 *
 * Responsibilities:
 * • Owns businessType state (single-select — this is intentional by design)
 * • Wires the three hooks together
 * • Runs side-effects:
 *     – When businessType changes → clear selected services (they belonged to
 *       the old type's allocation table)
 *     – When selectedServices changes → sync allocation engine's manual overrides
 * • Exposes a single flat API surface so BudgetCalculator.jsx stays thin
 *
 * FIXES APPLIED:
 * • businessType change now resets services (previously services persisted
 *   across type switches, causing stale allocation percentages)
 * • Auto-scroll refs exposed so components can scroll the next step into view
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { useBudget }           from "./useBudget";
import { useServiceSelection } from "./useServiceSelection";
import { useAllocationEngine } from "./useAllocationEngine";

export function useBudgetCalculator() {
  // ── Business type — single select ────────────────────────────────────────────
  // NOTE: Single-select is the correct UX here. A business cannot simultaneously
  //       be a "Restaurant" and a "Startup" — the allocation weights per type
  //       are mutually exclusive.
  const [businessType, setBusinessTypeRaw] = useState(null);

  // ── Compose modular hooks ────────────────────────────────────────────────────
  const budget        = useBudget();
  const services      = useServiceSelection({
    budget:       budget.budget,
    businessType,
  });
  const allocation    = useAllocationEngine({
    budget:           budget.budget,
    businessType,
    selectedServices: services.selectedServices,
  });

  // ── Side effect: businessType change → reset services ────────────────────────
  // FIX: Previously switching business type kept old services selected, which
  //      meant allocations were calculated against the wrong type's weights.
  useEffect(() => {
    services.clearServices();
    // Also drop to auto-allocation mode when context changes
    allocation.resetToAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessType]);

  // ── Side effect: services change → sync allocation overrides ─────────────────
  // FIX: If a service is removed while in manual mode, its % lingered in state
  //      causing the remaining services' total to drop below 100%.
  useEffect(() => {
    allocation.syncToServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services.selectedServices]);

  // ── Business type setter — toggle (clicking active type deselects it) ────────
  const setBusinessType = useCallback((id) => {
    setBusinessTypeRaw((prev) => (prev === id ? null : id));
  }, []);

  // ── Step completion flags ────────────────────────────────────────────────────
  // FIX: Previously step1Done = true always. Now it correctly checks MIN_BUDGET.
  const step1Done = budget.isBudgetValid;
  const step2Done = step1Done && !!businessType;
  const step3Done = step2Done && services.selectedServices.length > 0;
  const isReady   = step3Done; // All steps complete → show allocation

  // ── Auto-scroll refs (passed to section wrappers) ────────────────────────────
  // Components attach these refs to their section wrappers.
  // When a step completes, we scroll the next section into view.
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);

  const scrollIntoView = useCallback((ref) => {
    if (ref?.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120); // Small delay lets state settle before scrolling
    }
  }, []);

  // Scroll to step 2 when step 1 is first completed
  const prevStep1 = useRef(false);
  useEffect(() => {
    if (step1Done && !prevStep1.current) scrollIntoView(step2Ref);
    prevStep1.current = step1Done;
  }, [step1Done, scrollIntoView]);

  // Scroll to step 3 when step 2 is first completed
  const prevStep2 = useRef(false);
  useEffect(() => {
    if (step2Done && !prevStep2.current) scrollIntoView(step3Ref);
    prevStep2.current = step2Done;
  }, [step2Done, scrollIntoView]);

  // Scroll to step 4 when step 3 is first completed
  const prevStep3 = useRef(false);
  useEffect(() => {
    if (step3Done && !prevStep3.current) scrollIntoView(step4Ref);
    prevStep3.current = step3Done;
  }, [step3Done, scrollIntoView]);

  // ── Flat API ─────────────────────────────────────────────────────────────────
  return {
    // Budget
    ...budget,

    // Business type
    businessType,
    setBusinessType,

    // Services
    selectedServices:   services.selectedServices,
    toggleService:      services.toggleService,
    canSelectService:   services.canSelectService,
    budgetWarning:      services.budgetWarning,

    // Allocation
    currentPercentages:     allocation.currentPercentages,
    monetaryAllocation:     allocation.monetaryAllocation,
    totalAllocated:         allocation.totalAllocated,
    remaining:              allocation.remaining,
    isOverBudget:           allocation.isOverBudget,
    isManualMode:           allocation.isManualMode,
    enableManualMode:       allocation.enableManualMode,
    resetToAuto:            allocation.resetToAuto,
    increaseAllocation:     allocation.increaseAllocation,
    decreaseAllocation:     allocation.decreaseAllocation,
    projectedOutcomes:      allocation.projectedOutcomes,

    // Step flags
    step1Done,
    step2Done,
    step3Done,
    isReady,

    // Scroll refs
    step2Ref,
    step3Ref,
    step4Ref,
  };
}
