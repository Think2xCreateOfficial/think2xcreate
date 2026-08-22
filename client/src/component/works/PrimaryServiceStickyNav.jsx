import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Globe, Megaphone, Share2, Video } from 'lucide-react';
import { SERVICES_MASTER } from '../../utils/data/portfolioData';

const iconMap = {
  'all-showcase': LayoutGrid,
  'website-development': Globe,
  'meta-ads-management': Megaphone,
  'social-media-management': Share2,
  'photo-video-editing': Video,
};

/**
 * Premium Primary Sticky Service Navigation Bar
 * Anchors cleanly below navbar when scrolling. Hides all scrollbars.
 */
export const PrimaryServiceStickyNav = ({
  activeServiceId = 'all-showcase',
  onSelectService = () => {},
  className = '',
}) => {
  return (
    <div
      className={`sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-y border-gray-200/80 shadow-xs py-3 select-none ${className}`}
      role="tablist"
      aria-label="Primary Service Showcase Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── DESKTOP & TABLET: Horizontal Pill Bar ───────────────────── */}
        <div className="hidden sm:flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1 sm:pb-0 pt-0.5">
          {SERVICES_MASTER.map((service) => {
            const isActive = activeServiceId === service.id;
            const Icon = iconMap[service.id] || LayoutGrid;

            return (
              <button
                key={service.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectService(service.id)}
                className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer focus:outline-none flex-shrink-0 ${
                  isActive
                    ? 'text-gray-900 bg-yellow-100 border border-yellow-300 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-yellow-600' : 'text-gray-400'}`} />
                <span>{service.title}</span>

                {isActive && (
                  <motion.div
                    layoutId="activePrimaryTabIndicator"
                    className="absolute -bottom-1 left-3 right-3 h-0.5 bg-yellow-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── MOBILE VIEW: Touch-Friendly Scrollable Bar (Scrollbars Hidden) ── */}
        <div className="sm:hidden flex flex-col gap-2">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1 pt-0.5 px-1 -mx-2">
            {SERVICES_MASTER.map((service) => {
              const isActive = activeServiceId === service.id;
              const Icon = iconMap[service.id] || LayoutGrid;

              return (
                <button
                  key={service.id}
                  onClick={() => onSelectService(service.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-extrabold text-xs whitespace-nowrap flex-shrink-0 transition-all ${
                    isActive
                      ? 'bg-yellow-400 text-black shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrimaryServiceStickyNav;
