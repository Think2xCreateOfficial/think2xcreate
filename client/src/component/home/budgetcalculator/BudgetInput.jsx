import { CheckCircle2, AlertCircle } from "lucide-react";
import { useBudgetCtx } from "../../../context/BudgetCalculatorContext";

export default function BudgetInput() {
  const {
    budget, setBudget, isBudgetValid, formatINR,
    MIN_BUDGET, MAX_BUDGET, BUDGET_STEP,
    styles,
  } = useBudgetCtx();

  return (
    <div className={styles.budgetCard}>
      {/* Label */}
      <p className={styles.cardLabel}>Step 1 — Monthly Budget</p>

      {/* Amount display */}
      <div className={styles.budgetAmount}>
        <span className={styles.currency}>₹</span>
        {budget.toLocaleString("en-IN")}
      </div>

      {/* Validity indicator — FIX: previously step 1 was always "done" */}
      <p className={styles.budgetStatus(isBudgetValid)}>
        {isBudgetValid ? (
          <>
            <CheckCircle2 size={13} />
            Great — your budget is set
          </>
        ) : (
          <>
            <AlertCircle size={13} />
            Minimum budget is {formatINR(MIN_BUDGET)} / month
          </>
        )}
      </p>

      {/* Slider */}
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={0}
          max={MAX_BUDGET}
          step={BUDGET_STEP}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={styles.slider}
          aria-label="Monthly marketing budget"
          aria-valuemin={0}
          aria-valuemax={MAX_BUDGET}
          aria-valuenow={budget}
          aria-valuetext={`₹${budget.toLocaleString("en-IN")}`}
        />
      </div>

      {/* Range labels */}
      <div className={styles.sliderLabels}>
        <span>₹0</span>
        <span>{formatINR(MAX_BUDGET / 2)}</span>
        <span>{formatINR(MAX_BUDGET)}</span>
      </div>
    </div>
  );
}
