import { useBudgetCtx } from "../../../context/BudgetCalculatorContext";

export default function BusinessTypeSelector({ sectionRef }) {
  const {
    businessTypes, businessType, setBusinessType,
    step1Done, styles,
  } = useBudgetCtx();

  return (
    // Entire card is disabled until step 1 is complete
    <div
      ref={sectionRef}
      className={step1Done ? styles.card : styles.cardDisabled}
      aria-disabled={!step1Done}
    >
      <p className={styles.cardLabel}>Step 2 — Business Type</p>

      <div className={styles.businessTypeContainer} role="radiogroup" aria-label="Business type">
        {businessTypes.map((biz) => {
          const Icon     = biz.icon;
          const isActive = businessType === biz.id;

          return (
            <button
              key={biz.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              disabled={!step1Done}
              onClick={() => setBusinessType(biz.id)}
              className={styles.businessButton(isActive)}
            >
              <Icon size={14} aria-hidden="true" />
              {biz.label}
            </button>
          );
        })}
      </div>

      {/* Contextual hint — tells user this is single-select */}
      {step1Done && (
        <p className={styles.businessHint}>
          {businessType
            ? "✓ Type selected — now choose your services below"
            : "Pick the type that best describes your business"}
        </p>
      )}
    </div>
  );
}
