function AuditProgress({ answeredCount, total, score, scoreInfo, styles }) {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <span className={styles.scoreLabel}>
          Score: <span className={styles.scoreValue}>
            {answeredCount > 0 ? score : "–"}/{total}
          </span>
        </span>
        {answeredCount > 0 && (
          <span className={`${styles.scoreStatus} ${scoreInfo.color}`}>
            {scoreInfo.label}
          </span>
        )}
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill(
            scoreInfo.barColor,
            answeredCount === 0 ? "w-0" : scoreInfo.width
          )}
        />
      </div>
    </div>
  );
}

export default AuditProgress;