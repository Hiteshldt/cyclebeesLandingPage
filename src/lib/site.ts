/**
 * Single source of truth for site-wide identity, URLs and SEO defaults.
 *
 * NOTE ON THE DOMAIN: the codebase previously hard-coded `https://cyclebees.com`
 * in every canonical tag and JSON-LD block, while the business email and the
 * indexed pages both use `cyclebees.in`. Canonicals pointing at a domain you do
 * not serve tell Google to drop the pages it actually crawled, so the value now
 * lives here and can be overridden per-environment with NEXT_PUBLIC_SITE_URL.
 */

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cyclebees.in';

/** Origin with no trailing slash, e.g. `https://www.cyclebees.in`. */
export const SITE_URL = rawSiteUrl.replace(/\/$/, '');

/** Builds an absolute URL from a site-relative path. */
export const absoluteUrl = (path = '/'): string =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const SITE = {
  name: 'CycleBees',
  legalName: 'CycleBees',
  tagline: 'Doorstep Bicycle Service in Coimbatore',
  /** Default social share image. Must be an absolute URL for OG/Twitter. */
  ogImage: absoluteUrl('/og-image.png'),
  logo: absoluteUrl('/logo.webp'),
  locale: 'en_IN',
  twitterHandle: '@CycleBees',
} as const;

/**
 * Public Google Business Profile. Used for the "review us" call to action and
 * as a `sameAs` signal that ties the site to the Maps listing.
 *
 * `placeUrl` is a search-by-name permalink so it keeps working even if the CID
 * changes. If you have the short link from your Google Business Profile
 * dashboard ("Get more reviews"), paste it into `writeReviewUrl` for a
 * one-tap review flow.
 */
export const GOOGLE_BUSINESS = {
  placeUrl:
    'https://www.google.com/maps/search/?api=1&query=CycleBees+Coimbatore',
  writeReviewUrl:
    'https://www.google.com/maps/search/?api=1&query=CycleBees+Coimbatore',
} as const;
