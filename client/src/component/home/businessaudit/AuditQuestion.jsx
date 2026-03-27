function AuditQuestion({ question, answer, onToggle, styles }) {
  const Icon = question.icon;
  
  return (
    <div className={styles.questionItem}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className={styles.iconBox}>
          <Icon size={16} />
        </div>
        <span className={styles.questionText}>{question.label}</span>
      </div>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => onToggle(question.id, true)}
          className={styles.yesButton(answer === true)}
        >
          Yes
        </button>
        <button
          onClick={() => onToggle(question.id, false)}
          className={styles.noButton(answer === false)}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default AuditQuestion;