import { Helmet } from 'react-helmet-async'
import { useLocation } from "react-router-dom"
import { routeMetadata } from "../../config/routes.config"

function SEO({ customMetadata }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Get metadata for current route or use default
  const metadata = customMetadata || routeMetadata[currentPath] || {
    title: 'Think2xCreate | Digital Marketing Agency in Tirunelveli',
    description: 'We help businesses grow with Meta Ads, website development, and creative content in Tamil Nadu.',
    canonical: `https://think2xcreate.com${currentPath}`
  };

  const canonicalUrl = metadata.canonical || `https://think2xcreate.com${currentPath}`;

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.keywords && <meta name="keywords" content={metadata.keywords} />}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

export default SEO