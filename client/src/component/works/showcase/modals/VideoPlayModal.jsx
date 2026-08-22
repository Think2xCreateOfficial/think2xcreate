import React from 'react';
import Modal from '../../../ui/Modal';
import { ExternalLink, Play, Film } from 'lucide-react';

/**
 * Redesigned Reels & Shorts Video Play Modal Component
 * Renders a vertical 9:16 mobile frame with autoplay YouTube embed and sleek controls.
 */
export const VideoPlayModal = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  const youtubeId = video.youtubeId || 'a5avet3CjJs';
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={video.title || "Shorts & Reel Video"}
      subtitle="Reels & Video Editing"
      icon={Film}
      maxWidth="max-w-md"
      className="bg-gray-950 text-white rounded-3xl overflow-hidden border border-gray-800"
    >
      <div className="flex flex-col bg-gray-950">
        {/* 9:16 Vertical Shorts Video Player Stage */}
        <div className="relative aspect-[9/16] w-full bg-black overflow-hidden shadow-2xl flex items-center justify-center">
          <iframe
            src={embedUrl}
            title={video.title || "Shorts & Reel Video"}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Information & Link Footer */}
        <div className="p-4 bg-gray-900 border-t border-gray-800 flex items-center justify-between gap-3">
          <div className="overflow-hidden">
            <span className="text-[10px] font-black uppercase text-yellow-400 tracking-widest block mb-0.5">
              {video.categoryPill || 'REELS & VIDEO EDITING'}
            </span>
            <p className="text-xs text-gray-300 font-semibold line-clamp-1">
              Short-form Video Showcase
            </p>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-md flex-shrink-0"
          >
            <span>YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default VideoPlayModal;
