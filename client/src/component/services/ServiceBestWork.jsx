import React from 'react';
import WebsiteShowcase from '../works/showcase/WebsiteShowcase';
import AdsShowcase from '../works/showcase/AdsShowcase';
import SocialMediaShowcase from '../works/showcase/SocialMediaShowcase';
import CreativeShowcase from '../works/showcase/CreativeShowcase';
import VideoShowcase from '../works/showcase/VideoShowcase';

/**
 * Service Page 2nd Section Replacement Component
 * Replaces generic cards with exact showcase components from Our Works page.
 * Hides "View All" modal triggers by passing showViewAll={false}.
 */
export const ServiceBestWork = ({ data }) => {
  if (!data || !data.id) return null;

  const renderServiceShowcase = () => {
    switch (data.id) {
      case 'meta-ads':
      case 'meta-ads-management':
        return <AdsShowcase showViewAll={false} className="mb-0" />;

      case 'social-media':
      case 'social-media-management':
        return <SocialMediaShowcase showViewAll={false} className="mb-0" />;

      case 'video-editing':
      case 'photo-video-editing':
        return (
          <>
            <CreativeShowcase showViewAll={false} className="mb-8" />
            <VideoShowcase showViewAll={false} className="mb-0" />
          </>
        );

      case 'website-development':
      default:
        return <WebsiteShowcase showViewAll={false} className="mb-0" />;
    }
  };

  return (
    <section className="py-6 bg-white border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-widest border border-yellow-300 mb-3">
            SERVICE SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {data.bestWorkTitle || "Real Work We've Built"}
          </h2>
        </div>

        {/* Render Service Showcase Component with showViewAll={false} */}
        {renderServiceShowcase()}
      </div>
    </section>
  );
};

export default ServiceBestWork;
