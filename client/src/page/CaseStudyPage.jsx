import { useEffect, useState, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../component/common/SEO';
import { brands } from '../utils/data/brandShowcaseData';
import Loader from '../component/common/Loader';

import CaseStudyHero from '../component/case-study/CaseStudyHero';
import ServiceTabs from '../component/case-study/ServiceTabs';
import GrowthMetrics from '../component/case-study/GrowthMetrics';
import Leadform from '../component/home/leadform/Leadform';
import CtaSection from '../component/home/CtaSection';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [brand, setBrand] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadBrand = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Add minimum delay to prevent flashing
        await new Promise(resolve => setTimeout(resolve, 300));
        
        if (!isMounted) return;
        
        const foundBrand = brands.find((b) => b.slug === slug);
        
        if (foundBrand) {
          setBrand(foundBrand);
        } else {
          setError('Brand not found');
        }
      } catch (err) {
        console.error('Error loading brand:', err);
        setError('Failed to load case study');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    
    loadBrand();
    
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Show loader while loading
  if (isLoading) {
    return (
      <div className='min-h-screen'>
        <Loader fullScreen={true} />
      </div>
    );
  }

  // Handle error or missing data
  if (error || !brand) {
    navigate('/', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen">
      <SEO 
        dynamicData={{ 
          brand: brand,
          type: 'case-study'
        }} 
      />
      <Suspense fallback={<Loader fullScreen={false} />}>
        <CaseStudyHero brand={brand} />
        <ServiceTabs brand={brand} />
        <GrowthMetrics brand={brand} />
        <Leadform />
        <CtaSection />
      </Suspense>
    </div>
  );
};

export default CaseStudyPage;