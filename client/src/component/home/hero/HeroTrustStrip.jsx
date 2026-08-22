function HeroTrustStrip({ stats, styles }) {
  return (
    <div className={styles.trustStrip}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <div className={styles.statValue}>{stat.value}</div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default HeroTrustStrip;
