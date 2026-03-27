function TestimonialCard({ quote, name, role, city, initials, tamil, featured, styles }) {
  return (
    <div className={styles.card(featured)}>
      <div className={styles.quoteIcon}>"</div>
      <p className={styles.quoteText}>"{quote}"</p>
      
      <div className={styles.authorContainer}>
        <div className={styles.authorInfo}>
          <div className={styles.avatar(featured)}>{initials}</div>
          <div>
            <p className={styles.authorName}>{name}</p>
            <p className={styles.authorRole}>
              {role}, {city}
            </p>
          </div>
        </div>
        {tamil && (
          <span className={styles.tamilBadge}>தமிழ்</span>
        )}
      </div>
    </div>
  );
}

export default TestimonialCard;