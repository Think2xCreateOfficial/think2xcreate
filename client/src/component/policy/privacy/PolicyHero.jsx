
function PolicyHero({ content, styles }) {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroBadge}>
        <span>{content.badge.text}</span>
      </div>
      <h1 className={styles.heroTitle}>{content.title}</h1>
      <p className={styles.heroSubtitle}>{content.subtitle}</p>
    </div>
  );
}

export default PolicyHero;