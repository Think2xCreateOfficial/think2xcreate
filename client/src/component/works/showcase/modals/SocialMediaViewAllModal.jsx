import React from 'react';
import Modal from '../../../ui/Modal';
import { Share2, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { RealYoutubeIcon } from '../../../ui/SocialIcons';
import { CLIENTS_MASTER } from '../../../../utils/data/portfolioData';

/**
 * Social Media Management "View All" Modal Component
 * Displays organized grid of managed client social profiles with clickable platform links.
 * No fake follower/post/engagement statistics.
 */
export const SocialMediaViewAllModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const platformIcons = {
    instagram: (
      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-[1.5px] flex-shrink-0">
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
          <Instagram className="w-3.5 h-3.5 text-pink-600" />
        </div>
      </div>
    ),
    facebook: (
      <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
        <Facebook className="w-3.5 h-3.5 text-[#1877F2] fill-current" />
      </div>
    ),
    youtube: (
      <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center border border-red-100 flex-shrink-0">
        <RealYoutubeIcon className="w-3.5 h-3.5" />
      </div>
    ),
  };

  const platformLabels = {
    instagram: { label: 'Instagram', badgeColor: 'bg-pink-50 text-pink-600' },
    facebook: { label: 'Facebook', badgeColor: 'bg-blue-50 text-blue-600' },
    youtube: { label: 'YouTube', badgeColor: 'bg-red-50 text-red-600' },
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="All Managed Client Social Profiles"
      subtitle="Social Media Portfolio"
      icon={Share2}
      maxWidth="max-w-5xl"
    >
      <div className="p-4 sm:p-8 bg-gray-50/50 space-y-6">
        {CLIENTS_MASTER.map((client) => {
          const social = client.socialProfiles;
          if (!social) return null;

          return (
            <div key={client.id} className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-800 font-bold flex items-center justify-center overflow-hidden">
                  <img src={client.logo} alt={client.brandName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                    {client.brandName}
                  </h4>
                  <span className="text-xs text-gray-500 font-semibold">{client.category}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(social).map(([platform, data]) => {
                  if (!data || !data.url) return null;
                  const icon = platformIcons[platform];
                  const config = platformLabels[platform];
                  if (!icon || !config) return null;

                  return (
                    <a
                      key={platform}
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 flex items-center gap-3 group hover:border-gray-300 transition-all"
                    >
                      {icon}
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-black text-gray-900 truncate">{data.name || client.brandName}</h5>
                        <span className="text-[10px] text-gray-500 font-semibold block truncate">
                          {data.handle || config.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded ${config.badgeColor}`}>
                          {config.label}
                        </span>
                        <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-gray-500 transition-colors" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default SocialMediaViewAllModal;
