import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* ─── PROJECT DATA ───────────────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "Local Interior Design Meta Ads Campaign",
    category: "Meta Ads",
    categoryColor: "#e85d04",
    description: "Generated consistent leads for a Tirunelveli Interior Design using Meta Ads.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    results: "120+ leads generated",
    timeline: "30 Days",
    industry: "Fashion / Interior Design",
    details:
      "We worked with a local Interior Design in Tirunelveli to improve their customer reach through Facebook and Instagram ads. By targeting nearby audiences and testing simple creatives, we generated consistent daily inquiries and increased store visits.",
    services: [
      "Meta Ads Setup (Facebook & Instagram)",
      "Audience Targeting (Local)",
      "Basic Creative Design",
      "Lead Campaign Optimization",
    ],
    highlights: [
      { label: "Leads Generated", value: "120+" },
      { label: "Cost per Lead", value: "₹35–₹50" },
      { label: "Reach", value: "25,000+" },
      { label: "Store Visits", value: "+40%" },
    ],
  },

  {
    id: 2,
    title: "Small Business Website Development",
    category: "Web Development",
    categoryColor: "#1a56db",
    description: "Designed and developed a responsive website for a local business.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    results: "2x more inquiries",
    timeline: "20 Days",
    industry: "Local Business",
    details:
      "We built a clean and modern website for a Tirunelveli-based service business. The goal was to establish an online presence and generate inquiries. The website is mobile-friendly, fast, and optimized for basic SEO.",
    services: [
      "Website UI Design",
      "Frontend Development",
      "Mobile Optimization",
      "Basic SEO Setup",
    ],
    highlights: [
      { label: "Load Speed", value: "Fast (under 2s)" },
      { label: "Inquiries", value: "2x increase" },
      { label: "Mobile Friendly", value: "100%" },
      { label: "Pages Built", value: "5+" },
    ],
  },

  {
    id: 3,
    title: "Instagram Growth for Local Brand",
    category: "Social Media",
    categoryColor: "#7b2d8b",
    description: "Improved engagement and reach for a small business Instagram page.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    results: "5x engagement growth",
    timeline: "45 Days",
    industry: "Local Brand",
    details:
      "We helped a small local brand grow their Instagram presence by creating consistent content and improving post strategy. By focusing on reels and trending formats, engagement increased significantly.",
    services: [
      "Content Planning",
      "Instagram Reels Strategy",
      "Post Design",
      "Hashtag Optimization",
    ],
    highlights: [
      { label: "Followers Growth", value: "+1,200" },
      { label: "Engagement", value: "5x increase" },
      { label: "Reel Views", value: "50K+" },
      { label: "Profile Reach", value: "+300%" },
    ],
  },

  {
    id: 4,
    title: "Product Photo & Video Shoot",
    category: "Photo & Video",
    categoryColor: "#c1440e",
    description: "Created product visuals for social media and ads.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop",
    results: "Better ad performance",
    timeline: "7 Days",
    industry: "Food / Product",
    details:
      "We provided a simple product photography and short video shoot for a local food business. The visuals were used in social media and ads, helping improve engagement and click-through rates.",
    services: [
      "Product Photography",
      "Short Video Creation",
      "Basic Editing",
      "Social Media Content",
    ],
    highlights: [
      { label: "Photos Delivered", value: "30+" },
      { label: "Videos Created", value: "10+" },
      { label: "Engagement", value: "+60%" },
      { label: "Ad CTR", value: "+25%" },
    ],
  },
];

// Helper component for MapPin (since it wasn't imported)
const MapPin = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ─── ARROW BUTTON ───────────────────────────────────────────────────────── */
function ArrowBtn({ direction, onClick, disabled }) {
  const [hov, setHov] = useState(false);
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className={`
        w-10 h-10 rounded-full border transition-all duration-200 
        flex items-center justify-center flex-shrink-0
        ${disabled 
          ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed" 
          : hov 
            ? "border-black bg-black text-white shadow-lg cursor-pointer" 
            : "border-yellow-500 bg-yellow-500 text-gray-600 cursor-pointer"
        }
      `}
    >
      <Icon size={18} />
    </button>
  );
}

/* ─── ARROW GROUP ────────────────────────────────────────────────────────── */
const ArrowGroup = ({ scroll, canLeft, canRight }) => (
  <div className="flex gap-2">
    <ArrowBtn direction="left" onClick={() => scroll("l")} disabled={!canLeft} />
    <ArrowBtn direction="right" onClick={() => scroll("r")} disabled={!canRight} />
  </div>
);

/* ─── PROJECT MODAL ──────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/20 backdrop-blur-md"
    >
      <div
        className="relative w-full max-w-[660px] max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-modal-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative h-[230px] overflow-hidden rounded-t-2xl flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/55" />

          {/* Category */}
          <span
            className="absolute top-3 left-3 text-[0.62rem] font-bold tracking-wider uppercase text-white px-2 py-1 rounded-full"
            style={{ backgroundColor: project.categoryColor }}
          >
            {project.category}
          </span>

          {/* Timeline */}
          <span className="absolute top-3 right-9 text-[0.62rem] font-semibold text-white px-2 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25">
            {project.timeline}
          </span>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/45 text-white flex items-center justify-center transition-colors hover:bg-black/75"
          >
            <X size={16} />
          </button>

          {/* Title Block */}
          <div className="absolute bottom-3 left-3 right-3">
            <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-white/65 text-[0.78rem] mt-1">
              {project.industry}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 md:p-6">
          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm mb-5">
            {project.details}
          </p>

          {/* Key Results Grid */}
          <p className="text-[0.62rem] font-bold tracking-wider uppercase text-gray-400 mb-2">
            Key Results
          </p>
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {project.highlights.map(h => {
              const HighlightIcon = h.icon;
              return (
                <div
                  key={h.label}
                  className="bg-gray-50 rounded-xl p-3 border-l-4"
                  style={{ borderLeftColor: project.categoryColor }}
                >
                  <p className="text-[0.6rem] uppercase tracking-wider text-gray-600 mb-1 flex items-center gap-1">
                    {h.label}
                  </p>
                  <p className="text-sm font-extrabold text-gray-900 m-0">
                    {h.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Services */}
          <div className="bg-gray-50 rounded-xl p-3.5 mb-5">
            <p className="text-[0.62rem] font-bold tracking-wider uppercase text-gray-400 mb-2">
              Services Delivered
            </p>
            <div className="flex flex-wrap gap-2">
              {project.services.map(s => (
                <span
                  key={s}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border shadow-sm"
                  style={{ borderColor: `${project.categoryColor}30` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={onClose}
              className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-yellow-500 font-bold text-sm text-black transition-all hover:brightness-110"
            >
              Start a Similar Project →
            </button>
            <button
              onClick={onClose}
              className="flex-1 min-w-[100px] py-3 px-4 rounded-xl bg-transparent border-2 border-gray-200 font-semibold text-sm text-gray-600 transition-all hover:border-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PROJECT CARD ───────────────────────────────────────────────────────── */
function ProjectCard({ project, onClick }) {
  const [hov, setHov] = useState(false);
  const IconComponent = project.icon;

  return (
    <div
      // onClick={() => onClick(project)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative w-full h-full min-h-[380px] rounded-xl overflow-hidden cursor-pointer select-none transition-all duration-300"
      style={{
        transform: hov ? "scale(1.028)" : "scale(1)",
        boxShadow: hov ? "0 28px 56px rgba(0,0,0,0.2)" : "0 4px 18px rgba(0,0,0,0.09)",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hov ? "scale(1.07)" : "scale(1)" }}
      />
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: hov
            ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.05) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Top Badge */}
      <div className="absolute top-3 left-3">
        <span
          className="text-[0.6rem] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full"
          style={{ backgroundColor: project.categoryColor }}
        >
          {project.category}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-sm mb-1">
          {project.title}
        </h3>
        <p className="text-gray-200 text-xs leading-relaxed mb-2 opacity-90">
          {project.description}
        </p>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
          <span className="text-yellow-500 text-[0.7rem] font-bold">
            {project.results}
          </span>
        </div>
        <div
          className="transition-all duration-300 overflow-hidden"
          style={{
            maxHeight: hov ? "28px" : "0",
            opacity: hov ? 1 : 0,
          }}
        >
          <p className="text-white/45 text-[0.65rem] mt-2">
            Tap to view full case study →
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN SECTION ───────────────────────────────────────────────────────── */
export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const scrollRef = useRef(null);
  const STEP = 316;

  const syncArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncArrows, { passive: true });
    syncArrows();
    return () => el.removeEventListener("scroll", syncArrows);
  }, [syncArrows]);

  const scroll = dir =>
    scrollRef.current?.scrollBy({ left: dir === "l" ? -STEP : STEP, behavior: "smooth" });

  return (
    <>
      <section id="projects" className="bg-gray-50 py-16 md:py-20 px-4 md:px-6 w-full">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
            {/* Left Column */}
            <div className="lg:w-[360px] lg:flex-shrink-0 flex flex-col justify-between">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-0.5 bg-yellow-500 rounded-full" />
                  <p className="text-[0.65rem] font-bold tracking-wider uppercase text-yellow-700 m-0">
                    Our Work
                  </p>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight ">
                  Projects That Drive&nbsp;
                  <span className="text-yellow-700">
                    Real Business
                  </span>
                  &nbsp; Growth
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  We don't just run campaigns — we build growth systems. Every
                  project here is a story of strategy, execution, and measurable
                  impact across SEO, paid media, social, content, and web.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:flex-1 min-w-0 flex flex-col">
              {/* Desktop Arrows */}
              <div className="hidden lg:flex justify-end mb-4">
                <ArrowGroup scroll={scroll} canLeft={canLeft} canRight={canRight} />
              </div>

              {/* Scroll Track */}
              <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto overflow-y-visible scroll-snap-x-mandatory pb-3 ps-scroll"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollSnapType: "x mandatory",
                }}
              >
                {projects.map((p, i) => (
                  <div
                    key={p.id}
                    className="scroll-snap-align-start flex-shrink-0 w-[clamp(230px,70vw,290px)] flex animate-fade-up"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <ProjectCard project={p} onClick={setActiveProject} />
                  </div>
                ))}
                {/* Trailing Peek Spacer */}
                <div className="flex-shrink-0 w-1" />
              </div>

              {/* Mobile Arrows */}
              <div className="flex lg:hidden justify-center gap-2 mt-4">
                <ArrowGroup scroll={scroll} canLeft={canLeft} canRight={canRight} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}