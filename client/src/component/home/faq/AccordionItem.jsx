import { ChevronDown } from "lucide-react";

function AccordionItem({ question, answer, isOpen, onToggle, styles }) {
  return (
    <div className={styles.accordionItem(isOpen)}>
      <button
        onClick={onToggle}
        className={styles.accordionButton}
      >
        <span className={styles.questionText}>{question}</span>
        <ChevronDown size={20} className={styles.chevronIcon(isOpen)} />
      </button>
      
      <div className={styles.answerContainer(isOpen)}>
        <p className={styles.answerText}>{answer}</p>
      </div>
    </div>
  );
}

export default AccordionItem;