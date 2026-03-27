import { useState, useMemo, useCallback, useEffect } from "react";
import { allocations, outcomes } from "../utils/constant/homeConstant";

// ─── Real India digital marketing minimum monthly spend (2024 benchmarks) ────
//   Meta Ads:     ₹2,000  (~₹67/day — viable Meta campaign floor)
//   SEO:          ₹3,000  (tool subscription + basic on-page work)
//   Social Media: ₹1,500  (scheduling tool + 4–6 creatives/month)
//   Content:      ₹1,500  (2–4 blogs or caption sets per month)
export const SERVICE_MIN_COST = {
  "Meta Ads":     2000,
  "SEO":          3000,
  "Social Media": 1500,
  "Content":      1500,
};

const TOTAL_CHANNELS  = 4;
const ALLOCATION_STEP = 500; // ₹ per +/− click

// ─── Pure helpers ─────────────────────────────────────────────────────────────

/**
 * Distribute `budget` across `services`:
 *   1. Each service gets its SERVICE_MIN_COST first.
 *   2. Remaining surplus split proportionally by type allocation weights.
 *   3. Last service absorbs rounding → total === budget exactly.
 */
function autoDistributeBudget(services, budget, type) {
  if (!services.length || !type) return {};

  const weights  = allocations[type] || {};
  const totalMin = services.reduce((sum, s) => sum + (SERVICE_MIN_COST[s] || 0), 0);
  if (totalMin > budget) return {};

  const surplus     = budget - totalMin;
  const totalWeight = services.reduce((sum, s) => sum + (weights[s] || 1), 0);

  const result   = {};
  let allocated  = 0;

  services.forEach((s, i) => {
    if (i === services.length - 1) {
      result[s] = budget - allocated;
    } else {
      const extra = Math.round(surplus * ((weights[s] || 1) / totalWeight));
      result[s]  = (SERVICE_MIN_COST[s] || 0) + extra;
      allocated += result[s];
    }
  });

  return result;
}

/**
 * Pin one service at `pinnedAmount`, redistribute remainder among others.
 * Guarantees: every service ≥ SERVICE_MIN_COST, total === budget exactly.
 */
function rebalanceAllocation(pinnedService, pinnedAmount, services, budget, weights) {
  const others = services.filter((s) => s !== pinnedService);

  if (others.length === 0) return { [pinnedService]: budget };

  const totalOtherMin = others.reduce((sum, s) => sum + (SERVICE_MIN_COST[s] || 0), 0);
  const clamped = Math.max(
    SERVICE_MIN_COST[pinnedService] || 0,
    Math.min(budget - totalOtherMin, pinnedAmount)
  );

  const otherBudget  = budget - clamped;
  const otherSurplus = otherBudget - totalOtherMin;
  const totalWeight  = others.reduce((sum, s) => sum + (weights[s] || 1), 0);

  const result = { [pinnedService]: clamped };
  let allocatedToOthers = 0;

  others.forEach((s, i) => {
    if (i === others.length - 1) {
      result[s] = otherBudget - allocatedToOthers;
    } else {
      const extra = Math.round(otherSurplus * ((weights[s] || 1) / totalWeight));
      result[s]          = (SERVICE_MIN_COST[s] || 0) + extra;
      allocatedToOthers += result[s];
    }
  });

  return result;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useBudgetCalculator() {
  const [budget,           setBudget]           = useState(5000);
  const [type,             setTypeRaw]          = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isManualMode,     setIsManualMode]     = useState(false);
  const [manualAllocation, setManualAllocation] = useState({});

  const typeWeights = useMemo(() => (type ? allocations[type] || {} : {}), [type]);
  const out         = type ? outcomes[type] : { reach: [0, 0], leads: [0, 0], roi: "—" };
  const isReady     = type !== null && selectedServices.length > 0;

  // Type change: wipe services + manual state
  const setType = useCallback((newType) => {
    setTypeRaw(newType);
    setSelectedServices([]);
    setIsManualMode(false);
    setManualAllocation({});
  }, []);

  // Auto allocation — always derived from current selections
  const autoAlloc = useMemo(
    () => autoDistributeBudget(selectedServices, budget, type),
    [selectedServices, budget, type]
  );

  // Budget change: prune services that no longer fit
  useEffect(() => {
    setSelectedServices((prev) => {
      const valid      = [];
      let runningMin   = 0;
      for (const s of prev) {
        runningMin += SERVICE_MIN_COST[s] || 0;
        if (runningMin <= budget) valid.push(s);
        else break;
      }
      if (valid.length !== prev.length) {
        setIsManualMode(false);
        setManualAllocation({});
        return valid;
      }
      return prev;
    });
  }, [budget]);

  // Active monetary allocation (auto or manual)
  const monetaryAllocation = useMemo(
    () => (isManualMode ? manualAllocation : autoAlloc),
    [isManualMode, manualAllocation, autoAlloc]
  );

  // Percentage view for progress bars
  const currentPercentages = useMemo(() => {
    const total = Object.values(monetaryAllocation).reduce((a, b) => a + b, 0);
    if (total === 0) return {};
    const pcts = {};
    Object.entries(monetaryAllocation).forEach(([k, v]) => {
      pcts[k] = Math.round((v / total) * 100);
    });
    return pcts;
  }, [monetaryAllocation]);

  // Budget validity
  const isBudgetValid = useMemo(() => {
    if (!isReady) return true;
    const total = Object.values(monetaryAllocation).reduce((a, b) => a + b, 0);
    return total <= budget + 1;
  }, [monetaryAllocation, budget, isReady]);

  // Returns true when adding serviceId is affordable
  const canSelectService = useCallback(
    (serviceId) => {
      if (selectedServices.includes(serviceId)) return true;
      const proposed = [...selectedServices, serviceId];
      const totalMin = proposed.reduce((sum, s) => sum + (SERVICE_MIN_COST[s] || 0), 0);
      return totalMin <= budget;
    },
    [selectedServices, budget]
  );

  // Inline warning when no more services can be afforded
  const budgetWarning = useMemo(() => {
    if (!selectedServices.length) return null;
    const usedMin    = selectedServices.reduce((sum, s) => sum + (SERVICE_MIN_COST[s] || 0), 0);
    const remaining  = budget - usedMin;
    const unselected = Object.keys(SERVICE_MIN_COST).filter((s) => !selectedServices.includes(s));
    if (!unselected.length) return null;
    const cheapest = Math.min(...unselected.map((s) => SERVICE_MIN_COST[s]));
    if (remaining < cheapest) {
      const shortfall = cheapest - remaining;
      return `Increase your budget by ₹${shortfall.toLocaleString("en-IN")} to add another service`;
    }
    return null;
  }, [selectedServices, budget]);

  // Toggle service selection (resets manual mode for clean slate)
  const toggleService = useCallback(
    (serviceId) => {
      if (!selectedServices.includes(serviceId) && !canSelectService(serviceId)) return;
      setIsManualMode(false);
      setManualAllocation({});
      setSelectedServices((prev) =>
        prev.includes(serviceId)
          ? prev.filter((s) => s !== serviceId)
          : [...prev, serviceId]
      );
    },
    [selectedServices, canSelectService]
  );

  // Manual mode controls
  const enableManualMode = useCallback(() => {
    setManualAllocation({ ...autoAlloc });
    setIsManualMode(true);
  }, [autoAlloc]);

  const resetToAuto = useCallback(() => {
    setIsManualMode(false);
    setManualAllocation({});
  }, []);

  // ─── BUG FIX: use autoAlloc as base on first press ────────────────────────
  // Previously: `prev` was `{}` on first click → `prev[service] = 0` → wrong base amount.
  // Fix: when `prev` is empty (first press), seed from `autoAlloc` instead.
  const increaseAllocation = useCallback(
    (service) => {
      setIsManualMode(true);
      setManualAllocation((prev) => {
        const source    = Object.keys(prev).length > 0 ? prev : autoAlloc;
        const newAmount = (source[service] || 0) + ALLOCATION_STEP;
        return rebalanceAllocation(service, newAmount, selectedServices, budget, typeWeights);
      });
    },
    [selectedServices, budget, typeWeights, autoAlloc]
  );

  const decreaseAllocation = useCallback(
    (service) => {
      setIsManualMode(true);
      setManualAllocation((prev) => {
        const source    = Object.keys(prev).length > 0 ? prev : autoAlloc;
        const minCost   = SERVICE_MIN_COST[service] || 0;
        const newAmount = Math.max(minCost, (source[service] || 0) - ALLOCATION_STEP);
        return rebalanceAllocation(service, newAmount, selectedServices, budget, typeWeights);
      });
    },
    [selectedServices, budget, typeWeights, autoAlloc]
  );

  const updateManualAllocation = useCallback(
    (service, newAmount) => {
      const minCost = SERVICE_MIN_COST[service] || 0;
      const clamped = Math.max(minCost, Math.min(budget, newAmount));
      setIsManualMode(true);
      setManualAllocation(
        rebalanceAllocation(service, clamped, selectedServices, budget, typeWeights)
      );
    },
    [selectedServices, budget, typeWeights]
  );

  // Projected outcomes
  const sqrtScale    = Math.sqrt(budget / 5000);
  const selectedCount = selectedServices.length;
  const reachFactor  = selectedCount > 0 ? Math.sqrt(selectedCount / TOTAL_CHANNELS) : 0;
  const leadsFactor  = selectedCount > 0 ? Math.pow(TOTAL_CHANNELS / selectedCount, 0.3) : 0;

  const reachMin = useMemo(
    () => (isReady ? Math.round(out.reach[0] * sqrtScale * reachFactor) : 0),
    [out.reach, sqrtScale, reachFactor, isReady]
  );
  const reachMax = useMemo(
    () => (isReady ? Math.round(out.reach[1] * sqrtScale * reachFactor) : 0),
    [out.reach, sqrtScale, reachFactor, isReady]
  );
  const leadsMin = useMemo(
    () => (isReady ? Math.round(out.leads[0] * sqrtScale * leadsFactor) : 0),
    [out.leads, sqrtScale, leadsFactor, isReady]
  );
  const leadsMax = useMemo(
    () => (isReady ? Math.round(out.leads[1] * sqrtScale * leadsFactor) : 0),
    [out.leads, sqrtScale, leadsFactor, isReady]
  );

  const formatINR = useCallback((n) => {
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    if (n >= 1000)   return `₹${(n / 1000).toFixed(0)}K`;
    return `₹${n}`;
  }, []);

  return {
    budget, setBudget,
    type, setType,
    selectedServices, toggleService, canSelectService, budgetWarning,
    autoAlloc, currentPercentages, monetaryAllocation,
    isManualMode, enableManualMode, resetToAuto,
    increaseAllocation, decreaseAllocation, updateManualAllocation,
    isReady, isBudgetValid,
    out, reachMin, reachMax, leadsMin, leadsMax, formatINR,
  };
}