import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Organization, LocalBusiness, Person, Service, WithContext } from 'schema-dts';

type StructuredDataType = 
  | WithContext<Organization>
  | WithContext<LocalBusiness>
  | WithContext<Person>
  | WithContext<Service>
  | WithContext<Record<string, unknown>>;

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  canonical?: string;
  structuredData?: StructuredDataType | StructuredDataType[];
  keywords?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: 'website' | 'article' | 'profile';
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
  keywords,
  author,
  noindex = false,
  nofollow = false,
  type = 'website',
}: SEOProps) {
  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();
  
  // If no title provided, use a default one
  const pageTitle = title || t('seo.defaultTitle', 'Pietrobon & Michel | Dental Technology Zurich');
  
  // If no description provided, use a default one
  const pageDescription = description || t('seo.defaultDescription', 'Excellence in dental artistry since 1998. Premium dental technology services in Zurich, Switzerland.');
  
  // Construct the canonical URL
  const currentLang = i18n.language;
  
  // Determine if we're on a language-specific route (for backward compatibility)
  const pathParts = pathname.split('/').filter(Boolean);
  const firstPathPart = pathParts[0];
  const isLanguageRoute = ['en', 'de', 'it', 'ru'].includes(firstPathPart);
  
  // Create canonical URL - always use base pathname without language prefix
  const pathWithoutLang = isLanguageRoute ? `/${pathParts.slice(1).join('/')}` : pathname;
  // For homepage, ensure canonical is exactly the base URL
  const canonicalPath = pathWithoutLang === '/' ? '' : pathWithoutLang;
  const canonicalUrl = canonical || `${baseUrl}${canonicalPath}`;
  
  // Create alternate language URLs for hreflang tags
  // Since site uses i18n without language routes, all alternates point to same URL
  const currentUrl = `${baseUrl}${canonicalPath}`;
  const alternateUrls = {
    en: currentUrl,
    de: currentUrl,
    it: currentUrl,
    ru: currentUrl,
  };
  
  // Default structured data - LocalBusiness (more specific than Organization for SEO)
  const defaultLocalBusiness: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#organization`,
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
      addressRegion: 'ZH',
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
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    sameAs: [
      'https://www.facebook.com/pietrobonundmichel',
      'https://www.instagram.com/pietrobonundmichel',
    ],
  };

  // Default Organization structured data (for broader context)
  const defaultOrganization: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization`,
    name: 'Pietrobon & Michel',
    legalName: 'Pietrobon & Michel Dental Technology',
    description: pageDescription,
    url: canonicalUrl,
    logo: `${baseUrl}/logo.png`,
    image: image,
    foundingDate: '1998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bahnhofstrasse 35',
      addressLocality: 'Zürich',
      postalCode: '8001',
      addressCountry: 'CH',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41-44-222-05-65',
      contactType: 'Customer Service',
      areaServed: 'CH',
      availableLanguage: ['en', 'de', 'it', 'ru'],
    },
    sameAs: [
      'https://www.facebook.com/pietrobonundmichel',
      'https://www.instagram.com/pietrobonundmichel',
    ],
  };
  
  // Use provided structured data or default to LocalBusiness + Organization
  let finalStructuredData: StructuredDataType | StructuredDataType[];
  if (structuredData) {
    finalStructuredData = structuredData;
  } else {
    // Default: provide both LocalBusiness and Organization for better SEO
    finalStructuredData = [defaultLocalBusiness, defaultOrganization];
  }

  // Ensure structured data is always an array for rendering
  const structuredDataArray = Array.isArray(finalStructuredData) 
    ? finalStructuredData 
    : [finalStructuredData];

  // Build robots meta content
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1c4c84" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags for language alternatives */}
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.en} />
      <link rel="alternate" hrefLang={currentLang} href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="de" href={alternateUrls.de} />
      <link rel="alternate" hrefLang="it" href={alternateUrls.it} />
      <link rel="alternate" hrefLang="ru" href={alternateUrls.ru} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type === 'article' ? 'article' : type === 'profile' ? 'profile' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Pietrobon & Michel - Dental Technology Laboratory" />
      <meta property="og:site_name" content="Pietrobon & Michel" />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : currentLang === 'de' ? 'de_CH' : currentLang === 'it' ? 'it_CH' : 'ru_RU'} />
      {type === 'article' && article && (
        <>
          <meta property="article:published_time" content={new Date().toISOString()} />
          <meta property="article:author" content="Pietrobon & Michel" />
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Pietrobon & Michel - Dental Technology Laboratory" />
      <meta name="twitter:site" content="@pietrobonmichel" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="CH-ZH" />
      <meta name="geo.placename" content="Zürich" />
      <meta name="geo.position" content="47.3769;8.5417" />
      <meta name="ICBM" content="47.3769, 8.5417" />
      
      {/* Structured Data - Multiple schemas supported */}
      {structuredDataArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
} 