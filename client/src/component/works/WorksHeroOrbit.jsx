import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import BrandLogoFrame from './BrandLogoFrame';

/**
 * Interactive Hero Orbit Showcase Component (Reference 2)
 * Features a central active brand hub, laptop+mobile mockups,
 * surrounding orbit brand nodes equally split on left & right, and anchored navigation.
 */
export const WorksHeroOrbit = ({
  projects = [],
  activeIndex = 0,
  onSelectProject = () => {},
  onPrev = () => {},
  onNext = () => {},
  className = '',
}) => {
  const prefersReduced = useReducedMotion();

  const activeProject = projects[activeIndex] || projects[0];
  if (!activeProject) return null;

  // Compute surrounding orbit nodes equally split on left and right
  const { leftNodes, rightNodes } = (() => {
    if (projects.length <= 1) return { leftNodes: [], rightNodes: [] };

    // Gather inactive projects in order
    const inactiveProjects = [];
    for (let i = 1; i < projects.length; i++) {
      inactiveProjects.push(projects[(activeIndex + i) % projects.length]);
    }

    // Equally split between left and right columns
    const half = Math.ceil(inactiveProjects.length / 2);
    return {
      leftNodes: inactiveProjects.slice(0, half),
      rightNodes: inactiveProjects.slice(half),
    };
  })();

  const fadeMotion = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.25, ease: 'easeOut' },
      };

  const renderOrbitNode = (project, side) => (
    <button
      key={project.id}
      onClick={() => {
        const idx = projects.findIndex((p) => p.id === project.id);
        if (idx !== -1) onSelectProject(idx);
      }}
      aria-label={`Select ${project.brandName}`}
      className={`flex items-center gap-3 group cursor-pointer focus:outline-none transition-transform hover:scale-105 ${
        side === 'left' ? 'flex-row-reverse text-right' : 'flex-row text-left'
      }`}
    >
      <BrandLogoFrame project={project} isActive={false} size="sm" />
      <div className="hidden sm:block">
        <span className="block text-xs font-extrabold text-gray-800 group-hover:text-yellow-600 transition-colors leading-tight max-w-[110px]">
          {project.brandName}
        </span>
        <span className="block text-[10px] text-gray-400 font-semibold leading-tight mt-0.5">
          {project.logoSubLabel || project.category}
        </span>
      </div>
    </button>
  );

  return (
    <section className={`relative w-full overflow-hidden select-none py-8 md:py-12 ${className}`}>
      {/* Container with Outer Anchored Navigation Arrows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">

        {/* Outer Left Arrow Button */}
        {projects.length > 1 && (
          <button
            onClick={onPrev}
            aria-label="Previous project"
            className="absolute left-2 sm:left-6 z-30 w-11 h-11 rounded-full border border-gray-200 bg-white/90 backdrop-blur-xs shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer active:scale-95 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Central Hero Orbit & Mockup Stage */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center">

          {/* Dotted Arc Orbit Ring Background */}
          <div className="absolute top-4 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full border-2 border-dashed border-yellow-200/80 pointer-events-none z-0" />

          {/* Orbit Node Columns + Central Hub */}
          <div className="relative w-full flex items-center justify-between z-10 min-h-[380px]">

            {/* Left Orbit Column */}
            <div className="hidden md:flex flex-col gap-8 z-10 pl-4 items-end">
              {leftNodes.map((p) => renderOrbitNode(p, 'left'))}
            </div>

            {/* Central Active Featured Hub */}
            <div className="flex flex-col items-center text-center mx-auto z-20 px-2 max-w-xl">

              {/* Central Large Active Logo */}
              <div className="mb-3">
                <BrandLogoFrame project={activeProject} isActive={true} size="xl" />
              </div>

              {/* Animated Header & CTA */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  {...fadeMotion}
                  className="flex flex-col items-center text-center"
                >
                  <span className="bg-yellow-100 text-yellow-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-yellow-300 mb-2 inline-block">
                    FEATURED PROJECT
                  </span>

                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-1 tracking-tight">
                    {activeProject.brandName}
                    {activeProject.tagline && (
                      <span className="font-semibold text-gray-500">
                        {' '}– {activeProject.tagline}
                      </span>
                    )}
                  </h1>

                  <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {activeProject.categoryPill || activeProject.category}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Laptop + Phone Centerpiece Mockup (Reference 2) */}
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[16/7.5] bg-gray-950 rounded-xl p-[1%] shadow-xl border-1 border-gray-800">
                <div className="w-full h-full rounded-md overflow-hidden bg-[#0D0E12] relative flex items-center justify-center">
                  <img
                    src={activeProject.backgroundImage}
                    alt={`${activeProject.brandName} website`}
                    className="w-full h-full object-contain object-top"
                    loading="eager"
                  />
                </div>

                {/* Overlapping Mobile Phone */}
                <div className="absolute -bottom-4 -right-3 w-[30%] aspect-[9/19] bg-gray-950 rounded px-[1.2%] py-[1.5%] shadow-xl border-1 border-gray-800 hidden sm:block z-10">
                  <div className="w-full h-full rounded overflow-hidden bg-[#0D0E12] flex items-center justify-center">
                    <img
                      src={activeProject.mobileImage || activeProject.backgroundImage}
                      alt={`${activeProject.brandName} phone`}
                      className="w-full h-full object-contain object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Orbit Column */}
            <div className="hidden md:flex flex-col gap-8 z-10 pr-4 items-start">
              {rightNodes.map((p) => renderOrbitNode(p, 'right'))}
            </div>

          </div>
        </div>

        {/* Outer Right Arrow Button */}
        {projects.length > 1 && (
          <button
            onClick={onNext}
            aria-label="Next project"
            className="absolute right-2 sm:right-6 z-30 w-11 h-11 rounded-full border border-gray-200 bg-white/90 backdrop-blur-xs shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer active:scale-95 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

      </div>
    </section>
  );
};

export default WorksHeroOrbit;
