import React from 'react';
import Modal from '../../../ui/Modal';
import { ExternalLink, Globe } from 'lucide-react';
import { PROJECTS_MASTER, CLIENTS_MASTER } from '../../../../utils/data/portfolioData';

/**
 * Website Development "View All" Modal Component
 * Refactored to consume the unified Modal primitive.
 */
export const WebsiteViewAllModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const websiteProjects = PROJECTS_MASTER.filter(
    (p) => p.serviceId === 'website-development'
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`All Website Development Projects (${websiteProjects.length})`}
      subtitle="Complete Portfolio"
      icon={Globe}
      maxWidth="max-w-6xl"
    >
      <div className="p-4 sm:p-8 bg-gray-50/50">
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
                <div className="bg-gray-100 p-4 relative min-h-[200px] flex items-center justify-center border-b border-gray-100">
                  <div className="relative w-full max-w-[260px] aspect-[16/9.5] bg-gray-950 rounded-lg p-[2%] shadow-lg border-2 border-gray-800">
                    <div className="w-full h-full rounded overflow-hidden bg-gray-900">
                      <img
                        src={desktopImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-2 w-[30%] aspect-[9/19] bg-gray-950 rounded-xl p-[2%] shadow-xl border-2 border-gray-800 z-10">
                      <div className="w-full h-full rounded-lg overflow-hidden bg-gray-900">
                        <img
                          src={mobileImg || desktopImg}
                          alt={`${project.title} mobile`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-base font-black text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight mb-1">
                      {client.brandName || project.title}
                    </h4>
                  </div>

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
    </Modal>
  );
};

export default WebsiteViewAllModal;
