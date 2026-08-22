import { Phone, Mail, MapPin } from 'lucide-react';

// utils/constant/footerContant.js
export const footerContent = {
  logo: {
    text: "T2XC",
    fullText: "Think2xCreate",
    highlight: "2x",
    subtitle: "",
    href: "/",
    image: "/logo-dark.png"
  },
  description: "Result-driven digital marketing agency serving businesses across Tamil Nadu.",
  links: {
    "Quick Links": [
      { name: "Home", href: "/", isRoute: true },
      { name: "Our Work", href: "/our-work", isRoute: true },
      { name: "Services", href: "/services/website-development", isRoute: true },
      { name: "Contact Us", href: "/contact", isRoute: true }
    ],
    Services: [
      { name: "Website Development", href: "/services/website-development", isRoute: true },
      { name: "Meta Ads Management", href: "/services/meta-ads-management", isRoute: true },
      { name: "Social Media Management", href: "/services/social-media-management", isRoute: true },
      { name: "Photo & Video Editing", href: "/services/photo-video-editing", isRoute: true }
    ],
    Contact: [
      { name: "+91 7825962962", href: "tel:+917825962962", icon: Phone },
      { name: "+91 7598895709", href: "tel:+917598895709", icon: Phone },
      { name: "hello@think2xcreate.com", href: "mailto:hello@think2xcreate.com", icon: Mail },
      { name: "Pattamadai Tirunelveli, Tamil Nadu - 627453", href: "#", icon: MapPin }
    ],
  },
  bottomLinks: [
    { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
    { name: "Terms & Conditions", href: "/terms", isRoute: true }
  ],
  socialLinks: {
    facebook: "https://facebook.com/think2xcreate",
    instagram: "https://instagram.com/think2xcreate",
    linkedin: "https://www.linkedin.com/company/think2xcreate/",
    youtube: "https://youtube.com/@think2xcreate?si=1Ee5QzvBsFhnb348",
    whatsapp: "https://wa.me/917825962962"
  },
  copyright: "© 2026 Think2xCreate. All rights reserved.",
  credit: "Made in Tamil Nadu"
};