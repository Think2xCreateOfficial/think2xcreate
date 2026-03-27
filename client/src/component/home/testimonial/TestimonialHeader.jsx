function TestimonialHeader({ content, styles }) {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>{content.badge.text}</span>
      <h2 className={styles.title}>
        {content.headline.prefix}{" "}
        <span className={styles.highlight}>{content.headline.highlight}</span>
      </h2>
      <p className={styles.description}>{content.headline.description}</p>
    </div>
  );
}

export default TestimonialHeader;