import FeatureCard from "./Featurecard";

function FeaturesGrid({ features, styles }) {
  const topFeatures = features.slice(0, 3);
  const bottomFeatures = features.slice(3);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.topGrid}>
        {topFeatures.map((feature) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            styles={styles}
          />
        ))}
      </div>
      <div className={styles.bottomGrid}>
        {bottomFeatures.map((feature) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            styles={styles}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturesGrid;