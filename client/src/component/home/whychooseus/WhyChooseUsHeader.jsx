function WhyChooseUsHeader({ content, styles }) {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>{content.badge.text}</span>
      <h2 className={styles.title}>{content.headline.title}</h2>
      <p className={styles.description}>{content.headline.description}</p>
    </div>
  );
}

export default WhyChooseUsHeader;