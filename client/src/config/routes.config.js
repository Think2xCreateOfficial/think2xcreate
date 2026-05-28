import { lazy } from 'react';

// Route constants for type safety and maintainability
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  SERVICE_DETAIL: '/services/:serviceId',
  CONTACT: '/contact',
  BLOG: '/blog',
  FAQ: '/faq',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS: '/terms',
  CASE_STUDY: '/case-studies/:slug',
  NOT_FOUND: '*'
};

// Centralized SEO metadata configuration
export const routeMetadata = {
  [ROUTES.HOME]: {
    title: 'Digital Marketing Agency in Tirunelveli | Think2xCreate',
    description: 'Think2xCreate helps businesses grow with Meta Ads, website development, and photo/video production services in Tirunelveli and across Tamil Nadu.',
    canonical: 'https://think2xcreate.com',
    keywords: 'Website Design Company in Tirunelveli, Web Design Company in Tirunelveli, SEO Company in Tirunelveli, Best Digital Marketing Company in Tirunelveli',
    type: 'website',
    image: 'https://think2xcreate.com/og-image.jpg'
  },
  [ROUTES.PRIVACY_POLICY]: {
    title: 'Privacy Policy | Think2xCreate – Digital Marketing Agency in Tirunelveli',
    description: 'Read our privacy policy to understand how Think2xCreate collects, uses, and protects your personal information when you use our digital marketing services in Tamil Nadu.',
    canonical: 'https://think2xcreate.com/privacy-policy',
    keywords: 'privacy policy, data protection, digital marketing privacy, Think2xCreate',
    type: 'legal'
  },
  [ROUTES.TERMS]: {
    title: 'Terms & Conditions | Think2xCreate – Digital Marketing Agency in Tirunelveli',
    description: 'Review the terms and conditions for using Think2xCreate\'s website and digital marketing services in Tirunelveli, Tamil Nadu.',
    canonical: 'https://think2xcreate.com/terms',
    keywords: 'terms and conditions, terms of service, digital marketing terms, Think2xCreate',
    type: 'legal'
  },
  [ROUTES.CASE_STUDY]: {
    title: 'Case Studies | Think2xCreate – Real Results for Real Businesses',
    description: 'Explore real case studies from Think2xCreate – the top digital marketing agency in Tirunelveli. See how we drove lead generation, Google ranking, and ecommerce growth.',
    canonical: 'https://think2xcreate.com/case-studies',
    keywords: 'digital marketing case study Tirunelveli, SEO results Tamil Nadu, lead generation case study',
    type: 'article'
  },
  [ROUTES.SERVICE_DETAIL]: {
    title: 'Premium Digital Marketing Services | Think2xCreate',
    description: 'Discover our premium digital marketing and development services. We help businesses in Tirunelveli and Tamil Nadu achieve 2x growth.',
    canonical: 'https://think2xcreate.com/services',
    keywords: 'digital marketing services, website development, SEO services, Meta Ads',
    type: 'service'
  },
  [ROUTES.NOT_FOUND]: {
    title: '404 - Page Not Found | Think2xCreate',
    description: 'The page you are looking for could not be found. Explore our digital marketing services in Tirunelveli, Tamil Nadu.',
    canonical: 'https://think2xcreate.com',
    type: 'website'
  }
};

// Get metadata with dynamic overrides
export const getMetadata = (path, dynamicData = null) => {
  const baseMetadata = routeMetadata[path] || routeMetadata[ROUTES.HOME];
  
  // Handle dynamic case study metadata
  if (path === ROUTES.CASE_STUDY && dynamicData?.brand) {
    return {
      title: `${dynamicData.brand.brandName} Case Study | Think2xCreate – Digital Marketing Results`,
      description: `Discover how Think2xCreate helped ${dynamicData.brand.brandName} achieve ${dynamicData.brand.metrics[0]?.value || 'exceptional'} growth. Real results from our digital marketing agency in Tirunelveli.`,
      canonical: `https://think2xcreate.com/case-studies/${dynamicData.brand.slug}`,
      keywords: `${dynamicData.brand.brandName} case study, digital marketing results, SEO success story`,
      type: 'article',
      image: dynamicData.brand.backgroundImage
    };
  }
  
  // Handle dynamic service metadata
  if (path === ROUTES.SERVICE_DETAIL && dynamicData?.service) {
    return {
      title: dynamicData.service.seo?.title || `${dynamicData.service.title} | Think2xCreate – Premium Digital Agency`,
      description: dynamicData.service.seo?.description || dynamicData.service.description,
      canonical: `https://think2xcreate.com/services/${dynamicData.service.id}`,
      keywords: dynamicData.service.seo?.keywords || dynamicData.service.keywords,
      type: 'service'
    };
  }
  
  return baseMetadata;
};

// Lazy load configurations
export const routeConfig = {
  [ROUTES.HOME]: {
    component: () => import('../page/Home'),
    preload: true
  },
  [ROUTES.CASE_STUDY]: {
    component: () => import('../page/CaseStudyPage'),
    preload: false
  },
  [ROUTES.SERVICE_DETAIL]: {
    component: () => import('../page/ServicePage'),
    preload: false
  },
  [ROUTES.PRIVACY_POLICY]: {
    component: () => import('../page/PrivacyPolicyPage'),
    preload: false
  },
  [ROUTES.TERMS]: {
    component: () => import('../page/TermsPage'),
    preload: false
  },
  [ROUTES.NOT_FOUND]: {
    component: () => import('../page/NotFoundPage'),
    preload: false
  }
};