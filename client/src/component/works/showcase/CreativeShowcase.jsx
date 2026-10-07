import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import PosterLogoViewAllModal from './modals/PosterLogoViewAllModal';
import { PROJECTS_MASTER } from '../../../utils/data/portfolioData';

/**
 * Poster Design & Logo Design Showcase Component (Reference Image 02)
 * Displays 3 best poster & logo design artworks aligned in a 1080 x 1080 (1:1 square ratio) grid view.
 * Supports showViewAll prop (defaults to true).
 */
export const CreativeShowcase = ({ className = '', showViewAll = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posterItems = PROJECTS_MASTER.filter(
    (p) => p.serviceId === 'photo-video-editing' && p.category === 'Poster Designs'
  ).slice(0, 3);

  return (
    <>
      <div className={`bg-white border border-gray-200/80 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xs mb-8 ${className}`}>
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-gray-100 pb-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-800 font-black text-sm flex items-center justify-center flex-shrink-0 mt-1">
              02
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
                POSTER DESIGN & LOGO DESIGN
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mt-0.5">
                Eye-catching poster designs, brand identity & logo design artwork created to elevate your business presence.
              </p>
            </div>
          </div>

          {showViewAll && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-extrabold text-gray-700 hover:text-yellow-600 flex items-center gap-1.5 transition-colors self-start sm:self-center cursor-pointer"
            >
              <span>View All Designs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ── 3-Column 1080 x 1080 Square Grid View ─────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posterItems.map((item) => (
            <div
              key={item.id}
              onClick={() => showViewAll && setIsModalOpen(true)}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-800 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* 1080x1080 Square Frame (Aspect Ratio 1:1) */}
              <div className="aspect-square w-full overflow-hidden relative bg-black">
                <img
                  src={item.bannerImage || item.media?.desktopImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Poster Info */}
              <div className="p-4 bg-gray-900 border-t border-gray-800 text-white flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-white group-hover:text-yellow-400 transition-colors leading-tight line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-gray-400 mt-0.5 line-clamp-1">
                    {item.headline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Poster & Logo View All Modal */}
      {showViewAll && (
        <PosterLogoViewAllModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default CreativeShowcase;
