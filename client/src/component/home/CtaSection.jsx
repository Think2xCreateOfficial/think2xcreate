import { ctaContent } from "../../utils/constant/homeConstant";
import { ctaStyles } from "../../utils/styles/homeStyle";
import CtaHeader from "./cta/CtaHeader";
import CtaButtons from "./cta/CtaButtons";
import CtaFooter from "./cta/CtaFooter";

function CtaSection() {
  const content = ctaContent;
  const styles = ctaStyles;

  return (
    <section id="contact" className={`${styles.section} relative`}>
      {/* Decorative Illustrations */}
      <div 
        className="absolute top-0 left-0 w-[320px] h-full opacity-[0.04] pointer-events-none  md:block bg-no-repeat bg-left-bottom bg-contain"
        style={{ backgroundImage: "url('/images/city2.png')" }}
      />
      <div 
        className="absolute top-0 right-0 w-[320px] h-full opacity-[0.04] pointer-events-none  md:block bg-no-repeat bg-right-bottom bg-contain"
        style={{ backgroundImage: "url('/images/city3.png')" }}
      />

      <div className={`${styles.container} relative z-10 justify-center text-center`}>
        {/* Main Content */}
        <div className={styles.card}>
          <CtaHeader content={content} styles={styles} />
          <CtaButtons buttons={content.buttons} styles={styles} />
          <CtaFooter text={content.footerText} styles={styles} />
        </div>
      </div>
    </section>
  );
}

export default CtaSection;