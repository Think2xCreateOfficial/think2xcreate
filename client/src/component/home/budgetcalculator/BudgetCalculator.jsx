import { BudgetCalculatorProvider, useBudgetCtx } from "../../../context/BudgetCalculatorContext";
import BudgetHeader          from "./BudgetHeader";
import StepProgress          from "./StepProgress";
import BudgetInput           from "./BudgetInput";
import BusinessTypeSelector  from "./BusinessTypeSelector";
import ServiceSelector       from "./ServiceSelector";
import BudgetAllocation      from "./BudgetAllocation";
// import EmptyState from "./EmptyState";

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
          {isReady ? <BudgetAllocation /> : null}
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