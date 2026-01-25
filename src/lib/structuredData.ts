import { LocalBusiness, Person, Service, WithContext } from 'schema-dts';

const baseUrl = 'https://pietrobonundmichel.ch';

/**
 * Creates LocalBusiness structured data for the dental laboratory
 */
export function createLocalBusinessStructuredData(
  description?: string,
  url?: string
): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#organization`,
    name: 'Pietrobon & Michel',
    description: description || 'Excellence in dental artistry since 1998. Premium dental technology services in Zurich, Switzerland.',
    url: url || baseUrl,
    logo: `${baseUrl}/logo.png`,
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
}

/**
 * Creates Person structured data for team member pages
 */
export function createPersonStructuredData(
  name: string,
  jobTitle: string,
  description: string,
  image?: string,
  url?: string
): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    image: image || `${baseUrl}/logo.png`,
    url: url || baseUrl,
    worksFor: {
      '@type': 'Organization',
      name: 'Pietrobon & Michel',
      url: baseUrl,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bahnhofstrasse 35',
      addressLocality: 'Zürich',
      addressRegion: 'ZH',
      postalCode: '8001',
      addressCountry: 'CH',
    },
  };
}

/**
 * Creates Service structured data for service pages
 */
export function createServiceStructuredData(
  name: string,
  description: string,
  serviceType: string,
  url?: string
): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pietrobon & Michel',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bahnhofstrasse 35',
        addressLocality: 'Zürich',
        addressRegion: 'ZH',
        postalCode: '8001',
        addressCountry: 'CH',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    url: url || baseUrl,
  };
}

interface BreadcrumbList {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

interface FAQPage {
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

/**
 * Creates BreadcrumbList structured data for navigation
 */
export function createBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Creates FAQPage structured data
 */
export function createFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
