function BudgetInput({ budget, setBudget, styles }) {
  return (
    <div className={styles.card}>
      <p className={styles.cardLabel}>Your Monthly Budget</p>
      <p className={styles.budgetAmount}>
        <span className={styles.currency}>₹</span>
        {budget.toLocaleString("en-IN")}
      </p>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={5000}
          max={100000}
          step={1000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className={styles.slider}
        />
      </div>
      <div className={styles.sliderLabels}>
        <span>₹5,000</span>
        <span>₹1,00,000</span>
      </div>
    </div>
  );
}

export default BudgetInput;