import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

/**
 * Service Navigation Component (Reference C)
 * Renders bottom navigation strip connecting services in a sequence.
 */
export const ServiceNavigation = ({ currentServiceId }) => {
  const navigate = useNavigate();

  const servicesSequence = [
    { id: 'website-development', name: 'Website Development', path: '/services/website-development' },
    { id: 'meta-ads-management', name: 'Meta Ads Management', path: '/services/meta-ads-management' },
    { id: 'social-media-management', name: 'Social Media Management', path: '/services/social-media-management' },
    { id: 'photo-video-editing', name: 'Photo & Video Editing', path: '/services/photo-video-editing' },
  ];

  // Map alias keys safely
  const aliasMap = {
    'meta-ads': 'meta-ads-management',
    'social-media': 'social-media-management',
    'video-editing': 'photo-video-editing',
  };

  const normalizedId = aliasMap[currentServiceId] || currentServiceId;
  const currentIdx = servicesSequence.findIndex((s) => s.id === normalizedId);

  const prevIdx = (currentIdx - 1 + servicesSequence.length) % servicesSequence.length;
  const nextIdx = (currentIdx + 1) % servicesSequence.length;

  const prevService = servicesSequence[prevIdx];
  const nextService = servicesSequence[nextIdx];

  return (
    <section className="py-8 bg-white border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">

          {/* Left: Previous Service Button */}
          <button
            onClick={() => navigate(prevService.path)}
            className="bg-white hover:bg-gray-50 border border-gray-200/80 rounded-2xl p-4 flex items-center gap-3 transition-all cursor-pointer text-left group shadow-2xs"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-yellow-400 group-hover:text-black transition-colors flex-shrink-0">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Previous Service
              </span>
              <span className="block text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-yellow-700 transition-colors leading-tight">
                {prevService.name}
              </span>
            </div>
          </button>

          {/* Center: Explore Our Work Button */}
          <button
            onClick={() => navigate('/our-work')}
            className="bg-yellow-50 hover:bg-yellow-100/80 border border-yellow-200/80 rounded-2xl p-4 flex items-center justify-center gap-2 transition-all cursor-pointer text-center group shadow-2xs"
          >
            <LayoutGrid className="w-4 h-4 text-yellow-800" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-yellow-800">
                Explore Our Work
              </span>
              <span className="block text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">
                See More Works
              </span>
            </div>
          </button>

          {/* Right: Next Service Button */}
          <button
            onClick={() => navigate(nextService.path)}
            className="bg-white hover:bg-gray-50 border border-gray-200/80 rounded-2xl p-4 flex items-center justify-end gap-3 transition-all cursor-pointer text-right group shadow-2xs"
          >
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Next Service
              </span>
              <span className="block text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight">
                {nextService.name}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-yellow-400 group-hover:text-black transition-colors flex-shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};

export default ServiceNavigation;
