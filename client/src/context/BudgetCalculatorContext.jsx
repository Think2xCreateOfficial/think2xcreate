import { createContext, useContext } from "react";
import { useBudgetCalculator,  }    from "../hooks/useBudgetCalculator";
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
// eslint-disable-next-line react-refresh/only-export-components
export function useBudgetCtx() {
  const ctx = useContext(BudgetCalculatorContext);
  if (!ctx) {
    throw new Error("useBudgetCtx must be used inside <BudgetCalculatorProvider>");
  }
  return ctx;
}
