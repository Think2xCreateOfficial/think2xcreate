// Route constants for type safety and maintainability
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
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
    title: 'Home | Your Company Name',
    description: 'Welcome to our company - providing exceptional services',
    canonical: 'https://yourdomain.com',
    keywords: 'home, company, services'
  },
//   [ROUTES.ABOUT]: {
//     title: 'About Us | Your Company Name',
//     description: 'Learn about our company, mission, and values',
//     canonical: 'https://yourdomain.com/about',
//     keywords: 'about, company, mission'
//   },
//   [ROUTES.SERVICES]: {
//     title: 'Our Services | Your Company Name',
//     description: 'Explore our comprehensive range of services',
//     canonical: 'https://yourdomain.com/services',
//     keywords: 'services, solutions, offerings'
//   },
//   [ROUTES.CONTACT]: {
//     title: 'Contact Us | Your Company Name',
//     description: 'Get in touch with our team for inquiries',
//     canonical: 'https://yourdomain.com/contact',
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