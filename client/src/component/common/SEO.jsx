import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getMetadata, ROUTES } from '../../config/routes.config';

function SEO({ customMetadata, dynamicData }) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Get metadata based on route pattern matching
  let matchedRoute = ROUTES.HOME;
  
  if (currentPath.startsWith('/services/')) {
    matchedRoute = ROUTES.SERVICE_DETAIL;
  } else if (currentPath === '/contact') {
    matchedRoute = ROUTES.CONTACT;
  } else if (currentPath === '/our-work') {
    matchedRoute = ROUTES.OUR_WORK;
  } else if (currentPath === '/privacy-policy') {
    matchedRoute = ROUTES.PRIVACY_POLICY;
  } else if (currentPath === '/terms') {
    matchedRoute = ROUTES.TERMS;
  } else if (currentPath === '/') {
    matchedRoute = ROUTES.HOME;
  }
  
  const metadata = customMetadata || getMetadata(matchedRoute, dynamicData);
  const canonicalUrl = metadata.canonical || `https://think2xcreate.com${currentPath}`;
  
  // Base Schema.org JSON-LD (ProfessionalService / LocalBusiness for Tirunelveli ranking)
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Think2xCreate",
    "alternateName": "Think2xCreate Digital Marketing Agency Tirunelveli",
    "url": "https://think2xcreate.com",
    "logo": "https://think2xcreate.com/logo-dark.png",
    "image": "https://think2xcreate.com/og-image.jpg",
    "description": "Top digital marketing agency in Tirunelveli specializing in Meta Ads, high-converting website development, SEO, and short-form video editing.",
    "telephone": "+917825962962",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tirunelveli",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.7139,
      "longitude": 77.7567
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/think2xcreate",
      "https://www.facebook.com/think2xcreate"
    ],
    "areaServed": [
      "Tirunelveli",
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Salem",
      "Trichy",
      "Tamil Nadu"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7825962962",
        "contactType": "primary customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-7598895709",
        "contactType": "secondary sales support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil"]
      }
    ]
  };

  const schemaOrgJSONLD = [baseSchema];
  
  // Add ContactPage schema for contact page
  if (currentPath === '/contact') {
    schemaOrgJSONLD.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": metadata.title,
      "description": metadata.description,
      "url": canonicalUrl,
      "mainEntity": baseSchema
    });
  }

  // Add service schema for service pages
  if (metadata.type === 'service' && dynamicData?.service) {
    schemaOrgJSONLD.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": dynamicData.service.title,
      "description": metadata.description,
      "provider": {
        "@type": "Organization",
        "name": "Think2xCreate"
      },
      "areaServed": {
        "@type": "City",
        "name": "Tirunelveli"
      }
    });
  }
  
  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.keywords && <meta name="keywords" content={metadata.keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={metadata.type || "website"} />
      <meta property="og:site_name" content="Think2xCreate" />
      <meta property="og:image" content={metadata.image || "https://think2xcreate.com/og-image.jpg"} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image || "https://think2xcreate.com/og-image.jpg"} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}

export default SEO;