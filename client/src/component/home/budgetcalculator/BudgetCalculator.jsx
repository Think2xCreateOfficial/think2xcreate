import { BudgetCalculatorProvider, useBudgetCtx } from "../../../context/BudgetCalculatorContext";
import BudgetHeader          from "../budgetcalculator/BudgetHeader";
import StepProgress          from "../budgetcalculator/StepProgress";
import BudgetInput           from "../budgetcalculator/BudgetInput";
import BusinessTypeSelector  from "../budgetcalculator/BusinessTypeSelector";
import ServiceSelector       from "../budgetcalculator/ServiceSelector";
import BudgetAllocation      from "../budgetcalculator/BudgetAllocation";
import EmptyState            from "./EmptyState";

// ── Inner component — has access to context ──────────────────────────────────
function BudgetCalculatorInner() {
  const { styles, isReady, step2Ref, step3Ref, step4Ref, sectionRef } = useBudgetCtx();

  return (
    <section ref={sectionRef} id="pricing" className={styles.section}>
      <div className={styles.container}>
        <BudgetHeader />
        <StepProgress />
        <BudgetInput />
        <BusinessTypeSelector sectionRef={step2Ref} />
        <ServiceSelector sectionRef={step3Ref} />
        <div ref={step4Ref}>
          {isReady ? <BudgetAllocation /> : <EmptyState />}
        </div>
      </div>
    </section>
  );
}

// ── Outer component — provides the context ───────────────────────────────────
export default function BudgetCalculator() {
  return (
    <BudgetCalculatorProvider>
      <BudgetCalculatorInner />
    </BudgetCalculatorProvider>
  );
}