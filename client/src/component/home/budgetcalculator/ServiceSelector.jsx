import { SERVICE_MIN_COST } from "../../../hooks/useBudgetCalculator";
import { Check, Lock } from "lucide-react";

function ServiceSelector({ services, selected, toggleService, canSelectService, budgetWarning, styles }) {
  return (
    <div className="mt-6">
      <p className={styles.cardLabel}>
        Select Services
        <span className="ml-2 text-gray-500 normal-case font-medium tracking-normal">
          — choose what you want to invest in
        </span>
      </p>

      {/* Service cards grid */}
      <div className={styles.serviceGrid}>
        {services.map((service) => {
          const isActive   = selected.includes(service.id);
          const isDisabled = !isActive && !canSelectService(service.id);
          const minCost    = SERVICE_MIN_COST[service.id];
          const Icon = service.emoji;
          return (
            <button
              key={service.id}
              onClick={() => !isDisabled && toggleService(service.id)}
              disabled={isDisabled}
              aria-pressed={isActive}
              className={styles.serviceCard(isActive, isDisabled)}
            >
              {/* Checkmark when selected */}
              {isActive && (
                <span className={styles.serviceCheck}>
                  <Check />
                </span>
              )}

              {/* Lock icon when budget too low */}
              {isDisabled && (
                <span className={styles.serviceLock}>
                  <Lock className="w-6 h-6 text-black bg-yellow-500 p-1 rounded-full" />
                </span>
              )}

              <span className={styles.serviceEmoji}>
                <Icon />
              </span>
              <span className={styles.serviceName}>{service.label}</span>
              <span className={styles.serviceDesc}>{service.description}</span>

              {/* Minimum cost badge */}
              <span className={`${styles.serviceMinCost} ${styles.serviceMinCostText(isActive)}`}>
                Min ₹{minCost.toLocaleString("en-IN")}/mo
              </span>

              {/* Disabled reason */}
              {isDisabled && (
                <span className="text-xs text-gray-300 font-semibold mt-1">
                  Budget too low
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Budget warning banner — visible, not just tiny text */}
      {budgetWarning && (
        <div className={styles.budgetWarningBanner}>
          <span className={styles.budgetWarningIcon}></span>
          <div>
            <p className={styles.budgetWarningText}>
              Can't add more services right now
            </p>
            <p className={styles.budgetWarningSub}>{budgetWarning}</p>
          </div>
        </div>
      )}

      {/* Selection count hint */}
      {selected.length > 0 && !budgetWarning && (
        <p className="text-xs text-gray-400 mt-3 text-center">
          {selected.length} {selected.length === 1 ? "service" : "services"} selected
          {selected.length < 4 && (
            <span className="text-gray-300"> · tap to add more</span>
          )}
        </p>
      )}
    </div>
  );
}

export default ServiceSelector;