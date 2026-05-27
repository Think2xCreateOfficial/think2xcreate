import React, { useEffect, useState } from 'react';
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
    // Find the case study data based on the slug
    const foundBrand = brands.find((b) => b.slug === slug);
    if (foundBrand) {
      setBrand(foundBrand);
    } else {
      // Redirect to 404 if not found
      navigate('/404', { replace: true });
    }
  }, [slug, navigate]);

  if (!brand) return <Loader fullScreen={true} />;

  return (
    <div className="min-h-screen">
      <SEO 
        customMetadata={{
          title: `${brand.brandName} Case Study | Think2xCreate`,
          description: `Discover how we helped ${brand.brandName} achieve their goals. ${brand.description || ''}`,
          type: 'article',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${brand.brandName} Case Study`,
            "description": `Discover how we helped ${brand.brandName} achieve their goals. ${brand.description || ''}`,
            "author": {
              "@type": "Organization",
              "name": "Think2xCreate"
            }
          }
        }} 
      />

      <CaseStudyHero brand={brand} />
      
      {/* Optional: Full width showcase image separator */}
      {/* <div className="w-full h-32 md:h-64 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${brand.backgroundImage})` }}>
        <div className="w-full h-full bg-black/40 backdrop-blur-[2px]" />
      </div> */}

      <ServiceTabs brand={brand} />
      <GrowthMetrics brand={brand} />
      <Leadform />
      <CtaSection />
      
    </div>
  );
};

export default CaseStudyPage;
