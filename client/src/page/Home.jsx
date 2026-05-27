import React, { Suspense, lazy } from 'react';
import HeroSection from '../component/home/HeroSection';
import SEO from '../component/common/SEO';
import SectionLoader from '../component/common/SectionLoader';

// Lazy load below-the-fold sections
const BusinessAuditSection = lazy(() => import('../component/home/BusinessAuditSection'));
const ServiceSection = lazy(() => import('../component/home/ServiceSection'));
const WhyChooseUsSection = lazy(() => import('../component/home/WhyChooseUsSection'));
const BrandShowcase = lazy(() => import('../component/brandshowcase/BrandShowcase'));
const BudgetCalculatorSection = lazy(() => import('../component/home/BudgetCalculatorSection'));
const TestimonialSection = lazy(() => import('../component/home/TestimonialSection'));
const LeadformSection = lazy(() => import('../component/home/LeadformSection'));
const CtaSection = lazy(() => import('../component/home/CtaSection'));

function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <Suspense fallback={<SectionLoader height="min-h-[400px]" />}>
        <BusinessAuditSection />
        <ServiceSection />
        <WhyChooseUsSection />
        <BrandShowcase />
        <BudgetCalculatorSection />
        {/* <TestimonialSection /> */}
        <LeadformSection />
        <CtaSection />
      </Suspense>
    </>
  )
}

export default Home