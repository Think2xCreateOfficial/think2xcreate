import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BrandLogoFrame from './BrandLogoFrame';

/**
 * Fixed-Center Brand Logo Rail Component (Reference Visual Source of Truth)
 *
 * Mathematical Centering Architecture:
 * - Active brand logo center is mathematically anchored at viewportCenter = 50%.
 * - Spacious responsive step spacing (170px desktop, 135px tablet, 95px mobile)
 *   ensures left, center, and right logos are equally spaced and never crowd each other.
 * - Circular logo frame is centered via left: calc(50% + ${relIdx * stepSpacing}px)
 *   with translateX(-50%) applied directly to the circle midpoint.
 * - Container is clip-free with dynamic auto-height, preventing multi-line brand text cutoffs.
 */
export const FixedCenterBrandRail = ({
  projects = [],
  activeIndex = 0,
  onSelectProject = () => { },
  onPrev = () => { },
  onNext = () => { },
  className = '',
}) => {
  const prefersReduced = useReducedMotion();
  const total = projects.length;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!projects || total === 0) return null;

  // Determine spacious responsive horizontal step spacing
  const getStepSpacing = () => {
    if (windowWidth >= 1024) return 170;
    if (windowWidth >= 768) return 135;
    return 95;
  };

  const offsetStep = getStepSpacing();

  // Calculate signed relative circular distance (-total/2 to +total/2)
  const getRelativeIndex = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div
      className={`relative w-full max-w-7xl mx-auto mb-4 sm:mb-8 px-4 sm:px-8 select-none ${className}`}
      role="tablist"
      aria-label="Select project brand"
    >
      {/* Left Navigation Arrow */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-yellow-50 hover:border-yellow-300 hover:text-yellow-600 transition-all cursor-pointer flex-shrink-0 active:scale-95 focus:outline-none"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Fixed Center Rail Stage - Clip Free Auto Height */}
      <div className="relative w-full min-h-[140px] sm:min-h-[160px] py-4 flex items-center justify-center overflow-visible">
        {/* Ambient Golden Glow Behind Active Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/15 rounded-full blur-2xl pointer-events-none -z-10" />

        {projects.map((project, idx) => {
          const relIdx = getRelativeIndex(idx);
          const isActive = relIdx === 0;

          // Horizon limit: 2 items on left (-2,-1), active center (0), 2 items on right (+1,+2)
          const horizonLimit = windowWidth < 640 ? 1 : 2;
          const isVisible = Math.abs(relIdx) <= horizonLimit;
          if (!isVisible) return null;

          const targetOffsetPx = relIdx * offsetStep;

          // Visual hierarchy scaling and opacity
          const scale = isActive ? 1.15 : Math.max(0.78, 1 - Math.abs(relIdx) * 0.14);
          const opacity = isActive ? 1 : Math.max(0.5, 1 - Math.abs(relIdx) * 0.25);
          const zIndex = isActive ? 20 : 10 - Math.abs(relIdx);

          const motionProps = prefersReduced
            ? {
                style: {
                  left: `calc(50% + ${targetOffsetPx}px)`,
                  zIndex,
                  opacity,
                  transform: 'translateX(-50%) translateY(-50%)',
                },
              }
            : {
                animate: {
                  left: `calc(50% + ${targetOffsetPx}px)`,
                  scale,
                  opacity,
                },
                transition: {
                  type: 'spring',
                  stiffness: 320,
                  damping: 30,
                  mass: 0.8,
                },
              };

          return (
            <motion.div
              key={project.id}
              onClick={() => onSelectProject(idx)}
              role="tab"
              aria-selected={isActive}
              aria-label={`Select ${project.brandName}`}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group focus:outline-none"
              style={{ zIndex }}
              {...motionProps}
            >
              {/* Circular Logo Frame - Center Anchored */}
              <div className="relative flex flex-col items-center justify-center">
                <BrandLogoFrame project={project} isActive={isActive} size="md" />
              </div>

              {/* Brand Labels - Clip-Free Flexible Height */}
              <div className="text-center w-28 sm:w-36 mt-2 flex flex-col items-center justify-center px-1">
                <span
                  className={`block text-xs sm:text-sm font-extrabold leading-tight transition-colors whitespace-normal break-words ${
                    isActive ? 'text-gray-900 font-black' : 'text-gray-500 group-hover:text-gray-900'
                  }`}
                >
                  {project.brandName}
                </span>
                <span
                  className={`block text-[10px] sm:text-[11px] font-semibold leading-tight mt-0.5 whitespace-nowrap ${
                    isActive ? 'text-yellow-600 font-bold' : 'text-gray-400'
                  }`}
                >
                  {project.logoSubLabel || project.category}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-yellow-50 hover:border-yellow-300 hover:text-yellow-600 transition-all cursor-pointer flex-shrink-0 active:scale-95 focus:outline-none"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default FixedCenterBrandRail;
