

function HeroVisual({ styles }) {
  return (
    <div className={styles.visualContainer}>
      <img 
        src="/images/hero-right-image.png" 
        alt="Professional Digital Marketing Expert in Tamil Nadu" 
        className={styles.personImage}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        width={600}
        height={800}
      />
    </div>
  );
}

export default HeroVisual;
