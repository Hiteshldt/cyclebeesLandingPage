/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // AVIF first: it is the smaller of the two and browsers negotiate by order.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    /**
     * `domains` is deprecated in favour of `remotePatterns`, which also pins
     * the protocol and path instead of trusting an entire host.
     */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dc6t0u2j2/**',
      },
    ],
    // Blog images are immutable Cloudinary uploads; 60s was needlessly short.
    minimumCacheTTL: 2678400,
    /**
     * `dangerouslyAllowSVG` was enabled while no remote SVG is ever rendered.
     * Optimising remote SVGs lets a compromised origin serve scriptable markup
     * from our domain, so it stays off.
     */
    dangerouslyAllowSVG: false,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // We ask for none of these; deny them by default.
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        // Content-hashed build output can be cached forever.
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(ico|png|jpg|jpeg|gif|webp|avif|svg|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        /**
         * The service worker must never be served stale — a cached sw.js is how
         * a site gets stuck on an old caching strategy it can no longer replace.
         */
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          { key: 'Service-Worker-Allowed', value: '/' },
        ],
      },
      {
        source: '/site.webmanifest',
        headers: [
          { key: 'Content-Type', value: 'application/manifest+json' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
