import { CheckIcon, LockIcon, AlertTriangleIcon } from "lucide-react";
import { useBudgetCtx }  from "../../../context/BudgetCalculatorContext";

export default function ServiceSelector({ sectionRef }) {
  const {
    servicesList, selectedServices, toggleService, canSelectService,
    businessType, budgetWarning, step2Done, formatINR, styles,
  } = useBudgetCtx();

  return (
    <div
      ref={sectionRef}
      className={step2Done ? styles.card : styles.cardDisabled}
      aria-disabled={!step2Done}
    >
      <p className={styles.cardLabel}>Step 3 — Services</p>

      {/* Service grid wrapper — overlay sits on top when locked */}
      <div className={styles.serviceGridWrap}>
        <div
          className={styles.serviceGrid}
          role="group"
          aria-label="Marketing services"
        >
          {servicesList.map((svc) => {
            const Icon       = svc.icon;
            const isSelected = selectedServices.includes(svc.id);
            // FIX: canSelectService returns false when no businessType
            const isBlocked  = !canSelectService(svc.id) && !isSelected;

            return (
              <button
                key={svc.id}
                type="button"
                role="checkbox"
                aria-checked={isSelected}
                aria-disabled={isBlocked || !step2Done}
                disabled={isBlocked || !step2Done}
                onClick={() => toggleService(svc.id)}
                className={styles.serviceCard(isSelected, isBlocked)}
              >
                {/* Icon */}
                <span className={styles.serviceIconWrap(isSelected)}>
                  <Icon
                    size={16}
                    className={styles.serviceIconColor(isSelected)}
                    aria-hidden="true"
                  />
                </span>

                {/* Name + description */}
                <span className={styles.serviceName}>{svc.label}</span>
                <span className={styles.serviceDesc}>{svc.description}</span>

                {/* Minimum budget label */}
                <span className={styles.serviceMinCost(isSelected)}>
                  Min ₹{svc.minBudget.toLocaleString("en-IN")}/mo
                </span>

                {/* State indicator — check or lock */}
                {isSelected && (
                  <span className={styles.serviceCheck} aria-hidden="true">
                    <CheckIcon size={10} strokeWidth={3} />
                  </span>
                )}
                {isBlocked && step2Done && (
                  <span className="absolute top-3 right-3 text-gray-300" aria-label="Insufficient budget">
                    <LockIcon size={14} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* LOCK OVERLAY — FIX: shown when no business type selected */}
        {!businessType && (
          <div className={styles.serviceOverlay} aria-live="polite">
            <p className={styles.serviceOverlayMsg}>
              Select a business type first
            </p>
          </div>
        )}
      </div>

      {/* Budget warning banner */}
      {budgetWarning && (
        <div className={styles.budgetWarningBanner} role="alert">
          <AlertTriangleIcon size={18} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className={styles.budgetWarningText}>
              These services need {formatINR(budgetWarning.required)}/mo minimum
            </p>
            <p className={styles.budgetWarningSub}>
              Increase your budget by {formatINR(budgetWarning.shortfall)} or remove a service
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
