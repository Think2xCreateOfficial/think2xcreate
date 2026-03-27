function CtaHeader({ content, styles }) {
  return (
    <>
      <span className={styles.badge}>{content.badge.text}</span>
      <h2 className={styles.headline}>
        {content.headline.prefix}&nbsp;
        <span className={styles.highlight}>{content.headline.highlight}</span>
      </h2>
      <p className={styles.description}>{content.description}</p>
    </>
  );
}

export default CtaHeader;