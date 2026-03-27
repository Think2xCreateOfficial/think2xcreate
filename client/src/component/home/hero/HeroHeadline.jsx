function HeroHeadline({ content, styles }) {
  const parts = content.headline.prefix.split(content.headline.highlight);
  
  return (
    <h1 className={styles.headline}>
      {parts[0]}
      <span className={styles.highlightText}>{content.headline.highlight}</span>
      {parts[1]}
    </h1>
  );
}

export default HeroHeadline;