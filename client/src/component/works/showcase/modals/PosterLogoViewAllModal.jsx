import React from 'react';
import Modal from '../../../ui/Modal';
import { Image as ImageIcon, ExternalLink } from 'lucide-react';
import { PROJECTS_MASTER } from '../../../../utils/data/portfolioData';

/**
 * Poster & Logo Design "View All" Modal Component
 * Refactored to consume the unified Modal primitive.
 */
export const PosterLogoViewAllModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const creativeProjects = PROJECTS_MASTER.filter(
    (p) => p.serviceId === 'photo-video-editing' && p.category === 'Poster Designs'
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`All Poster Design & Logo Work (${creativeProjects.length})`}
      subtitle="Creative Artwork Portfolio"
      icon={ImageIcon}
      maxWidth="max-w-6xl"
    >
      <div className="p-4 sm:p-8 bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creativeProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-950 relative">
                <img
                  src={project.bannerImage || project.media?.desktopImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-gray-900 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-gray-500 mt-0.5 line-clamp-1">
                    {project.headline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default PosterLogoViewAllModal;
