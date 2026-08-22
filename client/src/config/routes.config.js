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
  OUR_WORK: '/our-work',
  NOT_FOUND: '*'
};

// Centralized SEO metadata configuration
export const routeMetadata = {
  [ROUTES.HOME]: {
    title: 'Digital Marketing Agency in Tirunelveli | Think2xCreate',
    description: 'Think2xCreate helps Tamil Nadu businesses grow with Meta Ads, web development, SEO, and video editing in Tirunelveli and Tamil Nadu.',
    canonical: 'https://think2xcreate.com',
    keywords: 'Digital Marketing Agency in Tirunelveli, Website Development in Tirunelveli, SEO Agency in Tirunelveli, Meta Ads Tirunelveli',
    type: 'website',
    image: 'https://think2xcreate.com/og-image.jpg'
  },
  [ROUTES.PRIVACY_POLICY]: {
    title: 'Privacy Policy | Think2xCreate – Digital Marketing Agency in Tirunelveli',
    description: 'Read our privacy policy to understand how Think2xCreate collects, uses, and protects your personal information when you use our services.',
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
  [ROUTES.OUR_WORK]: {
    title: 'Our Works | Think2xCreate – Real Projects, Real Results in Tirunelveli',
    description: 'Explore our portfolio of completed projects. See how Think2xCreate drives business growth with web development, Meta ads, and social media marketing in Tirunelveli.',
    canonical: 'https://think2xcreate.com/our-work',
    keywords: 'Think2xCreate portfolio, digital marketing agency work, website development examples, SEO client results',
    type: 'website'
  },
  [ROUTES.SERVICE_DETAIL]: {
    title: 'Premium Digital Marketing Services | Think2xCreate',
    description: 'Discover our premium digital marketing and development services. We help businesses in Tirunelveli and Tamil Nadu achieve 2x growth.',
    canonical: 'https://think2xcreate.com/services',
    keywords: 'digital marketing services, website development, SEO services, Meta Ads',
    type: 'service'
  },
  [ROUTES.CONTACT]: {
    title: 'Contact Think2xCreate | Digital Marketing Agency in Tirunelveli',
    description: 'Contact Think2xCreate digital marketing agency in Tirunelveli, Tamil Nadu. Book a free growth consultation for website development, Meta Ads, SEO, and video marketing.',
    canonical: 'https://think2xcreate.com/contact',
    keywords: 'contact Think2xCreate, digital marketing agency Tirunelveli contact, web development quote Tirunelveli',
    type: 'website'
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
  
  // Handle dynamic service metadata
  if (path === ROUTES.SERVICE_DETAIL && dynamicData?.service) {
    return {
      title: dynamicData.service.seo?.title || `${dynamicData.service.title} | Think2xCreate – Premium Digital Agency in Tirunelveli`,
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
  [ROUTES.OUR_WORK]: {
    component: () => import('../page/OurWorkPage'),
    preload: false
  },
  [ROUTES.SERVICE_DETAIL]: {
    component: () => import('../page/ServicePage'),
    preload: false
  },
  [ROUTES.CONTACT]: {
    component: () => import('../page/ContactPage'),
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