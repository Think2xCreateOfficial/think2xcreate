function FloatingCards({ content, styles }) {
  const LeadsIcon = content.leads.icon;
  const CampaignsIcon = content.campaigns.icon;
  
  return (
    <>
      <div className={`${styles.floatingCard} ${styles.floatingCardTop}`}>
        <div className={styles.iconBox}>
          <LeadsIcon size={14} className="text-yellow-600" />
        </div>
        <div>
          <p className={styles.floatingLabel}>{content.leads.label}</p>
          <p className={styles.floatingValue}>{content.leads.value}</p>
        </div>
      </div>
      
      <div className={`${styles.floatingCard} ${styles.floatingCardBottom}`}>
        <div className={styles.iconBox}>
          <CampaignsIcon size={14} className="text-yellow-600" />
        </div>
        <div>
          <p className={styles.floatingLabel}>{content.campaigns.label}</p>
          <p className={styles.floatingValue}>{content.campaigns.value}</p>
        </div>
      </div>
    </>
  );
}

export default FloatingCards;