import { ArrowRight } from "lucide-react";

function HeroCtaButtons({ content, styles }) {
  return (
    <div className={styles.ctaContainer}>
      <a href={content.primary.href} className={styles.primaryCta}>
        {content.primary.text}
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </a>
      <a href={content.secondary.href} className={styles.secondaryCta}>
        {content.secondary.text}
      </a>
    </div>
  );
}

export default HeroCtaButtons;