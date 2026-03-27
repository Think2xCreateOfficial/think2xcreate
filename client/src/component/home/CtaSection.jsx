import { ctaContent } from "../../utils/constant/homeConstant";
import { ctaStyles } from "../../utils/styles/homeStyle";
import CtaHeader from "./cta/CtaHeader";
import CtaButtons from "./cta/CtaButtons";
import CtaFooter from "./cta/CtaFooter";

function CtaSection() {
  const content = ctaContent;
  const styles = ctaStyles;

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
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