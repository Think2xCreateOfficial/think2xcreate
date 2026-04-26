
import { useState, useCallback, useMemo } from "react";
import { servicesList } from "../utils/constant/homeConstant";

// Build a lookup: serviceId → minBudget so components never need to iterate
const SERVICE_MIN = Object.fromEntries(
  servicesList.map((s) => [s.id, s.minBudget])
);

export function useServiceSelection({ budget, businessType }) {
  // ── Raw state ────────────────────────────────────────────────────────────────
  const [selectedServices, setSelectedServices] = useState([]);

  // ── Can this service be (de)selected right now? ──────────────────────────────
  // Rules:
  //  1. businessType must be chosen first.
  //  2. If toggling would EXCEED the budget (sum of all min costs), block it.
  const canSelectService = useCallback(
    (serviceId) => {
      // GATE: no business type → nothing is selectable
      if (!businessType) return false;

      const isCurrentlySelected = selectedServices.includes(serviceId);

      if (isCurrentlySelected) {
        // Deselecting is always allowed
        return true;
      }

      // Selecting: check if all selected services + new one fit within budget
      const totalMinIfAdded = [...selectedServices, serviceId].reduce(
        (sum, id) => sum + (SERVICE_MIN[id] ?? 0),
        0
      );
      return totalMinIfAdded <= budget;
    },
    [businessType, selectedServices, budget]
  );

  // ── Toggle a service on/off ──────────────────────────────────────────────────
  const toggleService = useCallback(
    (serviceId) => {
      // Hard guard — should never reach here from a locked UI, but belt-and-braces
      if (!businessType) return;
      if (!canSelectService(serviceId)) return;

      setSelectedServices((prev) =>
        prev.includes(serviceId)
          ? prev.filter((s) => s !== serviceId)
          : [...prev, serviceId]
      );
    },
    [businessType, canSelectService]
  );

  // ── Clear all selections (called when business type changes) ─────────────────
  const clearServices = useCallback(() => setSelectedServices([]), []);

  // ── Budget warning: total minimum cost of selected services vs actual budget ──
  // Derived value — no extra state, always consistent.
  const budgetWarning = useMemo(() => {
    const totalMin = selectedServices.reduce(
      (sum, id) => sum + (SERVICE_MIN[id] ?? 0),
      0
    );
    if (totalMin > budget) {
      return {
        required:  totalMin,
        shortfall: totalMin - budget,
      };
    }
    return null;
  }, [selectedServices, budget]);

  return {
    selectedServices,
    toggleService,
    canSelectService,
    clearServices,
    budgetWarning,
  };
}
