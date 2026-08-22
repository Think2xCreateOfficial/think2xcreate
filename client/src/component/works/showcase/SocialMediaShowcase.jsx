import React, { useState } from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import SocialMediaViewAllModal from './modals/SocialMediaViewAllModal';
import { CLIENTS_MASTER } from '../../../utils/data/portfolioData';

/**
 * Authentic Official YouTube Icon Component
 */
export const RealYoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="#FF0000"
    />
  </svg>
);

/**
 * Social Media Management Showcase Component
 * Dynamically renders managed social profiles for clients with active socialProfiles data.
 */
export const SocialMediaShowcase = ({ className = '', showViewAll = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter clients that actually have socialProfiles data
  const socialClients = CLIENTS_MASTER.filter(
    (client) => client.socialProfiles && Object.keys(client.socialProfiles).length > 0
  );

  return (
    <>
      <div className={`bg-white border border-gray-200/80 rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xs mb-8 ${className}`}>
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-yellow-100 text-yellow-800 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              05
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight uppercase">
                SOCIAL MEDIA MANAGEMENT
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed mt-0.5">
                Strategic content creation, channel optimization and social audience growth.
              </p>
            </div>
          </div>

          {showViewAll && socialClients.length > 1 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-extrabold text-gray-700 hover:text-yellow-600 flex items-center gap-1.5 transition-colors self-start sm:self-center cursor-pointer"
            >
              <span>View All Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ── Active Social Profiles Grid ───────────────────────────────── */}
        <div className="space-y-6">
          {socialClients.map((client) => {
            const social = client.socialProfiles || {};
            const insta = social.instagram;
            const yt = social.youtube;

            return (
              <div key={client.id} className="bg-gray-50/70 border border-gray-200/70 rounded-2xl p-5 sm:p-6">
                {/* Client Header */}
                <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-gray-200/60">
                  <div className="w-11 h-11 rounded-full bg-white border border-gray-200 p-0.5 shadow-2xs flex-shrink-0 overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.brandName}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-gray-900 leading-snug">
                      {client.brandName}
                    </h4>
                    <span className="text-xs font-bold text-gray-500 block">
                      {client.category} • Managed Brand Social Ecosystem
                    </span>
                  </div>
                </div>

                {/* Platforms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Instagram Card */}
                  {insta && (
                    <div className="bg-white border border-gray-200/80 rounded-xl p-4 shadow-2xs hover:border-pink-300 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-[2px]">
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                              <Instagram className="w-4 h-4 text-pink-600" />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-xs font-black text-gray-900 leading-none">{insta.name}</h5>
                            <span className="text-[10px] text-gray-400 font-bold">{insta.handle}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-pink-50 text-pink-600">
                          Instagram
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                        <div>
                          <div className="text-sm font-black text-gray-900">{insta.posts || '—'}</div>
                          <span className="text-[9px] font-bold text-gray-400 uppercase">Posts</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-gray-900">{insta.followers || '—'}</div>
                          <span className="text-[9px] font-bold text-gray-400 uppercase">Followers</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-gray-900">{insta.following || '—'}</div>
                          <span className="text-[9px] font-bold text-gray-400 uppercase">Following</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* YouTube Channel Card */}
                  {yt && (
                    <div className="bg-white border border-gray-200/80 rounded-xl p-4 shadow-2xs hover:border-red-300 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                            <RealYoutubeIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="text-xs font-black text-gray-900 leading-none">{yt.name}</h5>
                            <span className="text-[10px] text-gray-400 font-bold">{yt.handle}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-red-50 text-red-600">
                          YouTube
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                        <div>
                          <div className="text-sm font-black text-gray-900">{yt.subscribers || '—'}</div>
                          <span className="text-[9px] font-bold text-gray-400 uppercase">Subscribers</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-gray-900">{yt.videos || '—'}</div>
                          <span className="text-[9px] font-bold text-gray-400 uppercase">Videos Uploaded</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Media View All Modal */}
      {showViewAll && socialClients.length > 1 && (
        <SocialMediaViewAllModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default SocialMediaShowcase;

