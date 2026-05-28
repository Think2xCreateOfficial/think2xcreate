import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getMetadata, ROUTES } from '../../config/routes.config';

function SEO({ customMetadata, dynamicData }) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Get metadata based on route pattern matching
  let matchedRoute = ROUTES.HOME;
  
  if (currentPath.startsWith('/case-studies/')) {
    matchedRoute = ROUTES.CASE_STUDY;
  } else if (currentPath.startsWith('/services/')) {
    matchedRoute = ROUTES.SERVICE_DETAIL;
  } else if (currentPath === '/privacy-policy') {
    matchedRoute = ROUTES.PRIVACY_POLICY;
  } else if (currentPath === '/terms') {
    matchedRoute = ROUTES.TERMS;
  } else if (currentPath === '/') {
    matchedRoute = ROUTES.HOME;
  }
  
  const metadata = customMetadata || getMetadata(matchedRoute, dynamicData);
  const canonicalUrl = metadata.canonical || `https://think2xcreate.com${currentPath}`;
  
  // Base Schema.org JSON-LD
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Think2xCreate",
    "url": "https://think2xcreate.com",
    "logo": "https://think2xcreate.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/think2xcreate",
      "https://www.facebook.com/think2xcreate"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7825962962",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Tamil"]
    }
  };
  
  const schemaOrgJSONLD = [baseSchema];
  
  // Add article schema for case studies
  if (metadata.type === 'article' && dynamicData?.brand) {
    schemaOrgJSONLD.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": metadata.title,
      "description": metadata.description,
      "image": metadata.image || dynamicData.brand.backgroundImage,
      "author": {
        "@type": "Organization",
        "name": "Think2xCreate"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Think2xCreate",
        "logo": {
          "@type": "ImageObject",
          "url": "https://think2xcreate.com/logo.png"
        }
      },
      "datePublished": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      }
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