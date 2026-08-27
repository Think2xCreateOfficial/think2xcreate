import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { serviceData } from '../utils/constant/serviceData';

import ServiceHero from '../component/services/ServiceHero';
import ServiceBestWork from '../component/services/ServiceBestWork';
import ServiceWorkflow from '../component/services/ServiceWorkflow';
import ServiceTools from '../component/services/ServiceTools';
import ServiceFAQ from '../component/services/ServiceFAQ';
import ServiceNavigation from '../component/services/ServiceNavigation';
import CtaSection from '../component/home/CtaSection';
import Loader from '../component/common/Loader';
import { AnimatePresence } from 'framer-motion';

// Alias key map for full URL flexibility
const ALIAS_MAP = {
  'meta-ads-management': 'meta-ads',
  'social-media-management': 'social-media',
  'photo-video-editing': 'video-editing',
};

/**
 * Reusable Service Detail Page Component (Reference C)
 * Powers all 4 service routes:
 * 1. /services/website-development
 * 2. /services/meta-ads-management
 * 3. /services/social-media-management
 * 4. /services/photo-video-editing
 */
export const ServicePage = () => {
  const { serviceId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadServiceData = () => {
      try {
        if (!isMounted) return;

        const targetKey = ALIAS_MAP[serviceId] || serviceId;
        const item = serviceData[targetKey] || serviceData[serviceId];

        if (item) {
          setData(item);
          setError(null);
        } else {
          setError('Service not found');
        }
      } catch (err) {
        console.error('Error loading service data:', err);
        setError('Failed to load service data');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    setIsLoading(true);
    setData(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'instant' });

    loadServiceData();

    return () => {
      isMounted = false;
    };
  }, [serviceId]);

  if (isLoading) {
    return <Loader fullScreen={false} />;
  }

  if (error || !data) {
    return <Navigate to="/" replace />;
  }

  const pageTitle = data?.seo?.title || `${data?.title} | Premium Digital Agency | Think2xCreate`;
  const pageDescription = data?.seo?.description || data?.description;
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
      </Helmet>

      <AnimatePresence mode="wait">
        <motion.div
          key={serviceId}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Service Hero */}
          <ServiceHero data={data} />

          {/* Best Work Project Cards */}
          <ServiceBestWork data={data} />

          {/* 6-Step Workflow */}
          <ServiceWorkflow data={data} />

          {/* Tech Stack & Tools */}
          {/* <ServiceTools data={data} /> */}

          {/* Business FAQs Accordion & Contact Highlight Card */}
          <ServiceFAQ data={data} />

          {/* Previous / Next Service Navigation Strip */}
          <ServiceNavigation currentServiceId={serviceId} />

          {/* CTA Banner */}
          <CtaSection />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicePage;