import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import BrandMark, { BrandWatermark } from '@/components/BrandMark';

const suggestions = [
  { name: 'Browse services', href: '/services' },
  { name: 'Read reviews', href: '/reviews' },
  { name: 'Cycling guides', href: '/blog' },
  { name: 'Contact us', href: '/contact' },
];

/**
 * Branded 404. Previously an unstyled `_error` fallback rendered outside the
 * site chrome, so a mistyped URL dropped visitors on a page with no navigation
 * back into the site.
 */
const NotFoundPage: React.FC = () => (
  <>
    <Seo
      title="Page Not Found"
      description="The page you were looking for is not here. Browse CycleBees doorstep bicycle services in Coimbatore instead."
      path="/404"
      noindex
    />

    <Layout>
      <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-24 pb-16 px-4">
        <BrandWatermark className="-left-20 -top-12 w-72 text-secondary-100/[0.07]" />
        <BrandWatermark className="-right-28 -bottom-24 w-96 text-white/[0.16]" />

        <div className="relative max-w-xl mx-auto text-center">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary-100 text-primary mb-6 shadow-lg">
            <BrandMark className="w-12" />
          </span>

          <p className="text-6xl font-bold text-secondary-100 mb-3">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-secondary-100 mb-3">
            This route has a puncture
          </h1>
          <p className="text-base text-secondary-100/90 mb-8">
            The page you were looking for has moved or never existed. Let&apos;s
            get you rolling again.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-secondary-100 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200 shadow-lg mb-8"
          >
            Back to home
          </Link>

          <ul className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block bg-white/40 hover:bg-white/60 text-secondary-100 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  </>
);

export default NotFoundPage;
