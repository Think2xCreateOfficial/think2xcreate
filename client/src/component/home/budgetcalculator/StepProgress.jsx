import { CheckIcon } from "lucide-react";
import { useBudgetCtx } from "../../../context/BudgetCalculatorContext";

export default function StepProgress() {
  const { content, styles, step1Done, step2Done, step3Done, isReady } =
    useBudgetCtx();

  const stepsDone = [step1Done, step2Done, step3Done, isReady];

  // Current active step index (0-based): the first step NOT yet done
  const activeIndex = stepsDone.findIndex((done) => !done);
  // If all done, the last step (4) is active
  const currentStep = activeIndex === -1 ? 3 : activeIndex;

  return (
    <div className={styles.stepProgress} role="list" aria-label="Progress">
      {content.steps.map((step, i) => {
        const isDone   = stepsDone[i];
        const isActive = i === currentStep;

        return (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step indicator */}
            <div
              className={styles.stepWrapper(isActive, isDone)}
              role="listitem"
              aria-label={`Step ${step.number}: ${step.label} — ${isDone ? "complete" : isActive ? "current" : "upcoming"}`}
            >
              <div className={styles.stepDot(isActive, isDone)}>
                {isDone && !isActive
                  ? <CheckIcon size={12} strokeWidth={3} />
                  : step.number
                }
              </div>
              <span className={styles.stepLabel(isActive)}>
                {step.label}
              </span>
            </div>

            {/* Connector line (not shown after last step) */}
            {i < content.steps.length - 1 && (
              <div className={styles.stepConnector(stepsDone[i])} aria-hidden="true" />
            )}
          </div>
        );
      })}
    </div>
  );
}
