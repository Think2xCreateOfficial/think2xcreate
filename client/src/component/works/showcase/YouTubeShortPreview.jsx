import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import VideoPlayModal from './modals/VideoPlayModal';

/**
 * Reusable YouTube Shorts Video Player Card
 * Displays thumbnail + play button overlay. Clicking play button opens VideoPlayModal.
 */
export const YouTubeShortPreview = ({ item, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!item) return null;

  const youtubeId = item.youtubeId || 'a5avet3CjJs';
  const posterImg = item.media?.thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <>
      <div className={`bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${className}`}>
        {/* 9:16 Vertical Video Frame Stage */}
        <div className="relative aspect-[9/14] sm:aspect-[9/15] bg-[#0D0E12] overflow-hidden flex items-center justify-center">
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative w-full h-full cursor-pointer flex flex-col justify-between p-4 group"
          >
            <img
              src={posterImg}
              alt={item.title}
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
              }}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-red-600 text-white font-black text-[10px] uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md">
                Shorts
              </span>
            </div>

            {/* Center Circular Play Button */}
            <div className="relative z-10 self-center w-14 h-14 rounded-full bg-white/95 text-gray-900 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300">
              <Play className="w-6 h-6 fill-current ml-1" />
            </div>

            {/* Bottom Spacer */}
            <div className="relative z-10 h-4" />
          </div>
        </div>
      </div>

      {/* Interactive Video Play Modal */}
      <VideoPlayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        video={item}
      />
    </>
  );
};

export default YouTubeShortPreview;
