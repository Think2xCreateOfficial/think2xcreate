function DashboardHeader({ content, styles }) {
  const Icon = content.header.icon;
  
  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.revenueBadge}>
        <Icon size={14} className="text-yellow-500" />
        <span className={styles.revenueText}>{content.header.label}</span>
        <span className={styles.revenueValue}>{content.header.value}</span>
      </div>
      <span className={styles.dashboardTitle}>{content.title}</span>
    </div>
  );
}

export default DashboardHeader;