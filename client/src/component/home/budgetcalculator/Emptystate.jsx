
import { useBudgetCtx } from "../../../context/BudgetCalculatorContext";

// Step-specific messages — shown based on which step is the blocker
const STEP_MESSAGES = {
  budget: {
    emoji: "💰",
    title: "Set your monthly budget first",
    desc:  "Move the slider above to ₹5,000 or more to get started.",
  },
  type: {
    emoji: "🏢",
    title: "Choose your business type",
    desc:  "Tell us what kind of business you run — we'll pick the right allocation weights.",
  },
  services: {
    emoji: "🎯",
    title: "Select at least one service",
    desc:  "Pick which marketing services you want to invest in this month.",
  },
};

export default function EmptyState() {
  const {
    content, styles,
    step1Done, step2Done, step3Done,
  } = useBudgetCtx();

  // Determine which step is currently blocking progress
  const blocker = !step1Done ? "budget" : !step2Done ? "type" : "services";
  const msg     = STEP_MESSAGES[blocker];

  const steps = [
    { label: "Budget set (₹5,000+)",    done: step1Done },
    { label: "Business type chosen",    done: step2Done },
    { label: "At least 1 service added", done: step3Done },
  ];

  const nextStep = steps.find((s) => !s.done);

  return (
    <div className={styles.emptyState} role="status" aria-live="polite">
      <div className={styles.emptyStateInner}>
        {/* Contextual emoji + title */}
        <div className={styles.emptyStateIcon}>{msg.emoji}</div>
        <h3 className={styles.emptyStateTitle}>{msg.title}</h3>
        <p className={styles.emptyStateDesc}>{msg.desc}</p>

        {/* Step checklist */}
        <ul className={styles.emptyStepList} aria-label="Progress checklist">
          {steps.map((step, i) => (
            <li key={i} className={styles.emptyStep(step.done)}>
              <span className={styles.emptyStepNum(step.done)}>
                {step.done ? "✓" : i + 1}
              </span>
              {step.label}
            </li>
          ))}
        </ul>

        {/* Next action hint */}
        {nextStep && (
          <p className={styles.emptyNextArrow}>
            ↑ {nextStep.label}
          </p>
        )}
      </div>
    </div>
  );
}
