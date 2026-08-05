/**
 * Regenerates the CycleBees favicon, PWA icon and social-share image set from
 * the brand mark defined below — run with `npm run icons`.
 *
 * Keeping the mark as code (rather than eight hand-exported PNGs) means a brand
 * tweak is a one-line change plus a re-run. `favicon.ico` is packed separately
 * because sharp cannot write ICO; see the npm script.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC = path.join(__dirname, '..', 'public');
const YELLOW = '#FFD11E';
const INK = '#2F2500';

/** The bicycle mark, drawn inside a 64x64 box. `scale`/`dx`/`dy` reposition it. */
const mark = (stroke = 5.5) => `
  <g fill="none" stroke="${INK}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
    <path d="M28.66 35.41A10 10 0 1 1 20.74 28.15"/>
    <circle cx="45" cy="38" r="10"/>
    <path d="M22 29 31 16l14 22"/>
  </g>`;

/** Rounded-square icon (browser tabs, PWA). */
const roundedIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${YELLOW}"/>${mark()}
</svg>`;

/** Full-bleed square — iOS applies its own mask, so we must not pre-round it. */
const squareIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${YELLOW}"/>${mark()}
</svg>`;

/**
 * Maskable icon: Android may crop to a circle, so the mark is scaled into the
 * inner 60% "safe zone" with the background bleeding to the edges.
 */
const maskableIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${YELLOW}"/>
  <g transform="translate(32 32) scale(0.62) translate(-32 -32)">${mark(6.5)}</g>
</svg>`;

/** Monochrome pinned-tab / Safari mask icon. */
const maskIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <g fill="none" stroke="black" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M28.66 35.41A10 10 0 1 1 20.74 28.15"/>
    <circle cx="45" cy="38" r="10"/>
    <path d="M22 29 31 16l14 22"/>
  </g>
</svg>`;

/** 1200x630 social share card. */
const ogImage = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBE9A0"/>
      <stop offset="45%" stop-color="${YELLOW}"/>
      <stop offset="100%" stop-color="#FFF5CC"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1075" cy="120" r="230" fill="#ffffff" opacity="0.18"/>
  <circle cx="120" cy="560" r="180" fill="#ffffff" opacity="0.14"/>

  <g transform="translate(90 118) scale(3.05)">${mark(5.5)}</g>

  <text x="96" y="360" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="86" font-weight="700" fill="#2D3E50">CycleBees</text>
  <text x="96" y="432" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="40" font-weight="600" fill="#2D3E50" opacity="0.92">Your Ride. Our Responsibility.</text>
  <text x="96" y="492" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#2F2500" opacity="0.78">Doorstep bicycle repairs &amp; rentals in Coimbatore</text>

  <rect x="96" y="528" width="342" height="58" rx="29" fill="#2D3E50"/>
  <text x="267" y="566" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#ffffff">Book a mechanic today</text>
</svg>`;

const render = (svg, size, file, opts = {}) =>
  sharp(Buffer.from(svg), { density: 900 })
    .resize(size, opts.height || size)
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC, file));

(async () => {
  await Promise.all([
    render(roundedIcon, 16, 'favicon-16x16.png'),
    render(roundedIcon, 32, 'favicon-32x32.png'),
    render(roundedIcon, 48, 'favicon-48x48.png'),
    render(roundedIcon, 192, 'icon-192.png'),
    render(roundedIcon, 512, 'icon-512.png'),
    render(maskableIcon, 192, 'icon-maskable-192.png'),
    render(maskableIcon, 512, 'icon-maskable-512.png'),
    render(squareIcon, 180, 'apple-touch-icon.png'),
  ]);

  await sharp(Buffer.from(ogImage), { density: 300 })
    .resize(1200, 630)
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC, 'og-image.png'));

  fs.writeFileSync(path.join(PUBLIC, 'safari-pinned-tab.svg'), maskIcon + '\n');

  console.log('generated');
})().catch((e) => {
  console.error('FAILED', e);
  process.exit(1);
});
