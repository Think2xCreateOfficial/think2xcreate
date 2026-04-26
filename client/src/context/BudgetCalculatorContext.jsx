/**
 * context/BudgetCalculatorContext.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Provides all calculator state and actions to any child component without
 * prop drilling through intermediate layers.
 *
 * Usage:
 *   const { budget, businessType, selectedServices, ... } = useBudgetCtx();
 *
 * WHY CONTEXT:
 * Previously BudgetCalculator.jsx passed 15+ props down to BudgetAllocation,
 * which passed them further into SpendCard etc. Context eliminates this
 * while keeping hook logic colocated in useBudgetCalculator.
 */

import { createContext, useContext } from "react";
import { useBudgetCalculator }       from "../hooks/useBudgetCalculator";
import { budgetCalculatorContent, businessTypes, servicesList, barColors } from "../utils/constant/homeConstant";
import { budgetCalculatorStyles }    from "../utils/styles/homeStyle";

// ── Context creation ─────────────────────────────────────────────────────────
const BudgetCalculatorContext = createContext(null);

// ── Provider ─────────────────────────────────────────────────────────────────
export function BudgetCalculatorProvider({ children }) {
  const calc = useBudgetCalculator();

  const value = {
    // All calculator state + actions
    ...calc,
    // Static data (accessed in multiple components — include in context)
    content:       budgetCalculatorContent,
    businessTypes,
    servicesList,
    barColors,
    styles:        budgetCalculatorStyles,
  };

  return (
    <BudgetCalculatorContext.Provider value={value}>
      {children}
    </BudgetCalculatorContext.Provider>
  );
}

// ── Consumer hook ─────────────────────────────────────────────────────────────
export function useBudgetCtx() {
  const ctx = useContext(BudgetCalculatorContext);
  if (!ctx) {
    throw new Error("useBudgetCtx must be used inside <BudgetCalculatorProvider>");
  }
  return ctx;
}
