import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import YouTubeShortPreview from './YouTubeShortPreview';
import VideoViewAllModal from './modals/VideoViewAllModal';
import { PROJECTS_MASTER } from '../../../utils/data/portfolioData';

/**
 * Reels & Video Editing Showcase Component (Reference Image 04)
 * Displays 3 short-form video previews using YouTubeShortPreview cards.
 * Supports showViewAll prop (defaults to true).
 */
export const VideoShowcase = ({ className = '', showViewAll = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoProjects = PROJECTS_MASTER.filter(
    (p) => p.serviceId === 'photo-video-editing' && p.category === 'Reels & Video Editing'
  ).slice(0, 3);

  return (
    <>
      <div className={`bg-white border border-gray-200/80 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xs mb-8${className}`}>
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-gray-100 pb-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-800 font-black text-sm flex items-center justify-center flex-shrink-0 mt-1">
              04
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
                REELS & VIDEO EDITING
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mt-0.5">
                Short-form videos that grab attention, tell your story and boost engagement.
              </p>
            </div>
          </div>

          {showViewAll && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-extrabold text-gray-700 hover:text-yellow-600 flex items-center gap-1.5 transition-colors self-start sm:self-center cursor-pointer"
            >
              <span>View All Videos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ── 3-Column Video Shorts Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoProjects.map((item) => (
            <YouTubeShortPreview key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Video View All Modal */}
      {showViewAll && (
        <VideoViewAllModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default VideoShowcase;
