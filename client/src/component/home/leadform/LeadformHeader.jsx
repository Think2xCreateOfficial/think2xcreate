function LeadformHeader({ content, styles }) {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>{content.badge.text}</span>
      <h2 className={styles.title}>{content.title}</h2>
      <p className={styles.description}>{content.description}</p>
    </div>
  );
}

export default LeadformHeader;