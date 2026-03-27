import { budgetCalculatorContent, businessTypes, servicesList, barColors } from "../../../utils/constant/homeConstant";
import { budgetCalculatorStyles } from "../../../utils/styles/homeStyle";
import { useBudgetCalculator } from "../../../hooks/useBudgetCalculator";
import BudgetHeader from "../budgetcalculator/BudgetHeader";
import StepProgress from "./StepProgress";
import BudgetInput from "../budgetcalculator/BudgetInput";
import BusinessTypeSelector from "../budgetcalculator/BusinessTypeSelector";
import ServiceSelector from "./ServiceSelector";
import BudgetAllocation from "../budgetcalculator/BudgetAllocation";
import EmptyState from "./Emptystate";

function BudgetCalculator() {
  const content = budgetCalculatorContent;
  const styles  = budgetCalculatorStyles;

  const {
    budget, setBudget,
    type, setType,
    currentPercentages, monetaryAllocation,
    out, reachMin, reachMax, leadsMin, leadsMax, formatINR,
    selectedServices, toggleService, canSelectService, budgetWarning,
    isReady, isBudgetValid,
    isManualMode, enableManualMode, resetToAuto,
    increaseAllocation, decreaseAllocation, updateManualAllocation,
  } = useBudgetCalculator();

  // ─── Step progress ─────────────────────────────────────────────────────────
  // Guides non-technical users through the 3 required steps
  const step1Done = true;                           // budget always has a value
  const step2Done = !!type;
  const step3Done = selectedServices.length > 0;

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <BudgetHeader content={content} styles={styles} />
        {/* ── Step progress strip ─────────────────────────────────────────── */}
        <StepProgress step1Done={step1Done} step2Done={step2Done} step3Done={step3Done} content={content} styles={styles} />
        {/* ── Step 1: Budget ──────────────────────────────────────────────── */}
        <BudgetInput budget={budget} setBudget={setBudget} styles={styles} />

        {/* ── Steps 2 + 3: Type & Services ───────────────────────────────── */}
        <div className={styles.card}>
          <BusinessTypeSelector
            types={businessTypes}
            selectedType={type}
            onSelect={setType}
            styles={styles}
          />

          <ServiceSelector
            services={servicesList}
            selected={selectedServices}
            toggleService={toggleService}
            canSelectService={canSelectService}
            budgetWarning={budgetWarning}
            styles={styles}
          />
        </div>

        {/* ── Step 4: Allocation + Results ────────────────────────────────── */}
        {isReady && isBudgetValid ? (
          <>
            <BudgetAllocation
              alloc={currentPercentages}
              monetaryAllocation={monetaryAllocation}
              budget={budget}
              barColors={barColors}
              formatINR={formatINR}
              styles={styles}
              isManualMode={isManualMode}
              increaseAllocation={increaseAllocation}
              decreaseAllocation={decreaseAllocation}
              resetToAuto={resetToAuto}
              enableManualMode={enableManualMode}
              updateManualAllocation={updateManualAllocation}
            />
          </>
        ) : (
          <EmptyState
            content={content.emptyState}
            styles={styles}
            type={type}
            selectedServices={selectedServices}
            isReady={isReady}
            isBudgetValid={isBudgetValid}
          />
        )}
      </div>
    </section>
  );
}

export default BudgetCalculator;