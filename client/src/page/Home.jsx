import HeroSection from '../component/home/HeroSection';
import BusinessAuditSection from '../component/home/BusinessAuditSection';
import ServiceSection from '../component/home/ServiceSection';
import WhyChooseUsSection from '../component/home/WhyChooseUsSection';
import PortfolioSection from '../component/home/PortfolioSection';
import BudgetCalculatorSection from '../component/home/BudgetCalculatorSection';
import TestimonialSection from '../component/home/TestimonialSection';
import LeadformSection from '../component/home/LeadformSection';
import CtaSection from '../component/home/CtaSection';
import SEO from '../component/common/SEO';

function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <BusinessAuditSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <BudgetCalculatorSection />
      {/* <TestimonialSection /> */}
      <LeadformSection />
      <CtaSection />
    </>
  )
}

export default Home