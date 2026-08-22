import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronRight, Check } from 'lucide-react';

/**
 * Service Page Hero Component (Reference C)
 * Renders breadcrumbs, badge, title with highlighted word, positioning paragraph,
 * feature highlight pills, CTAs, and floating device/analytics visuals.
 */
export const ServiceHero = ({ data }) => {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  if (!data) return null;

  const {
    title = 'Website Development',
    highlightedTitle = 'Website Development',
    subtitle = 'High-Performance Websites That Double Conversions.',
    description = 'High-performance websites that not only look stunning but also convert visitors into loyal customers.',
    features = ['SEO-Optimized', 'Lightning Fast', 'Mobile Responsive', 'Conversion Focused'],
    heroImages = {},
  } = data;

  const floatMotion = prefersReduced
    ? {}
    : {
      animate: { y: [0, -8, 0] },
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    };

  return (
    <section className="relative overflow-hidden pt-24 pb-4 bg-[#FAFAFA] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/our-work" className="hover:text-gray-900 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-bold">{title}</span>
        </nav>

        {/* ── Center Content Header ────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest border border-yellow-300 mb-4">
            OUR SERVICE
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            {title}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed mb-6 max-w-2xl mx-auto">
            {description || subtitle}
          </p>

          {/* ── Feature Highlight Pills Row ───────────────────────────── */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
            {features.map((feature, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-yellow-400 font-bold hidden sm:inline">+</span>}
                <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200/80 rounded-full px-3.5 py-1.5 shadow-2xs">
                  <div className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-extrabold text-gray-800">{feature}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* ── CTA Buttons ───────────────────────────────────────────── */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-yellow-400 hover:bg-bg-yellow-500 text-black px-7 py-3.5 rounded-xl font-extrabold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/our-work')}
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <span>View Our Works</span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
