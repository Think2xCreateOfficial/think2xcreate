import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';
import WorksMetricsGrid from './WorksMetricsGrid';

/**
 * Production-Grade Layout-Stable Showcase Card Component
 * Shared between Homepage "Our Recent Work" and "Our Works" Featured Showcase.
 * Guarantees zero layout shift (CLS) during project switching by establishing
 * fixed aspect ratios and min-height content regions.
 */
export const WorksShowcaseCard = ({ project, className = '' }) => {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  if (!project) return null;

  const contentMotion = prefersReduced
    ? {}
    : {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.28, ease: 'easeOut' },
    };

  return (
    <div
      className={`bg-white border border-gray-100 rounded shadow-xl overflow-hidden max-w-7xl mx-auto ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          {...contentMotion}
          className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[400px] lg:min-h-[440px]"
        >
          {/* ── LEFT: Dark Mockup Area (Reference 1 & 2) ─────────────────── */}
          <div className="hidden lg:block lg:col-span-6 bg-[#0D0E12] relative min-h-[320px] sm:min-h-[400px] flex items-center justify-center p-6 sm:p-10 overflow-hidden">
            {/* Laptop Container Stage */}
            <div className="relative w-full max-w-[460px] aspect-[16/7.5] bg-gray-950 rounded-xl p-[2.5%] shadow-2xl border-4 border-gray-800 flex-shrink-0">
              <div className="w-full h-full rounded-md overflow-hidden bg-gray-900 relative">
                <img
                  src={project.backgroundImage}
                  alt={`${project.brandName} website preview`}
                  className="w-full h-full object-contain object-top"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Mobile Phone Mockup */}
              <div className="absolute -bottom-5 -right-4 w-[30%] aspect-[9/19] bg-gray-950 rounded-[1.6rem] p-[2%] shadow-2xl border-2 border-gray-800 hidden sm:block z-10">
                <div className="w-full h-full rounded-[1.3rem] overflow-hidden bg-gray-900">
                  <img
                    src={project.mobileImage || project.backgroundImage}
                    alt={`${project.brandName} mobile preview`}
                    className="w-full h-full object-contain object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Overlapping Star Badge Icon (Reference 1) */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-11 h-11 rounded-full bg-yellow-400 border-4 border-white shadow-xl flex items-center justify-center z-20 hidden lg:flex"
              aria-hidden="true"
            >
              <Star className="w-5 h-5 fill-current text-white stroke-none" />
            </div>
          </div>

          {/* ── RIGHT: Project Details Area (Reference 1 & 2) ─────────────── */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
            <div>
              {/* Category Pill Zone */}
              <div className="min-h-[28px] mb-2 flex items-center">
                <span className="bg-yellow-100 text-yellow-800 text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full tracking-wider border border-yellow-300 inline-block">
                  {project.categoryPill || project.category}
                </span>
              </div>

              {/* Headline & Tagline Zone (Layout Locked) */}
              <div className="min-h-[64px] mb-3 flex items-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {project.brandName}
                  {project.tagline && (
                    <span className="font-semibold text-gray-500">
                      {' '}– {project.tagline}
                    </span>
                  )}
                </h3>
              </div>

              {/* Description Zone (Layout Locked line-clamp) */}
              <div className="min-h-[76px] mb-5">
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Service Tags Zone (Layout Locked) */}
              <div className="min-h-[36px] mb-6 flex flex-wrap gap-2 items-center">
                {project.services.map((service, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-semibold"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* 4 Metrics Summary Grid Component */}
              {/* <div className="mb-6">
                <WorksMetricsGrid metrics={project.metrics} />
              </div> */}
            </div>

            {/* Action Buttons Zone (Anchored at Bottom) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-xs active:scale-[0.98]"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WorksShowcaseCard;
