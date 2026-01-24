import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Organization, WithContext } from 'schema-dts';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  canonical?: string;
  structuredData?: any;
}

const baseUrl = 'https://pietrobonundmichel.ch';
const defaultImage = `${baseUrl}/pundm-og.png`;

export function SEO({
  title,
  description,
  image = defaultImage,
  article = false,
  canonical,
  structuredData,
}: SEOProps) {
  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();
  
  // If no title provided, use a default one
  const pageTitle = title || t('seo.defaultTitle', 'Pietrobon & Michel | Dental Technology Zurich');
  
  // If no description provided, use a default one
  const pageDescription = description || t('seo.defaultDescription', 'Excellence in dental artistry since 1998. Premium dental technology services in Zurich, Switzerland.');
  
  // Construct the canonical URL
  const currentLang = i18n.language;
  
  // Determine if we're on a language-specific route
  const pathParts = pathname.split('/').filter(Boolean);
  const firstPathPart = pathParts[0];
  const isLanguageRoute = ['en', 'de', 'it', 'ru'].includes(firstPathPart);
  
  // Create canonical and alternate URLs
  const pathWithoutLang = isLanguageRoute ? `/${pathParts.slice(1).join('/')}` : pathname;
  const canonicalUrl = canonical || `${baseUrl}${isLanguageRoute ? pathWithoutLang : pathname}`;
  
  // Create alternate language URLs for hreflang tags
  const alternateUrls = {
    en: `${baseUrl}/en${pathWithoutLang}`,
    de: `${baseUrl}/de${pathWithoutLang}`,
    it: `${baseUrl}/it${pathWithoutLang}`,
    ru: `${baseUrl}/ru${pathWithoutLang}`,
  };
  
  // Default structured data for dental organization
  const defaultStructuredData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pietrobon & Michel',
    description: pageDescription,
    url: canonicalUrl,
    logo: `${baseUrl}/logo.png`,
    image: image,
    telephone: '+41 44 222 05 65',
    email: 'lab@pietrobonandmichel.ch',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bahnhofstrasse 35',
      addressLocality: 'Zürich',
      postalCode: '8001',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.3769,
      longitude: 8.5417,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/pietrobonundmichel',
      'https://www.instagram.com/pietrobonundmichel',
    ],
  };
  
  // Use provided structured data or default
  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags for language alternatives */}
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="de" href={alternateUrls.de} />
      <link rel="alternate" hrefLang="it" href={alternateUrls.it} />
      <link rel="alternate" hrefLang="ru" href={alternateUrls.ru} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Pietrobon & Michel - Dental Technology Laboratory" />
      <meta property="og:site_name" content="Pietrobon & Michel" />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : currentLang === 'de' ? 'de_CH' : currentLang === 'it' ? 'it_CH' : 'ru_RU'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Pietrobon & Michel - Dental Technology Laboratory" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
} 