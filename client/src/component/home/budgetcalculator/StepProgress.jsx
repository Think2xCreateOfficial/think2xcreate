function StepProgress({ step1Done, step2Done, step3Done, content, styles }) {

  return (
    <div className={styles.stepProgress}>
        <div className={styles.stepItem(step1Done)}>
        <span className={styles.stepDot(step1Done)}>
            {step1Done ? "✓" : "1"}
        </span>
        <span className={styles.stepLabel}>Set Budget</span>
        </div>
        <div className={styles.stepLine} />
        <div className={styles.stepItem(step2Done)}>
        <span className={styles.stepDot(step2Done)}>
            {step2Done ? "✓" : "2"}
        </span>
        <span className={styles.stepLabel}>Business Type</span>
        </div>
        <div className={styles.stepLine} />
        <div className={styles.stepItem(step3Done)}>
        <span className={styles.stepDot(step3Done)}>
            {step3Done ? "✓" : "3"}
        </span>
        <span className={styles.stepLabel}>Pick Services</span>
        </div>
    </div>
  );
}

export default StepProgress;