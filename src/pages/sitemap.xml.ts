import type { GetServerSideProps } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { absoluteUrl } from '@/lib/site';

interface SitemapEntry {
  path: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
  lastmod: string;
}

/**
 * Generated rather than checked in as a static file so new blog posts appear in
 * the sitemap automatically — a hand-maintained sitemap.xml drifts the moment
 * someone adds a route and forgets.
 */
const staticEntries: Omit<SitemapEntry, 'lastmod'>[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/reviews', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/refund', changefreq: 'yearly', priority: '0.3' },
];

const buildSitemap = (): string => {
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapEntry[] = [
    ...staticEntries.map((entry) => ({ ...entry, lastmod: today })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.id}`,
      changefreq: 'monthly' as const,
      priority: '0.6',
      lastmod: post.isoDate,
    })),
  ];

  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=604800'
  );
  res.write(buildSitemap());
  res.end();

  return { props: {} };
};

// Output is written entirely in getServerSideProps.
const Sitemap = () => null;
export default Sitemap;
