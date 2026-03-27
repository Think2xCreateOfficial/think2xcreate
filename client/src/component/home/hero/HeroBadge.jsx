function HeroBadge({ content, styles }) {
  return (
    <div className={styles.badge}>
      {content.icon && <span className={styles.badgeDot} />}
      {content.text}
    </div>
  );
}

export default HeroBadge;