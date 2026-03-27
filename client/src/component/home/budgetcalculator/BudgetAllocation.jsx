import { SERVICE_MIN_COST } from "../../../hooks/useBudgetCalculator";
import { RotateCcw, Plus, Minus } from "lucide-react";

function BudgetAllocation({
  alloc,              
  monetaryAllocation, 
  budget,
  barColors,
  formatINR,
  styles,
  isManualMode,
  increaseAllocation,
  decreaseAllocation,
  resetToAuto,
  
  enableManualMode,
  updateManualAllocation,
}) {
  const services       = Object.keys(monetaryAllocation);
  const totalAllocated = Object.values(monetaryAllocation).reduce((sum, n) => sum + n, 0);
  const remaining      = budget - totalAllocated;
  const isOverBudget   = remaining < -1;
  const isBalanced     = Math.abs(remaining) <= 1;

  if (!services.length) return null;

  return (
    <div className={styles.card}>
      <p className={styles.cardLabel}>
        Your Budget Split
        <span className="ml-2 text-gray-300 normal-case font-medium tracking-normal">
          — adjust how much each service gets
        </span>
      </p>

      {/* ── Stacked overview bar ──────────────────────────────────────────── */}
      {/* One glance tells the user exactly where their money is going */}
      <div className={styles.stackedBar}>
        {services.map((service) => (
          <div
            key={service}
            className={`${styles.stackedBarSegment} ${barColors[service]}`}
            style={{ width: `${(monetaryAllocation[service] / budget) * 100}%` }}
            title={`${service}: ${formatINR(monetaryAllocation[service])}`}
          />
        ))}
        {/* Unallocated remainder (edge case) */}
        {remaining > 1 && (
          <div className="flex-1 bg-gray-200" title="Not yet allocated" />
        )}
      </div>

      {/* ── Budget summary row ────────────────────────────────────────────── */}
      <div className={styles.budgetSummaryRow}>
        <div className={styles.budgetSummaryItem}>
          <p className={styles.budgetSummaryVal}>{formatINR(budget)}</p>
          <p className={styles.budgetSummaryLbl}>Total Budget</p>
        </div>
        <div className={styles.budgetSummaryItem}>
          <p className={`${styles.budgetSummaryVal} ${isBalanced ? "text-green-600" : isOverBudget ? "text-red-600" : "text-yellow-600"}`}>
            {formatINR(totalAllocated)}
          </p>
          <p className={styles.budgetSummaryLbl}>Allocated</p>
        </div>
        <div className={styles.budgetSummaryItem}>
          <p className={`${styles.budgetSummaryVal} ${isBalanced ? "text-green-600" : isOverBudget ? "text-red-600" : "text-blue-600"}`}>
            {isBalanced ? "✓ All set" : isOverBudget ? `−${formatINR(Math.abs(remaining))}` : `+${formatINR(remaining)}`}
          </p>
          <p className={styles.budgetSummaryLbl}>{isOverBudget ? "Over Budget" : "Remaining"}</p>
        </div>
      </div>

      {/* ── Over-budget alert ─────────────────────────────────────────────── */}
      {/* Large, impossible to miss — tells user exactly what's wrong */}
      {isOverBudget && (
        <div className={styles.overBudgetAlert}>
          <span className={styles.overBudgetIcon}>🚨</span>
          <div>
            <p className={styles.overBudgetMsg}>
              You're over budget by {formatINR(Math.abs(remaining))}
            </p>
            <p className={styles.overBudgetSub}>
              Press − on any service below to reduce its spend
            </p>
          </div>
        </div>
      )}

      {/* ── Per-service spend cards ───────────────────────────────────────── */}
      {services.map((service) => {
        const amount     = monetaryAllocation[service] || 0;
        const percentage = alloc[service] || 0;
        const minCost    = SERVICE_MIN_COST[service] || 0;
        const atMin      = amount <= minCost;

        return (
          <div key={service} className={styles.spendCard}>

            {/* Card header: service name + min cost badge */}
            <div className={styles.spendHeader}>
              <div className={styles.spendNameRow}>
                <span className={styles.spendDot(barColors[service])} />
                <span className={styles.spendName}>{service}</span>
              </div>
              <span className={styles.spendMinBadge}>
                Min {formatINR(minCost)}/mo
              </span>
            </div>

            {/* ── Main control row: [−]  ₹amount  [+] ──────────────────── */}
            <div className={styles.spendControls}>

              {/* Decrease button — disabled at minimum */}
              <button
                onClick={() => decreaseAllocation(service)}
                disabled={atMin}
                aria-label={`Decrease ${service} budget`}
                className={styles.spendBtn(atMin)}
              >
                <Minus />
              </button>

              {/* Amount display */}
              <div className={styles.spendAmountBlock}>
                <p className={styles.spendAmount}>{formatINR(amount)}</p>
                <p className={styles.spendPercent}>{percentage}% of your budget</p>
              </div>

              {/* Increase button */}
              <button
                onClick={() => increaseAllocation(service)}
                aria-label={`Increase ${service} budget`}
                className={styles.spendBtn(false)}
              >
                <Plus />
              </button>

            </div>

            {/* Progress bar */}
            <div className={styles.spendBarTrack}>
              <div
                className={styles.spendBarFill(barColors[service])}
                style={{ width: `${percentage}%` }}
              />
            </div>

            {/* Floor price note — shows when − is disabled */}
            {atMin && (
              <p className={styles.spendAtMin}>
                Service price reached — can't reduce further
              </p>
            )}

          </div>
        );
      })}

      {/* ── Reset link — visible only when user has customised ───────────── */}
      {isManualMode && (
        <button onClick={resetToAuto} className={styles.resetLink}>
          <RotateCcw className="w-5 h-5 inline-block " /> Reset to recommended split
        </button>
      )}
    </div>
  );
}

export default BudgetAllocation;