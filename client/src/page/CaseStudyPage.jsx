import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../component/common/SEO';
import { brands } from '../utils/data/brandShowcaseData';
import CaseStudyHero from '../component/case-study/CaseStudyHero';
import ServiceTabs from '../component/case-study/ServiceTabs';
import GrowthMetrics from '../component/case-study/GrowthMetrics';
import Leadform from '../component/home/leadform/Leadform';
import CtaSection from '../component/home/CtaSection';
import Loader from '../component/common/Loader';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const foundBrand = brands.find((b) => b.slug === slug);
    if (foundBrand) {
      setBrand(foundBrand);
    } else {
      navigate('/', { replace: true }); // Redirect to home instead of 404
    }
  }, [slug, navigate]);

  if (!brand) return <Loader fullScreen={true} />;

  return (
    <div className="min-h-screen">
      <SEO 
        dynamicData={{ 
          brand: brand,
          type: 'case-study'
        }} 
      />
      <CaseStudyHero brand={brand} />
      <ServiceTabs brand={brand} />
      <GrowthMetrics brand={brand} />
      <Leadform />
      <CtaSection />
    </div>
  );
};

export default CaseStudyPage;