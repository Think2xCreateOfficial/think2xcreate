import React, { useState } from 'react';
import { useProjectAutoplay } from '../hooks/useProjectAutoplay';
import WorksHeroOrbit from '../component/works/WorksHeroOrbit';
import PrimaryServiceStickyNav from '../component/works/PrimaryServiceStickyNav';

import WebsiteShowcase from '../component/works/showcase/WebsiteShowcase';
import CreativeShowcase from '../component/works/showcase/CreativeShowcase';
import AdsShowcase from '../component/works/showcase/AdsShowcase';
import VideoShowcase from '../component/works/showcase/VideoShowcase';
import SocialMediaShowcase from '../component/works/showcase/SocialMediaShowcase';

import SEO from '../component/common/SEO';
import CtaSection from '../component/home/CtaSection';

import { CLIENTS_MASTER } from '../utils/data/portfolioData';
import ErrorBoundary from '../component/common/ErrorBoundary';

/**
 * Our Works Showcase Page Component
 *
 * Page Architecture Flow:
 * 1. Navbar
 * 2. Hero — WorksHeroOrbit (100% UNTOUCHED / PRESERVED HERO)
 * 3. SECTION 2 — Section Header ("Work That Speaks for Itself.") & Primary Sticky Service Nav
 * 4. SECTION 3 — Service Portfolio Showcase Renderers:
 *    - 01. WEBSITE DEVELOPMENT
 *    - 02. POSTER & LOGO DESIGN
 *    - 03. META ADS PERFORMANCE REPORTS
 *    - 04. REELS & VIDEO EDITING
 *    - 05. SOCIAL MEDIA MANAGEMENT
 * 5. CTA (CtaSection)
 */
const OurWorkPage = () => {
  const completedProjects = CLIENTS_MASTER;

  const [activeServiceId, setActiveServiceId] = useState('all-showcase');

  // Autoplay hook driving active project hero safely
  const {
    activeIndex,
    setActiveIndex,
    nextProject,
    prevProject,
    pauseAutoplay,
    resumeAutoplay,
  } = useProjectAutoplay(completedProjects.length, 5000, 8000);

  const renderPortfolioSection = () => {
    switch (activeServiceId) {
      case 'website-development':
        return (
          <ErrorBoundary>
            <WebsiteShowcase />
          </ErrorBoundary>
        );
      case 'meta-ads-management':
        return (
          <ErrorBoundary>
            <AdsShowcase />
          </ErrorBoundary>
        );
      case 'social-media-management':
        return (
          <ErrorBoundary>
            <SocialMediaShowcase />
          </ErrorBoundary>
        );
      case 'photo-video-editing':
        return (
          <ErrorBoundary>
            <CreativeShowcase />
            <VideoShowcase />
          </ErrorBoundary>
        );
      case 'all-showcase':
      default:
        return (
          <>
            {/* 01. Website Development Showcase */}
            <ErrorBoundary>
              <WebsiteShowcase />
            </ErrorBoundary>

            {/* 02. Poster Design & Logo Design Showcase (Before Reels/Video) */}
            <ErrorBoundary>
              <CreativeShowcase />
            </ErrorBoundary>

            {/* 03. Meta Ads Performance Reports Showcase */}
            <ErrorBoundary>
              <AdsShowcase />
            </ErrorBoundary>

            {/* 04. Reels & Video Editing Showcase */}
            <ErrorBoundary>
              <VideoShowcase />
            </ErrorBoundary>

            {/* 05. Social Media Management Showcase */}
            <ErrorBoundary>
              <SocialMediaShowcase />
            </ErrorBoundary>
          </>
        );
    }
  };

  return (
    <div
      className="bg-[#FAFAFA] min-h-screen pt-20 sm:pt-24 select-none"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <SEO
        dynamicData={{
          title: 'Our Works | Think2xCreate – Real Projects, Real Results',
          description:
            'Explore our portfolio of completed projects. See how Think2xCreate drives business growth with web development, Meta ads, and social media marketing in Tirunelveli and Tamil Nadu.',
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO — WorksHeroOrbit (100% UNTOUCHED / PRESERVED HERO)
      ════════════════════════════════════════════════════════════════════ */}
      <WorksHeroOrbit
        projects={completedProjects}
        activeIndex={activeIndex}
        onSelectProject={(idx) => setActiveIndex(idx)}
        onPrev={prevProject}
        onNext={nextProject}
      />

      {/* ════════════════════════════════════════════════════════════════════
          2. SECTION 2 — SECTION HEADER & PRIMARY STICKY SERVICE NAVIGATION
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-150 pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest border border-yellow-300 mb-3">
            AGENCY PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-3">
            Work That Speaks for Itself.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            From websites and campaigns to content and performance marketing, explore how we turn digital work into business-ready outcomes.
          </p>
        </div>

        {/* Primary Sticky Service Navigation Tabs */}
        <PrimaryServiceStickyNav
          activeServiceId={activeServiceId}
          onSelectService={setActiveServiceId}
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. SECTION 3 — SERVICE-SPECIFIC PORTFOLIO SHOWCASES
      ════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
        {renderPortfolioSection()}
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. CTA SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <CtaSection />
    </div>
  );
};

export default OurWorkPage;
