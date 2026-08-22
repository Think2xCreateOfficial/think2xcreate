import React from 'react';
import Modal from '../../../ui/Modal';
import { Share2, Instagram, Facebook } from 'lucide-react';
import { RealYoutubeIcon } from '../SocialMediaShowcase';
import { CLIENTS_MASTER } from '../../../../utils/data/portfolioData';

/**
 * Social Media Management "View All" Modal Component
 * Displays organized grid of managed client social profiles with metrics.
 * Does not render external visiting links or buttons.
 */
export const SocialMediaViewAllModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Instagram */}
                {social.instagram && (
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-3">
                      <Instagram className="w-5 h-5 text-pink-600 flex-shrink-0" />
                      <div className="overflow-hidden">
                        <h5 className="text-xs font-black text-gray-900 truncate">{social.instagram.name || client.brandName}</h5>
                        <span className="text-[10px] text-gray-500 font-semibold block">{social.instagram.handle}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center bg-white p-2 rounded-lg border border-gray-100">
                      <div>
                        <div className="text-xs font-black text-gray-900">{social.instagram.posts || '—'}</div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">Posts</span>
                      </div>
                      <div>
                        <div className="text-xs font-black text-gray-900">{social.instagram.followers || '—'}</div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">Followers</span>
                      </div>
                      <div>
                        <div className="text-xs font-black text-gray-900">{social.instagram.following || '—'}</div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">Following</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Facebook */}
                {social.facebook && (
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-3">
                      <Facebook className="w-5 h-5 text-[#1877F2] flex-shrink-0 fill-current" />
                      <div className="overflow-hidden">
                        <h5 className="text-xs font-black text-gray-900 truncate">{social.facebook.name || client.brandName}</h5>
                        <span className="text-[10px] text-gray-500 font-semibold block">Facebook Page</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center bg-white p-2 rounded-lg border border-gray-100">
                      <div>
                        <div className="text-xs font-black text-gray-900">{social.facebook.likes || '—'}</div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">Likes</span>
                      </div>
                      <div>
                        <div className="text-xs font-black text-gray-900">{social.facebook.followers || '—'}</div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">Followers</span>
                      </div>
                      <div>
                        <div className="text-xs font-black text-gray-900">{social.facebook.posts || '—'}</div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">Posts</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* YouTube */}
                {social.youtube && (
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-3">
                      <RealYoutubeIcon className="w-5 h-5 flex-shrink-0" />
                      <div className="overflow-hidden">
                        <h5 className="text-xs font-black text-gray-900 truncate">{social.youtube.name || client.brandName}</h5>
                        <span className="text-[10px] text-gray-500 font-semibold block">{social.youtube.handle}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-center bg-white p-2 rounded-lg border border-gray-100">
                      <div>
                        <div className="text-xs font-black text-gray-900">{social.youtube.subscribers || '—'}</div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">Subscribers</span>
                      </div>
                      <div>
                        <div className="text-xs font-black text-gray-900">{social.youtube.videos || '—'}</div>
                        <span className="text-[9px] text-gray-400 font-bold uppercase">Videos</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default SocialMediaViewAllModal;
