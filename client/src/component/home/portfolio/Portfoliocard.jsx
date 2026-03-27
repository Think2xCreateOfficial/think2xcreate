export default function PortfolioCard({ study }) {
  const {
    business, city, tagline, platforms,
    highlight, problem, solution, result,
    metrics, gradient, icon, timeline,
  } = study;

  return (
    <article className="group bg-white rounded-2xl border border-[#EAEAEA] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">

      {/* ── Visual banner ── */}
      <div
        className="relative h-28 flex items-center justify-center flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${gradient[0]}22, ${gradient[1]}44)` }}
      >
        {/* Platform tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {platforms.map((p) => (
            <span
              key={p}
              className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-gray-700 border border-gray-100"
            >
              {p}
            </span>
          ))}
        </div>
        {/* Timeline badge */}
        <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-gray-600">
          ⏱ {timeline}
        </span>
        {/* Icon */}
        <span className="text-4xl select-none">{icon}</span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5 gap-4">

        {/* Business info */}
        <div>
          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-0.5">
            {business} · {city}
          </p>
          <p className="text-sm text-[#6B7280]">{tagline}</p>
        </div>

        {/* Result highlight */}
        <div
          className="inline-block self-start px-3 py-1.5 rounded-xl font-black text-sm text-gray-900"
          style={{ background: "#FFD60033", border: "1.5px solid #FFD600" }}
        >
          {highlight}
        </div>

        {/* Story — problem / solution / result */}
        <ul className="space-y-1.5 text-sm">
          {[
            { label: "Problem", text: problem, color: "text-red-500" },
            { label: "Solution", text: solution, color: "text-blue-500" },
            { label: "Result", text: result, color: "text-green-600" },
          ].map(({ label, text, color }) => (
            <li key={label} className="flex gap-2 leading-snug">
              <span className={`font-black text-xs mt-0.5 flex-shrink-0 ${color}`}>{label}:</span>
              <span className="text-[#6B7280]">{text}</span>
            </li>
          ))}
        </ul>

        {/* Mini metrics */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[
            { label: "Leads",  value: metrics.leads },
            { label: "ROI",    value: metrics.roi },
            { label: "Reach",  value: metrics.reach },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="text-center bg-[#F5F5F5] rounded-xl py-2"
            >
              <p className="text-sm font-black text-[#121212]">{value}</p>
              <p className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto pt-1">
          <button className="flex-1 text-sm font-semibold py-2.5 px-4 rounded-xl border border-[#EAEAEA] text-[#6B7280] hover:border-[#FFD600] hover:text-gray-900 transition-all duration-200">
            View Details
          </button>
          <button
            className="flex-1 text-sm font-black py-2.5 px-4 rounded-xl text-gray-900 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            style={{ background: "#FFD600" }}
          >
            Get Similar Results
          </button>
        </div>
      </div>
    </article>
  );
}