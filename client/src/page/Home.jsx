import React, { lazy } from 'react';
import HeroSection from '../component/home/HeroSection';
import SEO from '../component/common/SEO';

// Lazy load below-the-fold sections
const BusinessAuditSection = lazy(() => import('../component/home/BusinessAuditSection'));
const ServiceSection = lazy(() => import('../component/home/ServiceSection'));
const WhyChooseUsSection = lazy(() => import('../component/home/WhyChooseUsSection'));
const RecentWorks = lazy(() => import('../component/home/portfolio/RecentWorks'));
const BudgetCalculatorSection = lazy(() => import('../component/home/BudgetCalculatorSection'));
const TestimonialSection = lazy(() => import('../component/home/TestimonialSection'));
const LeadformSection = lazy(() => import('../component/home/LeadformSection'));
const CtaSection = lazy(() => import('../component/home/CtaSection'));

function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <BusinessAuditSection />
      <ServiceSection />
      {/* <WhyChooseUsSection /> */}
      <RecentWorks />
      {/* <BudgetCalculatorSection /> */}
      <TestimonialSection />
      <LeadformSection />
      <CtaSection />
    </>
  )
}

export default Home