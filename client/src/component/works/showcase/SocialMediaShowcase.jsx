import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Instagram, Facebook } from 'lucide-react';
import SocialMediaViewAllModal from './modals/SocialMediaViewAllModal';
import { CLIENTS_MASTER } from '../../../utils/data/portfolioData';
import { RealYoutubeIcon } from '../../ui/SocialIcons';

/**
 * Social Media Management Showcase Component
 * Renders managed social profiles for clients with active socialProfiles data.
 * Shows only platform identities and clickable profile links — no fake statistics.
 */
export const SocialMediaShowcase = ({ className = '', showViewAll = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter clients that actually have socialProfiles data
  const socialClients = CLIENTS_MASTER.filter(
    (client) => client.socialProfiles && Object.keys(client.socialProfiles).length > 0
  );

  /** Platform link renderer — reusable across all platforms */
  const renderPlatformLink = (platform, data, client) => {
    if (!data) return null;

    const platformConfig = {
      instagram: {
        icon: (
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-[2px] flex-shrink-0">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Instagram className="w-4 h-4 text-pink-600" />
            </div>
          </div>
        ),
        label: 'Instagram',
        badgeColor: 'bg-pink-50 text-pink-600',
        hoverBorder: 'hover:border-pink-300',
        displayHandle: data.handle || `@${client.brandName}`,
      },
      facebook: {
        icon: (
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0">
            <Facebook className="w-4 h-4 text-[#1877F2] fill-current" />
          </div>
        ),
        label: 'Facebook',
        badgeColor: 'bg-blue-50 text-blue-600',
        hoverBorder: 'hover:border-blue-300',
        displayHandle: data.name || client.brandName,
      },
      youtube: {
        icon: (
          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center border border-red-100 flex-shrink-0">
            <RealYoutubeIcon className="w-4 h-4" />
          </div>
        ),
        label: 'YouTube',
        badgeColor: 'bg-red-50 text-red-600',
        hoverBorder: 'hover:border-red-300',
        displayHandle: data.handle || data.name || client.brandName,
      },
    };

    const config = platformConfig[platform];
    if (!config) return null;

    return (
      <a
        key={platform}
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-white border border-gray-200/80 rounded-xl p-4 shadow-2xs ${config.hoverBorder} transition-all group flex items-center gap-3`}
      >
        {config.icon}
        <div className="flex-1 min-w-0">
          <h5 className="text-xs font-black text-gray-900 leading-none truncate group-hover:text-gray-700 transition-colors">
            {data.name || client.brandName}
          </h5>
          <span className="text-[10px] text-gray-400 font-bold block mt-0.5 truncate">
            {config.displayHandle}
          </span>
        </div>
      </a>
    );
  };

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
                We manage and build a business's social presence across the platforms that matter.
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
            const platforms = Object.keys(social);

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
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-black text-gray-900 leading-snug truncate">
                      {client.brandName}
                    </h4>
                    <span className="text-xs font-bold text-gray-500 block">
                      {client.category} • Managed Social Presence
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 hidden sm:inline-block flex-shrink-0">
                    {platforms.length} {platforms.length === 1 ? 'Platform' : 'Platforms'}
                  </span>
                </div>

                {/* Platform Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {renderPlatformLink('instagram', social.instagram, client)}
                  {renderPlatformLink('facebook', social.facebook, client)}
                  {renderPlatformLink('youtube', social.youtube, client)}
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
