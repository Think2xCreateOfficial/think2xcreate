import { faqContent, faqs } from "../../utils/constant/homeConstant";
import { faqStyles } from "../../utils/styles/homeStyle";
import FaqHeader from "./faq/FaqHeader";
import AccordionList from "./faq/AccordionList";
import { useFaq } from "../../hooks/useFaq";

function FaqSection() {
  const content = faqContent;
  const styles = faqStyles;
  const { toggle, isOpen } = useFaq();

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <FaqHeader content={content} styles={styles} />
        <AccordionList
          faqs={faqs}
          isOpen={isOpen}
          onToggle={toggle}
          styles={styles}
        />
      </div>
    </section>
  );
}

export default FaqSection;