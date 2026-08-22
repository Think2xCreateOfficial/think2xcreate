/**
 * Centralized Contact Page & NAP Business Configuration
 * Single source of truth for office details, form options, map metadata, and FAQs.
 */

export const businessInfo = {
  name: 'Think2xCreate',
  tagline: 'Digital Marketing & Growth Agency',
  phone: '+91 7825962962',
  phoneRaw: '+917825962962',
  secondaryPhone: '+91 7598895709',
  secondaryPhoneRaw: '+917598895709',
  email: 'think2xcreate@gmail.com',
  address: 'Pattamadai, Tirunelveli, Tamil Nadu - 627453',
  city: 'Tirunelveli',
  state: 'Tamil Nadu',
  country: 'India',
  operatingHours: 'Mon - Sat: 9:00 AM - 8:00 PM (IST)',
  whatsappUrl: 'https://wa.me/917825962962?text=Hi%20Think2xCreate%2C%20I%20want%20to%20discuss%20growing%20my%20business.',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2930087789264!2d77.597278!3d8.6636591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5b4d333b1e3c959%3A0x1320b72a2c22ab55!2sThink2xCreate!5e0!3m2!1sen!2sin!4v1786524011320!5m2!1sen!2sin',
  directionsUrl: 'https://maps.google.com/?q=Tirunelveli,+Tamil+Nadu',
  socialLinks: {
    instagram: 'https://www.instagram.com/think2xcreate',
    facebook: 'https://www.facebook.com/think2xcreate'
  }
};

export const businessTypes = [
  'Startup',
  'Small Business',
  'Medium Business',
  'Enterprise',
  'Personal Brand',
  'E-commerce',
  'Other'
];

export const serviceOptions = [
  'Website Development',
  'SEO',
  'Meta Ads',
  'Google Ads',
  'Social Media Management',
  'Poster & Graphic Design',
  'Photo & Video Editing',
  'Content Creation',
  'Other'
];

export const contactFaqs = [
  {
    question: 'What services does Think2xCreate offer in Tirunelveli and Tamil Nadu?',
    answer: 'We provide full-stack digital marketing and growth services including high-converting Website Development, SEO (Search Engine Optimization), Meta Ads (Facebook & Instagram), Google Search Ads, Social Media Management, Poster & Graphic Design, and short-form Reel & Video Editing.'
  },
  {
    question: 'How much does a website development or marketing campaign cost?',
    answer: 'Project costs depend on your specific scope and business goals. We offer transparent pricing packages for small businesses, startups, and growing enterprises with no hidden costs. Contact us for a customized free quote tailored to your target budget.'
  },
  {
    question: 'How long does a typical web development or ad campaign setup take?',
    answer: 'A standard custom website takes 1 to 3 weeks depending on complexity. Meta and Google ad campaigns can be strategy-mapped, built, and launched live within 3 to 5 business days for fast lead generation.'
  },
  {
    question: 'Do you work with businesses outside Tirunelveli?',
    answer: 'Yes! While our agency headquarters is located in Tirunelveli, Tamil Nadu, we work with clients across Chennai, Coimbatore, Madurai, Salem, Trichy, all of India, and international B2B brands.'
  },
  {
    question: 'How do I get started with Think2xCreate?',
    answer: 'Getting started is simple! Fill out the contact form above or reach out via WhatsApp/phone call at +91 7825962962. We will review your business requirements, conduct a free preliminary audit, and schedule a consultation.'
  }
];

export default {
  businessInfo,
  businessTypes,
  serviceOptions,
  contactFaqs
};
