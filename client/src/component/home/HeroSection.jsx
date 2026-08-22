import { heroContent } from "../../utils/constant/homeConstant";
import { heroStyles } from "../../utils/styles/homeStyle";
import HeroBadge from "./hero/HeroBadge";
import HeroHeadline from "./hero/HeroHeadline";
import HeroSubtext from "./hero/HeroSubtext";
import HeroCtaButtons from "./hero/HeroCtaButtons";
import HeroVisual from "./hero/HeroVisual";

function HeroSection() {
  const content = heroContent;
  const styles = heroStyles;

  return (
    <section className={styles.section} id="home">
      {/* Decorative Background Overlays */}
      {/* <div 
        className="absolute top-10 left-[-5%] w-[300px] h-[300px] opacity-10 pointer-events-none bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/images/temple1.png')" }}
      /> */}
      <div 
        className="absolute bottom-20 left-[25%] w-[400px] h-[400px] opacity-[0.01] pointer-events-none bg-no-repeat bg-contain mix-blend-multiply"
        style={{ backgroundImage: "url('/images/tmailnadu-map.png')" }}
      />

      <div className={styles.smokeContainer}>
        <div className={styles.smokeBlob1} />
        <div className={styles.smokeBlob2} />
        <div className={styles.smokeBlob3} />
      </div>
      
      <div className={`${styles.container} relative z-10`}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <img 
              src="/images/hero-right-image.png" 
              alt="Mobile Hero Overlay" 
              className={styles.mobileOverlayImage}
              aria-hidden="true"
            />
            <HeroBadge content={content.badge} styles={styles} />
            <HeroHeadline content={content} styles={styles} />
            <HeroSubtext content={content} styles={styles} />
            <HeroCtaButtons content={content.ctaButtons} styles={styles} />
          </div>
          
          {/* Right Column */}
          <div className={styles.rightColumn}>
            <HeroVisual content={content} styles={styles} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;