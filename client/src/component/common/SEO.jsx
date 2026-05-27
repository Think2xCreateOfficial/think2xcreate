import { Helmet } from 'react-helmet-async'
import { useLocation } from "react-router-dom"
import { routeMetadata } from "../../config/routes.config"

function SEO({ customMetadata }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Get metadata for current route or use default
  const metadata = customMetadata || routeMetadata[currentPath] || {
    title: 'Think2xCreate | Digital Marketing Agency in Tirunelveli & Tamil Nadu',
    description: 'Think2xCreate is a top digital marketing agency in Tirunelveli offering Meta Ads, website development, SEO, and photo/video to help businesses grow in Tamil Nadu.',
    canonical: `https://think2xcreate.com${currentPath}`,
    type: 'website'
  };

  const canonicalUrl = metadata.canonical || `https://think2xcreate.com${currentPath}`;

  // ── Structured Data (JSON-LD) – AEO + Google Rich Results ────────────────
  const schemaOrgJSONLD = [
    // 1. Organisation – global entity for brand recognition
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Think2xCreate",
      "alternateName": "T2xC",
      "url": "https://think2xcreate.com/",
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
    },

    // 2. LocalBusiness – critical for Google Maps, Local Pack & AI engines
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "name": "Think2xCreate – Best Website Design Company in Tirunelveli",
      "image": "https://think2xcreate.com/og-image.jpg",
      "url": "https://think2xcreate.com/",
      "telephone": "+91-7825962962",
      "priceRange": "₹₹",
      "description": "Think2xCreate is the best website design company in Tirunelveli offering affordable SEO services, lead generation, ecommerce website development, and digital marketing for small businesses across Tamil Nadu.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pattamadai",
        "addressLocality": "Tirunelveli",
        "addressRegion": "Tamil Nadu",
        "postalCode": "627401",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 8.7139,
        "longitude": 77.7567
      },
      "areaServed": [
        { "@type": "City", "name": "Tirunelveli" },
        { "@type": "City", "name": "Pattamadai" },
        { "@type": "AdministrativeArea", "name": "Tamil Nadu" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design in Tirunelveli" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Tirunelveli" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Generation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ecommerce Website Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } }
        ]
      }
    },

    // 3. WebSite – enables Google Sitelinks Search Box
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://think2xcreate.com/",
      "name": "Think2xCreate",
      "description": "Best Website Design Company in Tirunelveli & Digital Marketing Agency in Tamil Nadu"
    },

    // 4. FAQPage – parsed by ChatGPT / Gemini / Perplexity for direct answers
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best website design company in Tirunelveli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Think2xCreate is the best website design company in Tirunelveli, offering responsive web design, ecommerce development, and SEO-friendly websites for local businesses in Tamil Nadu."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the top digital marketing agency in Tirunelveli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Think2xCreate is the top digital marketing agency in Tirunelveli. We provide Meta Ads, Google Ads, SEO, lead generation, and social media marketing services."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an affordable SEO company in Tirunelveli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Think2xCreate offers affordable SEO services in Tirunelveli tailored for small and local businesses in Tamil Nadu. Contact us at +91-7825962962."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer website design services in Pattamadai and PMD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Think2xCreate provides website design, SEO, and digital marketing services in Pattamadai and PMD areas of Tirunelveli district, Tamil Nadu."
          }
        },
        {
          "@type": "Question",
          "name": "Which company provides lead generation services in Tirunelveli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Think2xCreate is the leading lead generation company in Tirunelveli. We use Meta Ads, SEO, and high-converting landing pages to generate quality leads for your business."
          }
        }
      ]
    }
  ];

  if (metadata.schema) {
    schemaOrgJSONLD.push(metadata.schema);
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
      <meta property="og:image" content="https://think2xcreate.com/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content="https://think2xcreate.com/og-image.jpg" />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

export default SEO