import * as LucideIcons from "lucide-react";

function ServiceCard({ icon, title, tagline, description, styles }) {
  const Icon = LucideIcons[icon] || LucideIcons.Zap;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={22} />
      </div>
      <div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardTagline}>{tagline}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;