import { heroContent } from "../../utils/constant/homeConstant";
import { heroStyles } from "../../utils/styles/homeStyle";
import HeroBadge from "./hero/HeroBadge";
import HeroHeadline from "./hero/HeroHeadline";
import HeroSubtext from "./hero/HeroSubtext";
import HeroCtaButtons from "./hero/HeroCtaButtons";
import HeroDashboard from "./hero/HeroDashboard";
import FloatingCards from "./hero/FloatingCards";

function HeroSection() {
  const content = heroContent;
  const styles = heroStyles;

  return (
    <section className={styles.section}>
      <div className={styles.backgroundBlob} />
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <HeroBadge content={content.badge} styles={styles} />
            <HeroHeadline content={content} styles={styles} />
            <HeroSubtext content={content} styles={styles} />
            <HeroCtaButtons content={content.ctaButtons} styles={styles} />
          </div>
          
          {/* Right Column */}
          <div className={styles.rightColumn}>
            <HeroDashboard content={content} styles={styles} />
            <FloatingCards content={content.floatingCards} styles={styles} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;