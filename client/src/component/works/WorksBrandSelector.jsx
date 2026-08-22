import React, { useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BrandLogoFrame from './BrandLogoFrame';

/**
 * Brand Logo Selector Rail Component (Homepage Reference 1)
 * Horizontally displays brand logos with auto-centering active logo,
 * gold glow ring indicators, brand labels, and navigation arrows.
 */
export const WorksBrandSelector = ({
  projects = [],
  activeIndex = 0,
  onSelectProject = () => {},
  onPrev = () => {},
  onNext = () => {},
  className = '',
}) => {
  const scrollRef = useRef(null);

  // Center active logo inside scroll container smoothly
  const scrollActiveIntoView = useCallback((index) => {
    const container = scrollRef.current;
    if (!container || !container.children[index]) return;
    const item = container.children[index];
    const scrollLeft = item.offsetLeft - container.clientWidth / 2 + item.clientWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    scrollActiveIntoView(activeIndex);
  }, [activeIndex, scrollActiveIntoView]);

  if (!projects || projects.length === 0) return null;

  return (
    <div
      className={`relative flex items-center max-w-5xl mx-auto mb-10 md:mb-14 px-8 sm:px-12 ${className}`}
      role="tablist"
      aria-label="Select project brand"
    >
      {/* Left Navigation Arrow */}
      <button
        onClick={onPrev}
        className="absolute left-0 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-all cursor-pointer flex-shrink-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Horizontally Scrollable Logo Strip */}
      <div
        ref={scrollRef}
        className="flex items-center justify-start sm:justify-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto py-4 w-full scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={project.id}
              onClick={() => onSelectProject(idx)}
              role="tab"
              aria-selected={isActive}
              aria-label={`Select ${project.brandName}`}
              className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group focus:outline-none"
            >
              {/* Normalized Circular Logo Frame */}
              <BrandLogoFrame project={project} isActive={isActive} size="md" />

              {/* Brand Labels */}
              <div className="text-center">
                <span
                  className={`block text-xs sm:text-sm font-extrabold leading-tight transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                  }`}
                >
                  {project.brandName}
                </span>
                <span
                  className={`block text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5 ${
                    isActive ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {project.logoSubLabel || project.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={onNext}
        className="absolute right-0 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-all cursor-pointer flex-shrink-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default WorksBrandSelector;
