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

// Route metadata for SEO and navigation
export const routeMetadata = {
  [ROUTES.HOME]: {
    title: 'Digital Marketing Agency in Tirunelveli | Think2xCreate',
    description:
      'Think2xCreate helps businesses grow with Meta Ads, website development, and photo/video production services in Tirunelveli and across Tamil Nadu.',
    canonical: 'https://think2xcreate.com',
    keywords:
      // === PRIMARY KEYWORDS (Homepage + Service Pages) ===
      'Website Design Company in Tirunelveli, Web Design Company in Tirunelveli, ' +
      'SEO Company in Tirunelveli, Best Digital Marketing Company in Tirunelveli, ' +
      'Digital Marketing Company in Tirunelveli, Website Development Company in Tirunelveli, ' +
      'Best Web Designer in Tirunelveli, Best SEO Agency in Tirunelveli, ' +
      'Ecommerce Website Development Tirunelveli, Responsive Website Design Tirunelveli, ' +
      'Professional Website Designer Tirunelveli, ' +
      // === AI SEARCH OPTIMIZED KEYWORDS (ChatGPT / Gemini / Perplexity) ===
      'Best Website Design Company in Tirunelveli, Affordable SEO Services in Tirunelveli, ' +
      'Top Digital Marketing Agency in Tirunelveli, SEO Friendly Website Development Tamil Nadu, ' +
      'AI SEO Company in Tirunelveli, Local Business Website Expert Tirunelveli, ' +
      'Small Business Website Design Tamil Nadu, Lead Generation Company Tirunelveli, ' +
      'Google Ranking Expert Tirunelveli, AI Optimized Website Development, ' +
      // === LOCAL SEO – PATTAMADAI & PMD ===
      'Website Designer in Pattamadai, SEO Services in Pattamadai, ' +
      'Digital Marketing Agency Pattamadai, Website Development Pattamadai, Business Website Pattamadai, ' +
      'Website Design Company in PMD, Web Designer in PMD, SEO Expert PMD, ' +
      'Local SEO Services PMD, Website Development PMD'
  },
  [ROUTES.CASE_STUDY]: {
    title: 'Case Studies | Think2xCreate – Real Results for Real Businesses',
    description:
      'Explore real case studies from Think2xCreate – the top digital marketing agency in Tirunelveli. See how we drove lead generation, Google ranking, and ecommerce growth for local Tamil Nadu businesses.',
    canonical: 'https://think2xcreate.com/case-studies',
    keywords:
      'digital marketing case study Tirunelveli, SEO results Tamil Nadu, lead generation case study, ' +
      'website development results, Think2xCreate portfolio'
  }
};

// Route configurations for lazy loading
export const routeConfig = {
  [ROUTES.HOME]: {
    component: () => import('../page/Home'),
    preload: false
  },
  [ROUTES.CASE_STUDY]: {
    component: () => import('../page/CaseStudyPage'),
    preload: false
  },
//   [ROUTES.ABOUT]: {
//     component: () => import('../pages/About'),
//     preload: true
//   },
//   [ROUTES.SERVICES]: {
//     component: () => import('../pages/Services'),
//     preload: true
//   },
//   [ROUTES.CONTACT]: {
//     component: () => import('../pages/Contact'),
//     preload: false
//   }
};