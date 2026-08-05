/**
 * Shared schema.org builders.
 *
 * Structured data was previously copy-pasted into several pages, which let the
 * URLs and the rating drift apart. Everything is derived from constants here so
 * there is exactly one definition of the business per site.
 */
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  GEO_LOCATION,
  SOCIAL_LINKS,
} from '@/constants';
import { GOOGLE_BUSINESS, SITE, SITE_URL, absoluteUrl } from '@/lib/site';
import { REVIEW_STATS, hasPublishedReviews } from '@/data/reviews';

/** Stable @id values so the graph nodes reference each other instead of repeating. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const sameAs = [
  SOCIAL_LINKS.INSTAGRAM,
  SOCIAL_LINKS.LINKEDIN,
  SOCIAL_LINKS.TWITTER,
  GOOGLE_BUSINESS.placeUrl,
];

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: '79, Aarudhra Enclave, Athipalayam Rd, Saravanampatti',
  addressLocality: 'Coimbatore',
  addressRegion: CONTACT_INFO.STATE,
  postalCode: CONTACT_INFO.POSTAL_CODE,
  addressCountry: 'IN',
};

const geo = {
  '@type': 'GeoCoordinates',
  latitude: GEO_LOCATION.LATITUDE,
  longitude: GEO_LOCATION.LONGITUDE,
};

/**
 * Only emitted once real reviews exist. Publishing an aggregateRating that no
 * visible review on the page supports is exactly what Google's reviews-snippet
 * guidelines call out, so it stays off until `src/data/reviews.ts` is filled in.
 */
const aggregateRating = hasPublishedReviews
  ? {
      '@type': 'AggregateRating',
      ratingValue: REVIEW_STATS.ratingValue,
      reviewCount: REVIEW_STATS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    }
  : undefined;

const serviceNames = [
  'Doorstep Bicycle Repair',
  'Chain Repair',
  'Brake Tuning',
  'Gear Adjustment',
  'Tyre Replacement',
  'Wheel Truing',
  'E-Bicycle Diagnostics',
  'Periodic Service',
  'Full Overhaul',
  'Bike Cleaning',
  'Emergency On-Road Assistance',
  'Bicycle Rental',
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: SITE.logo,
  },
  image: SITE.ogImage,
  email: CONTACT_INFO.EMAIL,
  telephone: CONTACT_INFO.PHONE.replace(/\s/g, ''),
  description:
    'Professional bicycle services company based in Coimbatore, Tamil Nadu.',
  address: postalAddress,
  founder: [
    { '@type': 'Person', name: 'Guru Moorthy', jobTitle: 'Founder & CEO' },
    { '@type': 'Person', name: 'Hitesh Gupta', jobTitle: 'Co-founder & CTO' },
    {
      '@type': 'Person',
      name: 'Babu Kumaran',
      jobTitle: 'Co-founder & Chief Mechanic Trainer',
    },
  ],
  sameAs,
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BicycleStore',
  '@id': LOCAL_BUSINESS_ID,
  name: SITE.name,
  description:
    'Professional bicycle services at your doorstep. Expert repairs, rentals, and maintenance in Coimbatore.',
  url: SITE_URL,
  telephone: CONTACT_INFO.PHONE.replace(/\s/g, ''),
  email: CONTACT_INFO.EMAIL,
  image: SITE.ogImage,
  logo: SITE.logo,
  parentOrganization: { '@id': ORGANIZATION_ID },
  address: postalAddress,
  geo,
  hasMap: GOOGLE_BUSINESS.placeUrl,
  currenciesAccepted: 'INR',
  paymentAccepted: 'UPI, Credit Card, Debit Card, Net Banking, Cash',
  priceRange: '₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '06:00',
      closes: '22:00',
    },
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: geo,
    geoRadius: GEO_LOCATION.SERVICE_RADIUS,
  },
  ...(aggregateRating ? { aggregateRating } : {}),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bicycle Services',
    itemListElement: serviceNames.map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, provider: { '@id': LOCAL_BUSINESS_ID } },
    })),
  },
  sameAs,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE.name,
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'en-IN',
};

/** Breadcrumbs give Google the path shown under the result title. */
export const breadcrumbSchema = (
  items: { name: string; path: string }[]
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (
  faqs: { question: string; answer: string }[]
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

export { BUSINESS_INFO };
