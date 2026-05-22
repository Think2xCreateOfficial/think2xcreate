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
      'digital marketing agency Tirunelveli, Meta ads Tamil Nadu, website development Tirunelveli, product photoshoot Tamil Nadu'
  },
//   [ROUTES.ABOUT]: {
//     title: 'About Us | Your Company Name',
//     description: 'Learn about our company, mission, and values',
//     canonical: 'https://think2xcreate.com/about',
//     keywords: 'about, company, mission'
//   },
//   [ROUTES.SERVICES]: {
//     title: 'Our Services | Your Company Name',
//     description: 'Explore our comprehensive range of services',
//     canonical: 'https://think2xcreate.com/services',
//     keywords: 'services, solutions, offerings'
//   },
//   [ROUTES.CONTACT]: {
//     title: 'Contact Us | Your Company Name',
//     description: 'Get in touch with our team for inquiries',
//     canonical: 'https://think2xcreate.com/contact',
//     keywords: 'contact, support, inquiries'
//   }
};

// Route configurations for lazy loading
export const routeConfig = {
  [ROUTES.HOME]: {
    component: () => import('../page/Home'),
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