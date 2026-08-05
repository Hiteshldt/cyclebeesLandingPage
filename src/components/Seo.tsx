import React from 'react';
import Head from 'next/head';
import { SITE, absoluteUrl } from '@/lib/site';

interface SeoProps {
  /** Page title without the brand suffix — kept under ~60 chars including it. */
  title: string;
  description: string;
  /** Site-relative path, e.g. `/services`. Becomes the canonical URL. */
  path: string;
  /** Site-relative or absolute image for OG/Twitter cards. */
  image?: string;
  /** `website` for pages, `article` for blog posts. */
  type?: 'website' | 'article';
  /** Structured data objects rendered as ld+json. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
  /** Article-only metadata. */
  publishedTime?: string;
  author?: string;
}

/**
 * Every page's metadata in one place. Owning title/canonical/OG/Twitter here
 * keeps them from drifting apart and guarantees canonical URLs are absolute
 * and consistent, which is what Google actually needs to pick a canonical.
 */
const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  image,
  type = 'website',
  jsonLd,
  noindex = false,
  publishedTime,
  author,
}) => {
  const canonical = absoluteUrl(path);
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : absoluteUrl(image)
    : SITE.ogImage;

  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.name} — ${SITE.tagline}`} />
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, index) => (
        <script
          key={`ld-${index}`}
          type="application/ld+json"
          // Schema objects are authored in-repo, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default Seo;
