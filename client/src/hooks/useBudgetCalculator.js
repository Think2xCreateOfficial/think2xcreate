import { useState, useEffect, useRef, useCallback } from "react";
import { useBudget }           from "./useBudget";
import { useServiceSelection } from "./useServiceSelection";
import { useAllocationEngine } from "./useAllocationEngine";

export function useBudgetCalculator() {
  // ── Business type ───────────────────────────────────────────────────────────
  const [businessType, setBusinessTypeRaw] = useState(null);

  // ── Compose hooks ───────────────────────────────────────────────────────────
  const budget     = useBudget();
  const services   = useServiceSelection({
    budget: budget.budget,
    businessType,
  });
  const allocation = useAllocationEngine({
    budget: budget.budget,
    businessType,
    selectedServices: services.selectedServices,
  });

  // ── Reset on business type change ───────────────────────────────────────────
  useEffect(() => {
    services.clearServices();
    allocation.resetToAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessType]);

  // ── Sync allocation when services change ────────────────────────────────────
  useEffect(() => {
    allocation.syncToServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services.selectedServices]);

  // ── Business type toggle ────────────────────────────────────────────────────
  const setBusinessType = useCallback((id) => {
    setBusinessTypeRaw((prev) => (prev === id ? null : id));
  }, []);

  // ── Step flags ──────────────────────────────────────────────────────────────
  const step1Done = budget.isBudgetValid;
  const step2Done = step1Done && !!businessType;
  const step3Done = step2Done && services.selectedServices.length > 0;
  const isReady   = step3Done;

  // ── Scroll refs ─────────────────────────────────────────────────────────────
  const sectionRef = useRef(null); // 👈 main calculator section
  const step2Ref   = useRef(null);
  const step3Ref   = useRef(null);
  const step4Ref   = useRef(null);

  // ── Guards ──────────────────────────────────────────────────────────────────
  const isFirstRender = useRef(true);
  const isInView      = useRef(false);

  // Detect if calculator is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  // Disable scroll on first render
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // ── Safe scroll function ─────────────────────────────────────────────────────
  const scrollIntoView = useCallback((ref) => {
    if (!ref?.current) return;

    // ❌ block initial render
    if (isFirstRender.current) return;

    // ❌ block if user not inside calculator section
    if (!isInView.current) return;

    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  }, []);

  // ── Step scroll effects ─────────────────────────────────────────────────────
  const prevStep1 = useRef(false);
  useEffect(() => {
    if (step1Done && !prevStep1.current) {
      scrollIntoView(step2Ref);
    }
    prevStep1.current = step1Done;
  }, [step1Done, scrollIntoView]);

  const prevStep2 = useRef(false);
  useEffect(() => {
    if (step2Done && !prevStep2.current) {
      scrollIntoView(step3Ref);
    }
    prevStep2.current = step2Done;
  }, [step2Done, scrollIntoView]);

  const prevStep3 = useRef(false);
  useEffect(() => {
    if (step3Done && !prevStep3.current) {
      scrollIntoView(step4Ref);
    }
    prevStep3.current = step3Done;
  }, [step3Done, scrollIntoView]);

  // ── API ─────────────────────────────────────────────────────────────────────
  return {
    // Budget
    ...budget,

    // Business type
    businessType,
    setBusinessType,

    // Services
    selectedServices: services.selectedServices,
    toggleService:    services.toggleService,
    canSelectService: services.canSelectService,
    budgetWarning:    services.budgetWarning,

    // Allocation
    currentPercentages: allocation.currentPercentages,
    monetaryAllocation: allocation.monetaryAllocation,
    totalAllocated:     allocation.totalAllocated,
    remaining:          allocation.remaining,
    isOverBudget:       allocation.isOverBudget,
    isManualMode:       allocation.isManualMode,
    enableManualMode:   allocation.enableManualMode,
    resetToAuto:        allocation.resetToAuto,
    increaseAllocation: allocation.increaseAllocation,
    decreaseAllocation: allocation.decreaseAllocation,
    projectedOutcomes:  allocation.projectedOutcomes,

    // Steps
    step1Done,
    step2Done,
    step3Done,
    isReady,

    // Refs
    sectionRef, // 👈 IMPORTANT
    step2Ref,
    step3Ref,
    step4Ref,
  };
}