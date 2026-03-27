import { businessAuditContent } from "../../utils/constant/homeConstant";
import { businessAuditStyles } from "../../utils/styles/homeStyle";
import { useAudit } from "../../hooks/useBusinessAudit";
import AuditHeader from "./businessaudit/AuditHeader";
import AuditQuestion from "./businessaudit/AuditQuestion";
import AuditProgress from "./businessaudit/AuditProgress";
import AuditCta from "./businessaudit/AuditCta";

function BusinessAuditSection() {
  const content = businessAuditContent;
  const styles = businessAuditStyles;
  const { answers, toggleAnswer, answeredCount, isComplete, score, scoreInfo } = useAudit();

  return (
    <section className={styles.section}>
      <div className={styles.blobTop} />
      <div className={styles.blobBottom} />
      
      <div className={styles.container}>
        <AuditHeader content={content} styles={styles} />
        
        <div className={styles.card}>
          <div className={styles.questionsContainer}>
            {content.questions.map((question) => (
              <AuditQuestion
                key={question.id}
                question={question}
                answer={answers[question.id]}
                onToggle={toggleAnswer}
                styles={styles}
              />
            ))}
          </div>
          
          <AuditProgress
            answeredCount={answeredCount}
            total={content.questions.length}
            score={score}
            scoreInfo={scoreInfo}
            styles={styles}
          />
          
          <AuditCta content={content.ctaButton} isComplete={isComplete} styles={styles} />
        </div>
      </div>
    </section>
  );
}

export default BusinessAuditSection;