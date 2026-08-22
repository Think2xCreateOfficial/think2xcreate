import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import WebsiteViewAllModal from './modals/WebsiteViewAllModal';
import { PROJECTS_MASTER, CLIENTS_MASTER } from '../../../utils/data/portfolioData';

/**
 * Website Development Showcase Component (Reference Image 01)
 * Displays 3 live websites with laptop + mobile mockups, titles, taglines, live URL links & Visit Website CTA buttons.
 * Supports showViewAll prop (defaults to true).
 */
export const WebsiteShowcase = ({ className = '', showViewAll = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch real website development projects (best 3 for main page)
  const websiteProjects = PROJECTS_MASTER.filter(
    (p) => p.serviceId === 'website-development'
  ).slice(0, 3);

  return (
    <>
      <div className={`bg-white border border-gray-200/80 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xs mb-4 ${className}`}>
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-gray-100 pb-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-800 font-black text-sm flex items-center justify-center flex-shrink-0 mt-1">
              01
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
                WEBSITES WE BUILT
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mt-0.5">
                High-performance websites that are fast, responsive and designed to convert visitors into customers.
              </p>
            </div>
          </div>

          {showViewAll && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-extrabold text-gray-700 hover:text-yellow-600 flex items-center gap-1.5 transition-colors self-start sm:self-center cursor-pointer"
            >
              <span>View All Websites</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ── 3-Column Websites Showcase Grid ────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteProjects.map((project) => {
            const client = CLIENTS_MASTER.find((c) => c.id === project.clientId) || {};
            const desktopImg = project.media?.desktopImage || client.backgroundImage;
            const mobileImg = project.media?.mobileImage || client.mobileImage;
            const liveUrl = project.externalUrl || client.website;

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Device Mockup Frame Stage */}
                <div className="bg-gray-100 p-4 relative min-h-[220px] flex items-center justify-center border-b border-gray-100">
                  {/* Laptop Mockup Box */}
                  <div className="relative w-full max-w-[280px] aspect-[16/9.5] bg-gray-950 rounded-lg p-[1.4%] shadow-lg border-2 border-gray-800">
                    <div className="w-full h-full rounded overflow-hidden bg-gray-900">
                      <img
                        src={desktopImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Overlapping Mobile Phone Mockup */}
                    <div className="absolute -bottom-3 -right-2 w-[30%] aspect-[9/19] bg-gray-950 rounded p-[1.2%] shadow-xl border-2 border-gray-800 z-10">
                      <div className="w-full h-full rounded-lg overflow-hidden bg-gray-900">
                        <img
                          src={mobileImg || desktopImg}
                          alt={`${project.title} mobile`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title & Details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-base font-black text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight mb-1">
                      {client.brandName || project.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-500 mb-3 line-clamp-2 leading-relaxed">
                      {project.headline || client.tagline}
                    </p>
                  </div>

                  {/* Visit Website Button */}
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-2.5 px-4 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-xs active:scale-95"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Website View All Modal */}
      {showViewAll && (
        <WebsiteViewAllModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default WebsiteShowcase;
