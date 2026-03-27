/**
 * FeaturedCase
 * Full-width highlighted case study with before/after comparison,
 * growth timeline, and story breakdown. Data-driven via props.
 */
export default function FeaturedCase({ data }) {
  const {
    business, city, industry, tagline, platforms,
    timeline, before, after, growth, story, steps,
  } = data;

  const comparisons = [
    { label: "Monthly Leads",   before: before.leads,   after: after.leads   },
    { label: "Monthly Revenue", before: before.revenue, after: after.revenue },
    { label: "ROAS",            before: before.roas,    after: after.roas    },
    { label: "Site Traffic",    before: before.traffic, after: after.traffic },
    { label: "Cost per Lead",   before: before.cpl,     after: after.cpl     },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#EAEAEA] shadow-sm overflow-hidden">

      {/* Header band */}
      <div
        className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        style={{ background: "linear-gradient(135deg, #FFD60022, #FFD60008)" }}
      >
        <div>
          <span
            className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2"
            style={{ background: "#FFD600", color: "#121212" }}
          >
            ⭐ Featured Case Study
          </span>
          <h3 className="text-xl font-black text-[#121212]">{business}</h3>
          <p className="text-sm text-[#6B7280]">{industry} · {city}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {platforms.map((p) => (
            <span key={p} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] text-[#6B7280]">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Tagline + growth badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-[#6B7280] text-base max-w-lg">{tagline}</p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-center px-5 py-3 rounded-2xl" style={{ background: "#FFD60022", border: "1.5px solid #FFD600" }}>
              <p className="text-2xl font-black text-[#121212]">{growth}</p>
              <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wide">Revenue Growth</p>
            </div>
            <div className="text-center px-5 py-3 rounded-2xl bg-[#F5F5F5]">
              <p className="text-2xl font-black text-[#121212]">{timeline}</p>
              <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wide">Timeline</p>
            </div>
          </div>
        </div>

        {/* Before vs After table */}
        <div className="mb-8">
          <p className="text-xs font-black text-[#6B7280] uppercase tracking-widest mb-4">Before vs After</p>
          <div className="rounded-2xl border border-[#EAEAEA] overflow-hidden">
            {/* Column headers */}
            <div className="grid grid-cols-3 bg-[#F5F5F5] px-4 py-3">
              <span className="text-xs font-black text-[#6B7280] uppercase tracking-wide">Metric</span>
              <span className="text-xs font-black text-[#6B7280] uppercase tracking-wide text-center">Before</span>
              <span className="text-xs font-black text-[#121212] uppercase tracking-wide text-center">After</span>
            </div>
            {comparisons.map(({ label, before: bVal, after: aVal }, i) => (
              <div
                key={label}
                className={`grid grid-cols-3 px-4 py-3.5 items-center ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}
              >
                <span className="text-sm font-semibold text-[#121212]">{label}</span>
                <span className="text-sm text-[#6B7280] text-center line-through decoration-red-300">{bVal}</span>
                <span className="text-sm font-black text-green-600 text-center">{aVal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <p className="text-sm text-[#6B7280] leading-relaxed mb-8 max-w-2xl">{story}</p>

        {/* Phase timeline */}
        <div className="mb-6">
          <p className="text-xs font-black text-[#6B7280] uppercase tracking-widest mb-4">How We Did It</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {steps.map(({ phase, action, result }, idx) => (
              <div key={phase} className="relative flex flex-col gap-2 bg-[#F5F5F5] rounded-xl p-4">
                <span
                  className="inline-block text-[10px] font-black px-2.5 py-1 rounded-full w-fit"
                  style={{ background: "#FFD600", color: "#121212" }}
                >
                  {phase}
                </span>
                <p className="text-sm font-semibold text-[#121212]">{action}</p>
                <p className="text-xs text-green-600 font-bold">→ {result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA row */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 text-sm font-black py-3 px-6 rounded-xl text-[#121212] hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            style={{ background: "#FFD600" }}
          >
            Get Similar Results for My Business
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-semibold py-3 px-6 rounded-xl border border-[#EAEAEA] text-[#6B7280] hover:border-green-400 hover:text-green-600 transition-all duration-200"
          >
            💬 Talk on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}