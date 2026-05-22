// hero section styles
export const heroStyles = {
  // ─── Section & layout ───────────────────────────────────────────────────────
  section: "relative bg-white flex items-center overflow-hidden",

  // Original decorative blob (kept as-is)
  backgroundBlob:
    "absolute -top-10 -right-10 w-1/3 h-4/5 bg-[#FFFBEA] rounded-full hidden lg:block pointer-events-none",

  // ─── Yellow smoke effect ─────────────────────────────────────────────────────
  // Wrapper: covers full section, sits at z-0, never intercepts clicks
  smokeContainer:
    "absolute inset-0 z-0 pointer-events-none overflow-hidden",

  // Three blobs — sized with clamp so they never cover centre content
  // Blob 1: bottom-left corner bleed
  smokeBlob1:
    "absolute bottom-[-8%] left-[-6%] h-smoke-1 rounded-full pointer-events-none " +
    "bg-yellow-300 opacity-[0.13] " +
    "w-[clamp(220px,38vw,520px)] h-[clamp(160px,28vw,380px)] " +
    "blur-[90px]",

  // Blob 2: right-side mid bleed
  smokeBlob2:
    "absolute top-[30%] right-[-8%] h-smoke-2 rounded-full pointer-events-none " +
    "bg-amber-200 opacity-[0.09] " +
    "w-[clamp(180px,28vw,400px)] h-[clamp(130px,20vw,300px)] " +
    "blur-[80px]",

  // Blob 3: top-left accent — small and very soft
  smokeBlob3:
    "absolute top-[-4%] left-[10%] h-smoke-3 rounded-full pointer-events-none " +
    "bg-yellow-200 opacity-[0.07] " +
    "w-[clamp(120px,18vw,280px)] h-[clamp(100px,14vw,220px)] " +
    "blur-[70px]",

  // ─── Main content container (z-10 keeps it above smoke) ──────────────────────
  container:
    "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-22 lg:pt-24 pb-10 w-full",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",

  // ─── Left column — staggered entrance via animation classes ──────────────────
  leftColumn: "flex flex-col gap-6",

  // Each UI piece gets an entrance class + delay class (applied in HeroSection)
  animDelays: {
    badge:    "h-fade-up h-d0",
    headline: "h-fade-up h-d100",
    subtext:  "h-fade-up h-d200",
    cta:      "h-fade-up h-d300",
  },

  badge:
    "inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 " +
    "text-yellow-700 text-xs font-bold px-4 py-2 rounded-full w-fit",
  badgeDot: "w-2 h-2 bg-yellow-400 rounded-full animate-pulse",
  headline:
    "text-4xl sm:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.08] " +
    "tracking-tight font-display",
  highlightText: "text-yellow-400",
  subtext:
    "text-gray-500 text-base sm:text-lg leading-relaxed max-w-md",
  strongText: "text-gray-800",
  ctaContainer: "flex flex-col sm:flex-row gap-3",
  primaryCta:
    "flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 " +
    "text-black font-black text-base px-8 py-4 rounded-2xl shadow-lg " +
    "hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group",
  secondaryCta:
    "flex items-center justify-center gap-2 bg-white border-2 border-gray-200 " +
    "hover:border-yellow-400 text-gray-800 font-bold text-base px-8 py-4 " +
    "rounded-2xl hover:-translate-y-0.5 transition-all duration-200",

  // ─── Right column — slides in from the right ─────────────────────────────────
  rightColumn:
    "relative flex justify-center lg:justify-end h-slide-in h-d200 hidden lg:block",
  dashboardWrapper: "w-full max-w-md",
  dashboardCard:
    "bg-white rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100 p-6 relative",
  dashboardHeader: "flex items-center justify-between mb-4",
  revenueBadge:
    "bg-yellow-50 rounded-xl px-4 py-2 flex items-center gap-2",
  revenueText: "text-xs text-gray-500",
  revenueValue: "text-sm font-black text-gray-900",
  dashboardTitle: "text-xs text-gray-400 font-semibold",
  barChart: "flex items-end gap-1.5 h-28 mb-4",
  bar: (isHighlighted) =>
    `flex-1 rounded-t-lg transition-all duration-500 ${
      isHighlighted ? "bg-yellow-400" : "bg-yellow-100"
    }`,
  xAxis:
    "flex justify-between text-[10px] text-gray-400 font-medium mb-4",
  metricsGrid: "grid grid-cols-3 gap-3 mb-0",
  metricCard: "bg-gray-50 rounded-xl p-3",
  metricLabel: "text-[10px] text-gray-400 font-semibold uppercase mb-1",
  metricValue: "text-base font-black",
  metricSub: "text-[10px] font-bold",

  // ─── Floating cards — perpetual float, each at its own rhythm ────────────────
  floatingCard:
    "absolute bg-white rounded-2xl shadow-xl border border-gray-100 " +
    "px-4 py-3 flex items-center gap-2",
  floatingCardTop:    "-top-4 -right-4 h-float-1",
  floatingCardBottom: "-bottom-4 -left-4 h-float-2",
  iconBox:
    "w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center",
  floatingLabel: "text-[10px] text-gray-400 font-semibold",
  floatingValue: "text-lg font-black text-gray-900",
};

// business audit section styles
export const businessAuditStyles = {
  section: "min-h-screen bg-[#FDFBF4] flex flex-col items-center justify-center pt-8 pb-10 px-4 relative",

  blobTop: "absolute top-24 left-1/4 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none",
  blobBottom: "absolute bottom-20 right-1/4 w-56 h-56 bg-yellow-100/60 rounded-full blur-2xl pointer-events-none",

  container: "relative w-full max-w-2xl mx-auto",

  // Header styles
  header: "text-center mb-8",
  badge: "inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase",
  headline: "text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-3",
  highlight: "text-yellow-500 relative",
  underline: "absolute -bottom-1 left-0 w-full",
  subtext: "text-gray-500 text-base font-medium",

  card: "bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-6 sm:p-8 overflow-hidden",

  questionsContainer: "space-y-3",

  questionItem:
    "flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-yellow-50/60 transition-colors duration-200 group",

  iconBox:
    "w-9 h-9 flex-shrink-0 flex items-center justify-center bg-yellow-100 rounded-xl text-yellow-600",

  questionText:
    "text-sm sm:text-base font-medium text-gray-700 leading-snug flex-1 min-w-0",

  buttonGroup:
    "flex gap-2 flex-shrink-0 w-full sm:w-auto justify-end",

  yesButton: (isActive) => `
    px-3 sm:px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 border-2
    ${
      isActive
        ? "bg-yellow-400 border-yellow-400 text-black shadow-sm"
        : "bg-white border-gray-200 text-gray-500 hover:border-yellow-300"
    }
  `,

  noButton: (isActive) => `
    px-3 sm:px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 border-2
    ${
      isActive
        ? "bg-gray-900 border-gray-900 text-white shadow-sm"
        : "bg-white border-gray-200 text-gray-500 hover:border-gray-400"
    }
  `,

  // Progress styles
  progressContainer: "mt-6 pt-5 border-t border-gray-100",
  progressHeader: "flex items-center justify-between mb-2",
  scoreLabel: "text-sm font-semibold text-gray-700",
  scoreValue: "text-gray-900",
  scoreStatus: "text-sm font-bold",

  progressBar: "h-2.5 bg-gray-100 rounded-full overflow-hidden",

  progressFill: (barColor, width) => `
    h-full rounded-full transition-all duration-700 ease-out ${barColor} ${width}
  `,

  // CTA styles
  ctaButton:
    "mt-5 flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] text-black font-bold text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
};

// service section styles
export const serviceStyles = {
  section: "py-8 px-4 bg-gray-50",
  container: "max-w-7xl mx-auto",
  
  // Header styles
  header: "text-center mb-12",
  badge: "inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase",
  title: "text-3xl sm:text-4xl font-black text-gray-900 mb-3",
  description: "text-gray-500 text-base max-w-xl mx-auto",
  
  // Grid styles
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
  
  // Card styles
  card: "group bg-white rounded-2xl border border-gray-100 p-6 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-50 hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col gap-4",
  iconWrapper: "w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300",
  cardTitle: "text-lg font-bold text-gray-900 mb-1",
  cardTagline: "text-sm text-yellow-600 font-semibold text-black mb-2",
  cardDescription: "text-sm text-gray-800 leading-relaxed"
};

// whychoose us section styles 
export const whyChooseUsStyles = {
  section: "py-8 px-4 bg-gradient-to-br from-white via-gray-50 to-white",
  container: "max-w-6xl mx-auto",
  
  // Header styles
  header: "text-center mb-12",
  badge: "inline-block bg-white/90 text-yellow-600 text-xs font-medium px-3 py-1 rounded-full mb-4 uppercase tracking-wide shadow-sm backdrop-blur-sm border border-gray-200/50",
  title: "text-3xl sm:text-4xl font-bold text-gray-900 mb-3",
  description: "text-gray-500 text-base max-w-md mx-auto",
  
  // Grid layout
  gridContainer: "space-y-6",
  topGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center",
  bottomGrid: "grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto",
  
  // Premium Light Glass Liquid Card
  card: (highlight) => `
    relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-500 
    cursor-default group overflow-hidden
    /* Premium Light Glass */
    bg-white/50
    backdrop-blur-lg backdrop-saturate-150
    /* Frosted Border */
    border border-white/60
    /* Soft Shadow */
    shadow-lg shadow-gray-200/30
    /* Smooth Transitions */
    transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
    /* Hover Effects */
    hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-200/60
    hover:border-white/80
    hover:bg-yellow-300
    /* Featured Card */
    ${highlight 
      ? 'bg-yellow-50/60 border-yellow-200/60 shadow-xl shadow-yellow-100/50' 
      : ''
    }
    /* Liquid Shimmer - Continuous Flow */
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/70 before:via-yellow-100/30 before:to-transparent 
    before:-translate-x-full before:skew-x-12 before:animate-shimmer-light
    /* Glass Reflection Layer */
    after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br 
    after:from-white/30 after:via-transparent after:to-transparent
    after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700
    /* Inner Glow */
    group-hover:shadow-inner group-hover:shadow-white/50
  `,
  
  highlightBadge: "absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg shadow-yellow-200/50",
  
  iconWrapper: (highlight) => `
    bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 
    /* Premium Glass Icon */
    ${highlight 
      ? "bg-yellow-100 text-yellow-600 shadow-md shadow-yellow-200/50" 
      : "bg-white/80 text-yellow-500 shadow-sm shadow-gray-200/50 group-hover:bg-white group-hover:text-black group-hover:shadow-yellow-200/50"
    }
    
    backdrop-blur-sm
    border border-white/60
    group-hover:scale-110 group-hover:rotate-12
    transition-all duration-500
  `,
  
  cardTitle: (highlight) => `
    text-base font-semibold mb-1.5 transition-all duration-300
    ${highlight 
      ? "text-gray-900" 
      : "text-gray-800 group-hover:text-gray-800 group-hover:translate-x-1.5 group-hover:scale-[1.02]"
    }
  `,
  
  cardDescription: (highlight) => `
    text-sm leading-relaxed transition-all duration-300
    ${highlight 
      ? "text-gray-600" 
      : "text-gray-500 group-hover:text-gray-700 group-hover:translate-x-0.5"
    }
  `
};

// budget calculator section styles
export const budgetCalculatorStyles = {
  // ─── Layout ──────────────────────────────────────────────────────────────
  section:   "py-10 px-4 bg-gray-50",
  container: "max-w-5xl mx-auto",

  // ─── Header ───────────────────────────────────────────────────────────────
  header:             "mb-8 text-center",
  badge:              "inline-flex items-center gap-2 bg-yellow-400 text-black text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest",
  title:              "text-3xl sm:text-4xl font-black text-gray-900 mb-2 leading-tight",
  highlightWrapper:   "relative inline-block",
  highlightUnderline: "absolute bottom-0 left-0 w-full h-3 bg-yellow-300 -z-10 opacity-60",
  description:        "text-gray-500 text-base mt-2 max-w-lg mx-auto",

  // ─── Step progress strip ──────────────────────────────────────────────────
  stepProgress:    "flex items-center mb-8 max-w-4xl mx-auto",
  stepWrapper:     (active, done) =>
    `flex flex-col items-center gap-1 transition-opacity duration-300 ${
      active ? "opacity-100" : done ? "opacity-90" : "opacity-30"
    }`,
  stepDot: (active, done) =>
    `w-8 h-8 rounded-full text-xs font-black flex items-center justify-center shrink-0 transition-all duration-300 ${
      active ? "bg-yellow-400 text-black ring-4 ring-yellow-100 scale-110" :
      done   ? "bg-gray-900 text-white" :
               "bg-gray-200 text-gray-500"
    }`,
  stepLabel:     (active) =>
    `text-[10px] font-bold hidden sm:block whitespace-nowrap ${active ? "text-gray-900" : "text-gray-400"}`,
  stepConnector: (done) =>
    `flex-1 h-0.5 mx-2 rounded-full transition-all duration-500 ${done ? "bg-gray-900" : "bg-gray-200"}`,

  // ─── Cards ────────────────────────────────────────────────────────────────
  card:        "bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 mb-5",
  cardLabel:   "text-xs font-black text-gray-400 uppercase tracking-widest mb-4",
  // Greyed-out card used when a step is locked (previous step not complete)
  cardDisabled:"bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-5 opacity-40 pointer-events-none select-none",

  // ─── Budget input ─────────────────────────────────────────────────────────
  budgetCard:      "bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 mb-5",
  budgetAmount:    "text-5xl font-black text-gray-900 mb-1",
  currency:        "text-3xl font-bold text-gray-500",
  budgetStatus: (valid) =>
    `text-xs font-semibold flex items-center gap-1 mb-4 ${valid ? "text-green-600" : "text-amber-600"}`,
  sliderContainer: "relative mb-2",
  slider:          "w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-yellow-400",
  sliderLabels:    "flex justify-between text-xs text-gray-400 font-semibold mt-1",

  // ─── Business type ────────────────────────────────────────────────────────
  businessTypeContainer: "flex flex-wrap gap-2",
  businessButton: (isActive) =>
    `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 cursor-pointer select-none ${
      isActive
        ? "bg-yellow-400 border-yellow-400 text-black shadow-md scale-105"
        : "bg-white border-gray-200 text-gray-600 hover:border-yellow-300 hover:shadow-sm"
    }`,
  businessHint: "text-xs text-blue-600 font-semibold mt-3 flex items-center gap-1",

  // ─── Service grid ─────────────────────────────────────────────────────────
  serviceSection:  "mt-6 border-t border-gray-100 pt-6",
  serviceGrid:     "grid grid-cols-2 gap-3 mt-3",
  serviceCard: (isActive, isDisabled) => {
    const base = "relative flex flex-col items-start gap-1 p-4 rounded-2xl border-2 text-left transition-all duration-200 w-full";
    if (isActive)   return `${base} bg-gray-900 border-gray-900 text-white shadow-md`;
    if (isDisabled) return `${base} bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed`;
    return            `${base} bg-white border-gray-200 text-gray-800 hover:border-yellow-400 hover:shadow-sm cursor-pointer`;
  },
  serviceIconWrap:  (isActive) => `p-1.5 rounded-lg mb-1 ${isActive ? "bg-yellow-400" : "bg-yellow-100"}`,
  serviceIconColor: (isActive) => isActive ? "text-gray-900" : "text-yellow-600",
  serviceName:      "text-sm font-black leading-tight",
  serviceDesc:      "text-xs font-medium opacity-60 leading-snug",
  serviceMinCost:   (isActive) => `text-xs font-bold mt-1 ${isActive ? "text-yellow-300" : "text-gray-400"}`,
  serviceCheck:     "absolute top-3 right-3 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 text-xs font-black",
  // Overlay shown on entire service grid when no business type is selected
  serviceGridWrap:  "relative",
  serviceOverlay:   "absolute inset-0 bg-white/80 backdrop-blur-[2px] rounded-2xl flex items-center justify-center z-10",
  serviceOverlayMsg:"text-sm font-black text-gray-600 text-center px-4",

  // ─── Budget warning banner ─────────────────────────────────────────────────
  budgetWarningBanner: "mt-4 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4",
  budgetWarningText:   "text-sm font-semibold text-amber-800 leading-snug",
  budgetWarningSub:    "text-xs text-amber-600 mt-0.5",

  // ─── Allocation section ───────────────────────────────────────────────────
  stackedBar:        "flex h-4 rounded-xl overflow-hidden gap-0.5 mb-4",
  stackedBarSegment: "transition-all duration-500 ease-out",

  budgetSummaryRow:  "grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-5",
  budgetSummaryItem: "text-center",
  budgetSummaryVal:  (warn) => `text-base font-black ${warn ? "text-red-600" : "text-gray-900"}`,
  budgetSummaryLbl:  "text-xs text-gray-400 mt-0.5",

  overBudgetAlert: "flex items-start gap-3 bg-red-50 border-2 border-red-200 rounded-2xl p-4 mb-4",
  overBudgetMsg:   "text-sm font-black text-red-700",
  overBudgetSub:   "text-xs text-red-500 mt-0.5",

  manualBadge: "inline-flex items-center gap-1.5 text-xs font-bold bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full mb-4",

  spendCard:        "bg-gray-50 rounded-2xl p-4 mb-3 border border-gray-100",
  spendHeader:      "flex items-center justify-between mb-3",
  spendNameRow:     "flex items-center gap-2",
  spendDot:         (color) => `w-3 h-3 rounded-full shrink-0 ${color}`,
  spendName:        "text-sm font-black text-gray-800",
  spendMinBadge:    "text-xs font-semibold text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full",
  spendControls:    "flex items-center justify-between mb-3",
  spendBtn: (disabled) =>
    `w-11 h-11 rounded-full border-2 flex items-center justify-center text-xl font-bold transition-all duration-150 select-none ${
      disabled
        ? "border-gray-100 text-gray-300 cursor-not-allowed bg-white"
        : "border-gray-300 text-gray-700 bg-white hover:border-yellow-400 hover:bg-yellow-50 hover:scale-110 active:scale-95"
    }`,
  spendAmountBlock: "text-center flex-1 px-2",
  spendAmount:      "text-2xl font-black text-gray-900 leading-none",
  spendPercent:     "text-xs text-gray-400 mt-1",
  spendBarTrack:    "h-2.5 bg-gray-200 rounded-full overflow-hidden",
  spendBarFill:     (color) => `h-full rounded-full transition-all duration-500 ease-out ${color}`,
  spendAtMin:       "text-xs text-amber-600 font-semibold text-center mt-2",
  resetLink:        "w-full text-center text-sm font-semibold text-gray-400 hover:text-yellow-600 mt-4 pt-4 border-t border-gray-100 transition-colors cursor-pointer flex items-center justify-center gap-2",

  // ─── Result cards ──────────────────────────────────────────────────────────
  resultGrid:  "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5",
  resultCard:  "bg-white rounded-2xl border-t-4 border-yellow-400 shadow-md p-5 text-center",
  resultIcon:  "w-10 h-10 mx-auto flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 mb-3",
  resultLabel: "text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1",
  resultValue: "text-xl font-black text-gray-900",
  resultUnit:  "text-xs text-gray-400 font-medium",

  // ─── Empty state ───────────────────────────────────────────────────────────
  emptyState:      "bg-white rounded-3xl border-2 border-dashed border-gray-200 mb-5",
  emptyStateInner: "p-10 text-center",
  emptyStateIcon:  "text-5xl mb-3",
  emptyStateTitle: "text-base font-black text-gray-700 mb-2",
  emptyStateDesc:  "text-sm text-gray-400 max-w-xs mx-auto leading-relaxed",
  emptyStepList:   "mt-6 space-y-2 text-left max-w-xs mx-auto",
  emptyStep:       (done) => `flex items-center gap-3 text-sm font-medium ${done ? "text-gray-700" : "text-gray-300"}`,
  emptyStepNum:    (done) => `w-6 h-6 rounded-full text-xs font-black flex items-center justify-center shrink-0 ${done ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-400"}`,
  emptyNextArrow:  "mt-5 text-xs font-bold text-yellow-600 flex items-center justify-center gap-1 animate-bounce",
}; 

// testimonial section styles
export const testimonialStyles = {
  section: "py-8 px-4 bg-black overflow-hidden relative",
  container: "max-w-6xl mx-auto relative z-10",
  
  // Header styles
  header: "text-center mb-12",
  badge: "inline-block bg-white/5 text-yellow-400 text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-white/10 backdrop-blur-sm",
  title: "text-3xl sm:text-4xl font-black mb-3 font-display text-white",
  highlight: "text-yellow-400",
  description: "text-gray-500 text-base",
  
  // Marquee container
  marqueeContainer: "space-y-6",
  marqueeWrapper: "relative w-full overflow-hidden",
  marquee: "flex gap-5 marquee",
  marqueeReverse: "flex gap-5 marquee-reverse",
  
  // Premium Liquid Glass Card with Distinct Separation
  card: (featured) => `
    w-[340px] flex flex-col gap-4 rounded-2xl p-6 
    relative overflow-hidden
    /* Premium Glass Effect - High Transparency */
    bg-gradient-to-br from-white/10 via-white/5 to-white/5
    backdrop-blur-xl backdrop-saturate-150
    /* Frosted Border */
    border border-white/20
    /* Deep Shadow for Separation */
    shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8)]
    /* Smooth Transitions */
    transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
    /* Hover Lift */
    /* Featured Card - More Prominent Glass */
    ${featured 
      ? 'bg-gradient-to-br from-yellow-500/15 via-white/10 to-white/5 border-yellow-500/40 shadow-[0_8px_32px_-8px_rgba(234,179,8,0.2)]' 
      : ''
    }
  `,
  
  // Liquid Shimmer Effect
  cardShimmer: `
    absolute inset-0 pointer-events-none
    bg-gradient-to-r from-transparent via-white/30 to-transparent
    -translate-x-full group-hover:translate-x-full
    transition-transform duration-1000 ease-out
    skew-x-12
    group-hover:via-yellow-400/30
  `,
  
  // Glass Reflection Effect
  cardReflection: `
    absolute top-0 left-0 right-0 h-20 pointer-events-none
    bg-gradient-to-b from-white/20 to-transparent
    rounded-t-2xl
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
  `,
  
  quoteIcon: "text-yellow-500/50 font-black text-4xl leading-none select-none transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-110",
  quoteText: "text-gray-200 text-sm sm:text-base leading-relaxed flex-1 relative z-10 group-hover:text-white transition-colors duration-300",
  authorContainer: "flex items-center justify-between pt-2 border-t border-white/10 relative z-10 group-hover:border-white/20 transition-colors duration-300",
  authorInfo: "flex items-center gap-3",
  avatar: (featured) => `
    w-9 h-9 rounded-full flex items-center justify-center font-black text-sm 
    transition-all duration-300
    /* Premium Glass Avatar */
    bg-white/10 backdrop-blur-sm
    border border-white/20
    ${featured 
      ? 'text-yellow-400 bg-yellow-500/15 border-yellow-500/40' 
      : 'text-gray-300'
    }
    hover:scale-110 hover:bg-white/20 hover:border-white/40
    hover:shadow-lg hover:shadow-black/50
  `,
  authorName: "text-sm font-bold text-gray-200 transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-x-0.5",
  authorRole: "text-xs text-gray-500 font-medium transition-colors duration-300 group-hover:text-gray-400",
  tamilBadge: "text-xs font-medium text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded-md border border-yellow-500/20 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-500/20 hover:border-yellow-500/40"
};

// Faq section styles
export const faqStyles = {
  section: "py-8 px-4 bg-white",
  container: "max-w-5xl mx-auto",
  
  // Header styles
  header: "text-center mb-12",
  badge: "inline-block bg-yellow-100 text-yellow-700 text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest",
  title: "text-3xl sm:text-4xl font-black text-gray-900 mb-3 font-display",
  description: "text-gray-500 text-base",
  
  // Accordion container
  accordionContainer: "space-y-3",
  
  // Accordion item styles
  accordionItem: (isOpen) => `
    border rounded-2xl overflow-hidden transition-all duration-300
    ${isOpen ? "border-yellow-300 shadow-md shadow-yellow-50" : "border-gray-100 hover:border-gray-200"}
  `,
  accordionButton: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50/50 transition-colors duration-200 outline-none",
  questionText: "text-sm sm:text-base font-bold text-gray-800",
  chevronIcon: (isOpen) => `
    flex-shrink-0 text-gray-400 transition-transform duration-300
    ${isOpen ? "rotate-180 text-yellow-500" : ""}
  `,
  answerContainer: (isOpen) => `
    overflow-hidden transition-all duration-300 ease-in-out
    ${isOpen ? "max-h-64" : "max-h-0"}
  `,
  answerText: "px-6 pb-5 text-sm sm:text-base text-gray-500 leading-relaxed border-t border-gray-100 pt-4"
};

// Lead form section styles
export const leadformStyles = {
  section: "py-8 px-4 bg-gray-50",
  container: "max-w-2xl mx-auto",
  
  // Header styles
  header: "text-center mb-10",
  badge: "inline-block bg-yellow-100 text-yellow-700 text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest",
  title: "text-3xl sm:text-4xl font-black text-gray-900 mb-3 font-display",
  description: "text-gray-500 text-base",
  
  // Form container
  formContainer: "bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10",
  form: "space-y-5",
  
  // Input base styles
  inputBase: "w-full px-4 py-3 rounded-xl border text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 bg-gray-50 focus:bg-white",
  inputError: "border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100",
  
  // Label styles
  label: "block text-xs font-black text-gray-600 uppercase tracking-wider mb-1.5",
  required: "text-red-400",
  
  // Grid layout
  grid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  
  // Error message
  errorMessage: "text-xs text-red-500 mt-1 font-medium",
  
  // Submit button
  submitButton: `
    w-full flex items-center justify-center gap-2 
    bg-yellow-400 hover:bg-yellow-500 
    active:scale-[0.98] 
    text-black font-black text-base py-4 rounded-2xl 
    shadow-lg hover:shadow-xl hover:-translate-y-0.5 
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `,
  
  // Privacy text
  privacyText: "text-center text-xs text-gray-400 font-medium",
  
  // Success styles
  successCard: "bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center",
  successIcon: "mx-auto mb-4",
  successTitle: "text-2xl font-black text-gray-900 mb-2 font-display",
  successMessage: "text-gray-500",
  successEndMessage: "mt-5 text-gray-500 animate-bounce",
  successButton: "inline-flex items-center gap-2 px-6 py-3 text-sm font-bold bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.97]",
};

// Cta section styles
export const ctaStyles = {
  section: "py-8 px-4 bg-[#FDFBF4]",
  container: "max-w-4xl mx-auto",
  
  // Card styles
  card: "p-8 sm:p-12 text-center",
  
  // Badge styles
  badge: "inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wide uppercase",
  
  // Headline styles
  headline: "text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight",
  highlight: "text-yellow-600",
  
  // Description styles
  description: "text-gray-600 text-base max-w-md mx-auto mb-8",
  
  // Button container
  buttonContainer: "flex flex-col sm:flex-row gap-3 justify-center",
  
  // Button styles
  button: (color) => `
    flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-2xl text-base 
    transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5
    ${color}
  `,
  
  // Footer styles
  footerText: "mt-6 text-sm text-gray-600 font-medium"
};