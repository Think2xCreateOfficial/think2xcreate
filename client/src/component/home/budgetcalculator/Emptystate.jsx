import { Building2, Check, TriangleAlert, Send } from "lucide-react";

function EmptyState({ content, styles, type, selectedServices, isReady, isBudgetValid }) {

  const step1Done = true;
  const step2Done = !!type;
  const step3Done = selectedServices && selectedServices.length > 0;

  let Icon        = Send;
  let title       = "Let's build your plan";
  let description = "Follow the 3 steps above to see your personalised budget breakdown.";
  let classStyle  = "";

  if (!step2Done) {
    Icon        = Building2;
    title       = "First: choose your business type";
    description = "Tell us what kind of business you run so we can recommend the right channels.";
    classStyle  = "";
  } else if (!step3Done) {
    Icon        = Check;
    title       = "Great! Now pick your services";
    description = "Choose 1 or more marketing services below. Each one shows its minimum monthly cost.";
    classStyle  = "bg-green-500 text-white rounded-full p-1";

  } else if (isReady && !isBudgetValid) {
    Icon        = TriangleAlert;
    title       = "Budget allocation issue";
    description = "The selected services exceed your budget. Increase the slider above or remove a service.";
    classStyle  = "bg-yellow-500 text-white rounded-full p-1";
  }

  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyStateInner}>
        <p className={styles.emptyStateIcon}>
          <Icon size={38} className={`inline-block ${classStyle}`} />
        </p>
        <p className={styles.emptyStateTitle}>{title}</p>
        <p className={styles.emptyStateDesc}>{description}</p>

        {/* Step checklist — instant visual feedback on progress */}
        <div className={styles.emptyStepList}>
          <div className={styles.emptyStep(step1Done)}>
            <span className={styles.emptyStepNum(step1Done)}>
              {step1Done ? "✓" : "1"}
            </span>
            <span>Set your monthly budget</span>
          </div>
          <div className={styles.emptyStep(step2Done)}>
            <span className={styles.emptyStepNum(step2Done)}>
              {step2Done ? "✓" : "2"}
            </span>
            <span>Choose your business type</span>
          </div>
          <div className={styles.emptyStep(step3Done)}>
            <span className={styles.emptyStepNum(step3Done)}>
              {step3Done ? "✓" : "3"}
            </span>
            <span>Select at least one service</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyState;