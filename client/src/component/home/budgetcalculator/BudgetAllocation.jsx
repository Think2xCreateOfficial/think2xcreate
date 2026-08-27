import { useState } from "react";
import {
  RotateCcwIcon, TrendingUpIcon, UsersIcon, BarChart2Icon,
  SlidersIcon, FileTextIcon, XIcon, SendIcon, CheckCircleIcon,
  PhoneIcon, UserIcon, BriefcaseIcon,
  TriangleAlert
} from "lucide-react";
import { useBudgetCtx } from "../../../context/BudgetCalculatorContext";
import { generateQuotationPDF } from "../../../utils/pdfGenerator";
import { trackContactFormSuccess, trackWhatsappClick } from "../../../analytics/events";

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

  const svc    = servicesList.find((s) => s.id === serviceId);
  const pct    = currentPercentages[serviceId] ?? 0;
  const amount = monetaryAllocation[serviceId] ?? 0;
  const color  = barColors[serviceId] ?? "bg-gray-400";
  const atMin  = pct <= 5;
  const atMax  = pct >= 95;

  const handleDecrease = () => { if (!isManualMode) enableManualMode(); decreaseAllocation(serviceId); };
  const handleIncrease = () => { if (!isManualMode) enableManualMode(); increaseAllocation(serviceId); };

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
        <button
          type="button"
          disabled={atMin}
          onClick={handleDecrease}
          className={styles.spendBtn(atMin)}
          aria-label={`Decrease ${serviceId} allocation`}
        >
          −
        </button>
        <div className={styles.spendAmountBlock}>
          <div className={styles.spendAmount}>₹{amount.toLocaleString("en-IN")}</div>
          <div className={styles.spendPercent}>{pct}% of budget</div>
        </div>
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
    { icon: <TrendingUpIcon size={20} />, label: "Monthly Reach", value: `${(reachMin / 1000).toFixed(0)}K – ${(reachMax / 1000).toFixed(0)}K`, unit: "people" },
    { icon: <UsersIcon size={20} />,     label: "Leads / Month", value: `${leadsMin} – ${leadsMax}`, unit: "enquiries" },
    { icon: <BarChart2Icon size={20} />, label: "Expected ROI",  value: roi, unit: "return on spend" },
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
// QuotationModal — glassmorphic form → PDF + WhatsApp
// ─────────────────────────────────────────────────────────────────────────────
function QuotationModal({ onClose, onSuccess, budgetData }) {
  const [clientData, setClientData] = useState({ name: '', businessName: '', phone: '' });
  const [errors, setErrors]         = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone]         = useState(false);

  const validate = () => {
    const e = {};
    if (!clientData.name.trim())         e.name         = 'Full name is required';
    if (!clientData.businessName.trim()) e.businessName = 'Business name is required';
    if (!clientData.phone.trim())        e.phone        = 'WhatsApp number is required';
    else if (!/^\+?[0-9\s\-()+]{7,}$/.test(clientData.phone)) e.phone = 'Enter a valid phone number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (evt) =>
    setClientData((prev) => ({ ...prev, [field]: evt.target.value }));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    // Generate & download PDF
    generateQuotationPDF(clientData, budgetData);

    try {
      trackContactFormSuccess('budget_calculator', 'budget_quotation', budgetData.businessType || 'General');
      trackWhatsappClick('budget_modal');
    } catch {
      // safe fallback
    }

    // Build WhatsApp message
    const SERVICE_LABELS = {
      'website-development': 'Website Development',
      'meta-ads':            'Meta Ads Management',
      'social-media':        'Social Media Management',
      'video-editing':       'Photo & Video Editing',
    };

    const serviceLines = budgetData.allocations
      .map(({ service, amount }) =>
        `• ${SERVICE_LABELS[service] || service}: ₹${amount.toLocaleString('en-IN')}/mo`
      )
      .join('\n');

    const waText = encodeURIComponent(
      `Hi Think2xCreate! \n\nI just generated a quotation from your website and would like to discuss further.\n\n` +
      `*Client Details:*\nName: ${clientData.name}\nBusiness: ${clientData.businessName}\nPhone: ${clientData.phone}\n\n` +
      `*Monthly Budget Plan:*\n${serviceLines}\n\n` +
      `*Total Monthly Investment: ₹${budgetData.totalBudget.toLocaleString('en-IN')}*\n` +
      `Business Type: ${budgetData.businessType || 'General'}\n\n` +
      `Please get in touch to finalise the plan!`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setTimeout(() => {
        window.open(`https://wa.me/917825962962?text=${waText}`, '_blank');
        onClose();
        if (onSuccess) onSuccess();
      }, 1600);
    }, 900);
  };

  // Shared input style helper
  const inputCls = (err) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium text-gray-800 placeholder-gray-400 ` +
    `outline-none transition-all duration-200 focus:ring-2 focus:ring-yellow-100 focus:border-yellow-400 ` +
    (err ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white');

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Card — stop propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-[fadeInUp_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Modal Header (dark branding band) ── */}
        <div className="bg-gray-900 p-6 relative overflow-hidden">
          {/* Yellow accent line at top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
            aria-label="Close quotation modal"
          >
            <XIcon size={15} />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center shrink-0">
              <FileTextIcon size={20} className="text-gray-900" />
            </div>
            <div>
              <h3 className="text-white font-bold leading-tight">Generate Professional Quotation</h3>
              <p className="text-gray-400 text-[11px] font-medium mt-0.5">
                Fill in your details → PDF download + WhatsApp inquiry
              </p>
            </div>
          </div>
        </div>

        {/* ── Form Body ── */}
        <div className="p-6">
          {isDone ? (
            /* Success state */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon size={32} className="text-green-600" />
              </div>
              <h4 className="text-gray-900 font-black text-lg mb-1">PDF Downloaded!</h4>
              <p className="text-gray-500 text-sm font-medium">Redirecting you to WhatsApp now…</p>
              <div className="mt-4 flex items-center justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-1.5">
                  <UserIcon size={10} className="inline mr-1 mb-0.5" />Your Full Name
                </label>
                <input
                  id="quote-name"
                  type="text"
                  placeholder="e.g. Arjun Kumar"
                  value={clientData.name}
                  onChange={handleChange('name')}
                  className={inputCls(errors.name)}
                  autoComplete="name"
                />
                {errors.name && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-1.5">
                  <BriefcaseIcon size={10} className="inline mr-1 mb-0.5" />Business Name
                </label>
                <input
                  id="quote-business"
                  type="text"
                  placeholder="e.g. Arjun Enterprises"
                  value={clientData.businessName}
                  onChange={handleChange('businessName')}
                  className={inputCls(errors.businessName)}
                  autoComplete="organization"
                />
                {errors.businessName && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.businessName}</p>}
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-1.5">
                  <PhoneIcon size={10} className="inline mr-1 mb-0.5" />WhatsApp Number
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={clientData.phone}
                  onChange={handleChange('phone')}
                  className={inputCls(errors.phone)}
                  autoComplete="tel"
                />
                {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>}
              </div>

              {/* Budget mini-summary */}
              <div className="bg-yellow-50 border border-yellow-200/80 rounded-2xl p-4">
                <p className="text-[10px] font-black text-yellow-700 uppercase tracking-widest mb-1">
                  Your Monthly Budget Plan
                </p>
                <p className="text-2xl font-black text-gray-900 leading-none">
                  ₹{budgetData.totalBudget.toLocaleString('en-IN')}
                  <span className="text-xs font-bold text-gray-400 ml-1">/month</span>
                </p>
                <p className="text-[11px] text-gray-500 font-medium mt-1.5">
                  {budgetData.allocations.length} service{budgetData.allocations.length !== 1 ? 's' : ''} selected
                  {budgetData.businessType ? ` · ${budgetData.businessType}` : ''}
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="quote-submit-btn"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] text-black font-black text-sm py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? <span className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                  : <SendIcon size={15} />
                }
                {isSubmitting ? 'Generating PDF…' : 'Download PDF & WhatsApp Us'}
              </button>

              <p className="text-center text-[10px] text-gray-400 font-medium leading-relaxed">
                Your branded quotation PDF downloads automatically and you'll be redirected to WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BudgetAllocation (main export)
// ─────────────────────────────────────────────────────────────────────────────
export default function BudgetAllocation({ sectionRef }) {
  const {
    budget, selectedServices, servicesList,
    currentPercentages, monetaryAllocation,
    totalAllocated, remaining, isOverBudget,
    isManualMode, resetToAuto, resetCalculator,
    businessType,
    barColors, formatINR, styles,
  } = useBudgetCtx();

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Build allocations array for PDF generator & WhatsApp message
  const allocationsList = Object.entries(monetaryAllocation).map(
    ([service, amount]) => ({ service, amount })
  );

  const budgetData = {
    totalBudget:  budget,
    businessType,
    allocations:  allocationsList,
  };

  return (
    <div ref={sectionRef} className="w-full grid place-items-center">
      <div className={`${styles.card} w-full max-w-3xl xl:max-w-4xl`}>
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

        {/* Over-budget alert */}
        {isOverBudget && (
          <div className={styles.overBudgetAlert} role="alert">
            <span className="text-2xl shrink-0" aria-hidden="true"><TriangleAlert size={18} className="inline-block w-8 h-8 text-yellow-500" /></span>
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

        {/* Reset to recommended (only in manual mode) */}
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

        {/* ── Generate Quotation CTA ── */}
        {selectedServices.length > 0 && (
          <div className="mt-6 pt-5 border-t border-gray-100">
            <button
              id="generate-quotation-btn"
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="w-full flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-gray-800 active:scale-[0.98] text-white font-black text-sm py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <FileTextIcon size={16} className="text-yellow-400 group-hover:scale-110 transition-transform duration-200" />
              Generate Professional Quotation
            </button>
            <p className="text-center text-[10px] text-gray-400 font-medium mt-2">
              Download a branded PDF &amp; send a WhatsApp inquiry instantly
            </p>
          </div>
        )}
      </div>

      {/* Result metric cards */}
      {/* <ResultCards /> */}

      {/* Quotation Modal */}
      {isQuoteOpen && (
        <QuotationModal
          onClose={() => setIsQuoteOpen(false)}
          onSuccess={() => resetCalculator()}
          budgetData={budgetData}
        />
      )}
    </div>
  );
}