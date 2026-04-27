import { RotateCcwIcon, TrendingUpIcon, UsersIcon, BarChart2Icon, SlidersIcon } from "lucide-react";
import { useBudgetCtx } from "../../../context/BudgetCalculatorContext";

// ─────────────────────────────────────────────────────────────────────────────
// StackedBar
// ─────────────────────────────────────────────────────────────────────────────
function StackedBar({ percentages, barColors, styles }) {
  return (
    <div className={styles.stackedBar} aria-hidden="true">
      {Object.entries(percentages).map(([id, pct]) => (
        <div
          key={id}
          className={`${styles.stackedBarSegment} ${barColors[id] ?? "bg-gray-300"}`}
          style={{ width: `${pct}%` }}
          title={`${id}: ${pct}%`}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BudgetSummaryRow
// ─────────────────────────────────────────────────────────────────────────────
function BudgetSummaryRow({ budget, totalAllocated, remaining, isOverBudget, formatINR, styles }) {
  return (
    <div className={styles.budgetSummaryRow}>
      <div className={styles.budgetSummaryItem}>
        <div className={styles.budgetSummaryVal(false)}>{formatINR(budget)}</div>
        <div className={styles.budgetSummaryLbl}>Total Budget</div>
      </div>
      <div className={styles.budgetSummaryItem}>
        <div className={styles.budgetSummaryVal(isOverBudget)}>{formatINR(totalAllocated)}</div>
        <div className={styles.budgetSummaryLbl}>Allocated</div>
      </div>
      <div className={styles.budgetSummaryItem}>
        <div className={styles.budgetSummaryVal(isOverBudget)}>
          {isOverBudget ? `−${formatINR(Math.abs(remaining))}` : formatINR(remaining)}
        </div>
        <div className={styles.budgetSummaryLbl}>{isOverBudget ? "Over Budget" : "Remaining"}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SpendCard — one card per selected service
// ─────────────────────────────────────────────────────────────────────────────
function SpendCard({ serviceId, servicesList }) {
  const {
    currentPercentages, monetaryAllocation,
    isManualMode, enableManualMode, increaseAllocation, decreaseAllocation,
    barColors, styles,
  } = useBudgetCtx();

  const svc        = servicesList.find((s) => s.id === serviceId);
  const pct        = currentPercentages[serviceId] ?? 0;
  const amount     = monetaryAllocation[serviceId] ?? 0;
  const color      = barColors[serviceId] ?? "bg-gray-400";
  const atMin      = pct <= 5;
  const atMax      = pct >= 95;

  const handleDecrease = () => {
    if (!isManualMode) enableManualMode();
    decreaseAllocation(serviceId);
  };
  const handleIncrease = () => {
    if (!isManualMode) enableManualMode();
    increaseAllocation(serviceId);
  };

  return (
    <div className={styles.spendCard}>
      {/* Header row */}
      <div className={styles.spendHeader}>
        <div className={styles.spendNameRow}>
          <span className={`${styles.spendDot(color)}`} aria-hidden="true" />
          <span className={styles.spendName}>{serviceId}</span>
        </div>
        {svc && (
          <span className={styles.spendMinBadge}>
            Min ₹{svc.minBudget.toLocaleString("en-IN")}
          </span>
        )}
      </div>

      {/* +/− control row */}
      <div className={styles.spendControls}>
        {/* Decrease */}
        <button
          type="button"
          disabled={atMin}
          onClick={handleDecrease}
          className={styles.spendBtn(atMin)}
          aria-label={`Decrease ${serviceId} allocation`}
        >
          −
        </button>

        {/* Amount display */}
        <div className={styles.spendAmountBlock}>
          <div className={styles.spendAmount}>
            ₹{amount.toLocaleString("en-IN")}
          </div>
          <div className={styles.spendPercent}>{pct}% of budget</div>
        </div>

        {/* Increase */}
        <button
          type="button"
          disabled={atMax}
          onClick={handleIncrease}
          className={styles.spendBtn(atMax)}
          aria-label={`Increase ${serviceId} allocation`}
        >
          +
        </button>
      </div>

      {/* Progress bar */}
      <div className={styles.spendBarTrack}>
        <div
          className={styles.spendBarFill(color)}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Floor message */}
      {atMin && (
        <p className={styles.spendAtMin}>Minimum allocation reached</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ResultCards — reach, leads, ROI
// ─────────────────────────────────────────────────────────────────────────────
function ResultCards() {
  const { projectedOutcomes, styles } = useBudgetCtx();
  if (!projectedOutcomes) return null;
  const { reachMin, reachMax, leadsMin, leadsMax, roi } = projectedOutcomes;

  const cards = [
    {
      icon:  <TrendingUpIcon size={20} />,
      label: "Monthly Reach",
      value: `${(reachMin / 1000).toFixed(0)}K – ${(reachMax / 1000).toFixed(0)}K`,
      unit:  "people",
    },
    {
      icon:  <UsersIcon size={20} />,
      label: "Leads / Month",
      value: `${leadsMin} – ${leadsMax}`,
      unit:  "enquiries",
    },
    {
      icon:  <BarChart2Icon size={20} />,
      label: "Expected ROI",
      value: roi,
      unit:  "return on spend",
    },
  ];

  return (
    <div className={styles.resultGrid}>
      {cards.map((card) => (
        <div key={card.label} className={styles.resultCard}>
          <div className={styles.resultIcon} aria-hidden="true">{card.icon}</div>
          <p className={styles.resultLabel}>{card.label}</p>
          <p className={styles.resultValue}>{card.value}</p>
          <p className={styles.resultUnit}>{card.unit}</p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BudgetAllocation (main export)
// ─────────────────────────────────────────────────────────────────────────────
export default function BudgetAllocation({ sectionRef }) {
  const {
    budget, selectedServices, servicesList,
    currentPercentages, totalAllocated, remaining, isOverBudget,
    isManualMode, resetToAuto,
    barColors, formatINR, styles,
  } = useBudgetCtx();

  return (
    <div ref={sectionRef}>
      <div className={styles.card}>
        <p className={styles.cardLabel}>Step 4 — Your Budget Plan</p>

        {/* Manual mode badge */}
        {isManualMode && (
          <div className={styles.manualBadge}>
            <SlidersIcon size={11} />
            Custom allocation — edited by you
          </div>
        )}

        {/* Overview stacked bar */}
        <StackedBar
          percentages={currentPercentages}
          barColors={barColors}
          styles={styles}
        />

        {/* Summary row */}
        <BudgetSummaryRow
          budget={budget}
          totalAllocated={totalAllocated}
          remaining={remaining}
          isOverBudget={isOverBudget}
          formatINR={formatINR}
          styles={styles}
        />

        {/* Over-budget alert — edge case (rounding or extreme manual mode) */}
        {isOverBudget && (
          <div className={styles.overBudgetAlert} role="alert">
            <span className="text-2xl shrink-0" aria-hidden="true">⚠️</span>
            <div>
              <p className={styles.overBudgetMsg}>You're over budget</p>
              <p className={styles.overBudgetSub}>
                Reduce an allocation or increase your total budget above.
              </p>
            </div>
          </div>
        )}

        {/* Per-service spend cards */}
        {selectedServices.map((id) => (
          <SpendCard key={id} serviceId={id} servicesList={servicesList} />
        ))}

        {/* Reset to recommended (only shown in manual mode) */}
        {isManualMode && (
          <button
            type="button"
            onClick={resetToAuto}
            className={styles.resetLink}
            aria-label="Reset to recommended allocation"
          >
            <RotateCcwIcon size={14} />
            Reset to recommended split
          </button>
        )}
      </div>

      {/* Result metric cards */}
      {/* <ResultCards /> */}
    </div>
  );
}
