import { useBudgetCtx } from "../../../context/BudgetCalculatorContext";

export default function BudgetHeader() {
  const { content, styles } = useBudgetCtx();
  const { badge, headline } = content;

  return (
    <header className={styles.header}>
      <span className={styles.badge}>{badge.text}</span>

      <h2 className={styles.title}>
        {headline.prefix}{" "}
        <span className={styles.highlightWrapper}>
          {headline.highlight}
          <span className={styles.highlightUnderline} aria-hidden="true" />
        </span>{" "}
        {headline.suffix}
      </h2>

      <p className={styles.description}>{headline.description}</p>
    </header>
  );
}
