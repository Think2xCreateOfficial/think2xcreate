import React, { lazy, Suspense } from 'react';
import HeroSection from '../component/home/HeroSection';
import SEO from '../component/common/SEO';

// Minimal Section Skeleton Fallback for smooth streaming below-the-fold load
const SectionSkeleton = ({ height = 'h-64' }) => (
  <div className={`w-full ${height} bg-gray-50/50 animate-pulse my-4 rounded-2xl`} aria-hidden="true" />
);

// Lazy load below-the-fold sections for instant initial FCP / LCP render
const BusinessAuditSection = lazy(() => import('../component/home/BusinessAuditSection'));
const ServiceSection = lazy(() => import('../component/home/ServiceSection'));
const RecentWorks = lazy(() => import('../component/home/portfolio/RecentWorks'));
const TestimonialSection = lazy(() => import('../component/home/TestimonialSection'));
const LeadformSection = lazy(() => import('../component/home/LeadformSection'));
const CtaSection = lazy(() => import('../component/home/CtaSection'));

function Home() {
  return (
    <>
      <SEO />
      {/* HeroSection renders synchronously with zero delay */}
      <HeroSection />
      
      {/* Below-the-fold sections wrapped in independent Suspense boundaries */}
      <Suspense fallback={<SectionSkeleton height="h-80" />}>
        <BusinessAuditSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <ServiceSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <RecentWorks />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-80" />}>
        <TestimonialSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <LeadformSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <CtaSection />
      </Suspense>
    </>
  );
}

export default Home;