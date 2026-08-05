import type { GetServerSideProps } from 'next';
import { absoluteUrl } from '@/lib/site';

/**
 * Served from a route rather than `public/robots.txt` so the sitemap URL always
 * matches whatever `NEXT_PUBLIC_SITE_URL` the deployment is running under.
 * The site previously shipped no robots.txt at all, so crawlers had no sitemap
 * pointer.
 */
const buildRobots = (): string =>
  [
    'User-agent: *',
    'Allow: /',
    '',
    '# Next.js internals hold no indexable content.',
    'Disallow: /_next/static/chunks/',
    'Disallow: /api/',
    '',
    `Sitemap: ${absoluteUrl('/sitemap.xml')}`,
    '',
  ].join('\n');

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  res.write(buildRobots());
  res.end();

  return { props: {} };
};

// Output is written entirely in getServerSideProps.
const Robots = () => null;
export default Robots;
