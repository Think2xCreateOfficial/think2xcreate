import React from 'react';
import Modal from '../../../ui/Modal';
import { Video } from 'lucide-react';
import YouTubeShortPreview from '../YouTubeShortPreview';
import { PROJECTS_MASTER } from '../../../../utils/data/portfolioData';

/**
 * Reels & Video Editing "View All" Modal Component
 * Refactored to consume the unified Modal primitive.
 */
export const VideoViewAllModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const videoProjects = PROJECTS_MASTER.filter(
    (p) => p.serviceId === 'photo-video-editing' && p.category === 'Reels & Video Editing'
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`All Reels & Video Edits (${videoProjects.length})`}
      subtitle="Short-Form Video Portfolio"
      icon={Video}
      maxWidth="max-w-6xl"
    >
      <div className="p-4 sm:p-8 bg-gray-50/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoProjects.map((item) => (
            <YouTubeShortPreview key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default VideoViewAllModal;
