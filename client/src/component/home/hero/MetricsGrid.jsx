function MetricsGrid({ metrics, styles }) {
  return (
    <div className={styles.metricsGrid}>
      {metrics.map((metric) => (
        <div key={metric.id} className={styles.metricCard}>
          <p className={styles.metricLabel}>{metric.label}</p>
          <p className={`${styles.metricValue} ${metric.color}`}>{metric.value}</p>
          {metric.sub && (
            <p className={`${styles.metricSub} ${metric.sub.startsWith("+") ? "text-green-500" : "text-red-400"}`}>
              {metric.sub}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default MetricsGrid;