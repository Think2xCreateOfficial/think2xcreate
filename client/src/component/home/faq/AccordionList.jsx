import AccordionItem from "./AccordionItem";

function AccordionList({ faqs, isOpen, onToggle, styles }) {
  return (
    <div className={styles.accordionContainer}>
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={isOpen(faq.id)}
          onToggle={() => onToggle(faq.id)}
          styles={styles}
        />
      ))}
    </div>
  );
}

export default AccordionList;