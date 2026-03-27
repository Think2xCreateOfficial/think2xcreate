function BudgetHeader({ content, styles }) {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>{content.badge.text}</span>
      <h2 className={styles.title}>
        {content.headline.prefix}{" "}
        <span className={styles.highlightWrapper}>
          {content.headline.highlight}
          <span className={styles.highlightUnderline} />
        </span>
        <br />
        {content.headline.suffix}
      </h2>
      <p className={styles.description}>{content.headline.description}</p>
    </div>
  );
}

export default BudgetHeader;