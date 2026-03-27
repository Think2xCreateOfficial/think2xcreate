import * as LucideIcons from "lucide-react";

function FeatureCard({ icon, title, description, highlight, styles }) {
  const Icon = LucideIcons[icon] || LucideIcons.Star;

  return (
    <div className={styles.card(highlight)}>
      {highlight && (
        <span className={styles.highlightBadge}>
          Most Valued
        </span>
      )}
      <div className={styles.iconWrapper(highlight)}>
        <Icon size={22} />
      </div>
      <div>
        <h3 className={styles.cardTitle(highlight)}>{title}</h3>
        <p className={styles.cardDescription(highlight)}>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;