function HeroHeadline({ content, styles }) {
  return (
    <h1 className={styles.headline}>
      {content.headline.prefix}
      <span className={styles.highlightText}>{content.headline.highlight}</span>
    </h1>
  );
}

export default HeroHeadline;