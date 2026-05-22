import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* ─── PROJECT DATA ───────────────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "Aksha Interior Meta Ads Campaign",
    category: "Meta Ads",
    categoryColor: "#e85d04",
    description: "Generated highly qualified leads for Tirunelveli's premium interior design firm using Meta Ads.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop", // placeholder for interior design ad
    results: "180+ leads generated",
    timeline: "45 Days",
    industry: "Interior Design",
    details:
      "We partnered with Aksha Interior in Tirunelveli to completely overhaul their Facebook and Instagram lead generation funnel. By designing premium ad creatives and targeting high-intent homeowners, we secured consistent daily inquiries and high-ticket project consultations.",
    services: [
      "Meta Ads Setup (Facebook & Instagram)",
      "High-Intent Audience Targeting",
      "Premium Creative Design",
      "Lead Campaign Optimization",
    ],
    highlights: [
      { label: "Leads Generated", value: "180+" },
      { label: "Cost per Lead", value: "₹85–₹110" },
      { label: "Reach", value: "45,000+" },
      { label: "Consultations", value: "+30%" },
    ],
  },

  {
    id: 2,
    title: "Aksha Interior Website Redesign",
    category: "Web Development",
    categoryColor: "#1a56db",
    description: "Designed and developed a premium, responsive showcase website for Aksha Interior.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop", // placeholder for interior website
    results: "3x more online inquiries",
    timeline: "25 Days",
    industry: "Interior Design",
    details:
      "We built a stunning, high-performance website for Aksha Interior. The goal was to showcase their portfolio with a premium aesthetic that builds instant trust. The new site is lightning fast, mobile-optimized, and integrates seamlessly with their lead generation campaigns.",
    services: [
      "Premium UI/UX Design",
      "Next-Gen Frontend Development",
      "Mobile Optimization",
      "Technical SEO Setup",
    ],
    highlights: [
      { label: "Load Speed", value: "Fast (under 1.2s)" },
      { label: "Inquiries", value: "3x increase" },
      { label: "Mobile Friendly", value: "100%" },
      { label: "Live Project", value: "Available" },
    ],
  },

  {
    id: 3,
    title: "Gifty Passion Instagram Growth",
    category: "Social Media",
    categoryColor: "#7b2d8b",
    description: "Scaled organic reach and engagement for a fast-growing gifting brand.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop", // placeholder for gifts/social media
    results: "10x engagement growth",
    timeline: "60 Days",
    industry: "E-Commerce / Gifting",
    details:
      "We helped Gifty Passion scale their Instagram presence by scripting and editing highly engaging reels. By focusing on trending audio, high-quality product showcases, and a consistent content calendar, we dramatically increased their organic reach and follower base.",
    services: [
      "Content Pillar Strategy",
      "Instagram Reels Production",
      "Post & Carousel Design",
      "Hashtag & Audio Optimization",
    ],
    highlights: [
      { label: "Followers Growth", value: "+3,500" },
      { label: "Engagement", value: "10x increase" },
      { label: "Reel Views", value: "150K+" },
      { label: "Profile Reach", value: "+400%" },
    ],
  },

  {
    id: 4,
    title: "Gifty Passion POS Dashboard",
    category: "Web Development",
    categoryColor: "#c1440e",
    description: "Developed a custom Point of Sale (POS) dashboard for efficient billing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop", // placeholder for POS dashboard
    results: "Streamlined operations",
    timeline: "30 Days",
    industry: "Retail Operations",
    details:
      "We developed a robust, easy-to-use custom POS web application for Gifty Passion to streamline their daily billing, inventory management, and sales tracking. The dashboard provides real-time analytics and a smooth checkout flow for retail staff.",
    services: [
      "Custom Web Application",
      "Dashboard UI/UX Design",
      "Inventory Management Integration",
      "Real-time Sales Analytics",
    ],
    highlights: [
      { label: "Daily Transactions", value: "500+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Staff Onboarding", value: "< 1 Hour" },
      { label: "Efficiency", value: "+40%" },
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

/* ─── PROJECT CARD ───────────────────────────────────────────────────────── */
const serviceRouteMap = {
  "Meta Ads": "meta-ads",
  "Web Development": "website-development",
  "Social Media": "social-media",
  "Photo & Video Editing": "video-editing",
};

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  const serviceId = serviceRouteMap[project.category];
  const targetHref = serviceId ? `/services/${serviceId}` : "#";

  return (
    <Link
      to={targetHref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative w-full h-full min-h-[380px] rounded-xl overflow-hidden cursor-pointer select-none block transition-all duration-300"
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
            Explore {project.category} Service →
          </p>
        </div>
      </div>
    </Link>
  );
}

/* ─── MAIN SECTION ───────────────────────────────────────────────────────── */
export default function ProjectShowcase() {
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
    <section id="projects" className="bg-gray-50 py-16 md:py-20 px-4 md:px-6 w-full">
      <div className="max-w-[1340px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
          {/* Left Column */}
          <div className="lg:w-[360px] lg:flex-shrink-0 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-0.5 bg-yellow-400 rounded-full" />
                <p className="text-[1rem] font-bold tracking-wider uppercase text-yellow-400 m-0">
                  Our Work
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight ">
                Projects That Drive&nbsp;
                <span className="text-yellow-400">
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
                  <ProjectCard project={p} />
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
  );
}