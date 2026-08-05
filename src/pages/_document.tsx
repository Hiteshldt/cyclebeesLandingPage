import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Document-level head: icons, PWA wiring and resource hints only.
 *
 * Page metadata (title/description/canonical/OG/Twitter/JSON-LD) lives in
 * `src/components/Seo.tsx`. Open Graph tags used to be duplicated here *and*
 * per page, which produced two conflicting `og:title` tags on every route —
 * crawlers pick one arbitrarily, so the pages advertised the wrong titles.
 */
export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        {/* Favicons — SVG first for crisp scaling, ICO as the legacy fallback. */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2F2500" />

        {/* PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFD11E" />
        <meta name="apple-mobile-web-app-title" content="CycleBees" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Resource hints for the only third-party origin we actually hit. */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Geo signals for local search. */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0168;76.9558" />
        <meta name="ICBM" content="11.0168, 76.9558" />
      </Head>
      <body className="bg-white text-secondary-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
