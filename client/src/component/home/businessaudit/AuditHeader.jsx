function AuditHeader({ content, styles }) {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>{content.badge.text}</span>
      <h1 className={styles.headline}>
        {content.headline.prefix}{" "}
        <span className={styles.highlight}>
          {content.headline.highlight}
          <svg className={styles.underline} height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
            <path d="M0 5 Q50 0 100 4 Q150 8 200 3" stroke="#FACC15" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </span>
        {content.headline.suffix}
      </h1>
      <p className={styles.subtext}>{content.subtext}</p>
    </div>
  );
}

export default AuditHeader;