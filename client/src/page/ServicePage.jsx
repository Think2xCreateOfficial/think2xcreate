// src/page/ServicePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { serviceData } from '../utils/constant/serviceData';
import { ServiceHero } from '../component/services/ServiceHero';
import { ServiceProcess } from '../component/services/ServiceProcess';
import { ServiceTools } from '../component/services/ServiceTools';
import { ProofShowcase } from '../component/services/ProofShowcase';
import { VideoProof } from '../component/services/VideoProof';
import LeadformSection from "../component/home/LeadformSection";
import Cta from '../component/home/CtaSection';
import Loader from '../component/common/Loader';
import { motion, AnimatePresence } from 'framer-motion';

export const ServicePage = () => {
  const { serviceId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadServiceData = async () => {
      try {
        // Simulate minimum loading time for smooth transition
        await new Promise(resolve => setTimeout(resolve, 300));
        
        if (!isMounted) return;
        
        const serviceDataItem = serviceId ? serviceData[serviceId] : null;
        
        if (serviceDataItem) {
          setData(serviceDataItem);
          setError(null);
        } else {
          setError('Service not found');
        }
      } catch (err) {
        console.error('Error loading service data:', err);
        setError('Failed to load service data');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    
    // Reset states when serviceId changes
    setIsLoading(true);
    setData(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    loadServiceData();
    
    return () => {
      isMounted = false;
    };
  }, [serviceId]);

  // Handle loading state - Single loader for entire page
  if (isLoading) {
    return (
      <div className='min-h-screen'>
        <Loader fullScreen={true} />
      </div>
    );
  }

  // Handle error or missing data
  if (error || !data) {
    return <Navigate to="/" replace />;
  }

  // Safely construct dynamic SEO metadata
  const pageTitle = data?.seo?.title || `${data?.title || 'Service'} | Premium Digital Agency | Think2xCreate`;
  const pageDescription = data?.seo?.description || data?.description || 'Premium high-converting digital marketing and development services in Tamil Nadu.';
  const canonicalUrl = `https://think2xcreate.com/services/${serviceId}`;

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-yellow-200 selection:text-gray-900 overflow-x-hidden">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Think2xCreate" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <AnimatePresence mode="wait">
        <motion.div
          key={serviceId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Ambient Background Glows */}
          <div className="relative">
            <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] bg-yellow-200/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] bg-yellow-100/30 rounded-full blur-[100px] pointer-events-none -z-10" />
            
            <ServiceHero data={data} />
            <ServiceProcess data={data} />
            <ServiceTools data={data} />
            <ProofShowcase data={data} />
            <VideoProof data={data} />
            <LeadformSection />
            <Cta />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicePage;