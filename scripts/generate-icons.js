/**
 * Regenerates the CycleBees favicon, PWA icon and social-share image set from
 * the real logo — run with `npm run icons`.
 *
 * MARK_PATH is vector-traced from `public/logo.webp` (potrace on the alpha
 * channel) and is the single source of truth, shared with
 * `src/components/BrandMark.tsx`. The mark is 1.76:1, so it is centred inside
 * the square icon canvases rather than stretched.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC = path.join(__dirname, '..', 'public');
const YELLOW = '#FFD11E';
const INK = '#2F2500';

const MARK_VIEWBOX = '0 0 100 56.69';
const MARK_PATH =
  'M50.29 0.64C48.98 0.99 48.74 1.2 36.83 13.09C28.55 21.35 28.87 20.94 28.87 23.15C28.87 27.17 32.99 29.31 36.4 27.06C37.1 26.6 38.9 24.88 45.82 18.03C47.79 16.07 49.48 14.46 49.56 14.44C49.81 14.39 50.25 14.94 50.45 15.55C50.62 16.07 51.12 17.37 51.42 18.03C51.5 18.21 51.66 18.59 51.79 18.91C52.16 19.91 52.66 21.19 52.98 22.03C53.15 22.48 53.4 23.14 53.53 23.51C53.66 23.89 53.82 24.25 53.88 24.33C53.93 24.4 54.02 24.63 54.07 24.83C54.12 25.04 54.25 25.4 54.36 25.64C54.58 26.15 54.91 26.96 55.19 27.77C55.31 28.08 55.51 28.58 55.63 28.9C55.76 29.21 55.93 29.66 56.02 29.9C56.11 30.13 56.31 30.67 56.46 31.08C56.62 31.49 56.89 32.21 57.07 32.67C57.24 33.14 57.54 33.89 57.72 34.35C57.89 34.83 58.14 35.49 58.27 35.84C58.39 36.19 58.55 36.59 58.63 36.71C58.7 36.84 58.84 37.18 58.94 37.45C59.04 37.72 59.27 38.34 59.45 38.82C59.64 39.3 59.88 39.95 59.98 40.26C60.08 40.57 60.26 41.05 60.39 41.32C60.51 41.6 60.66 42.02 60.7 42.26C60.75 42.5 60.9 42.88 61.03 43.11C61.15 43.33 61.26 43.62 61.26 43.73C61.26 44.06 62.79 46.92 63.57 48.08C63.85 48.48 65.61 50.61 65.83 50.81C66.7 51.57 68.89 53.35 69.13 53.48C71.1 54.63 72.53 55.28 73.94 55.69C74.29 55.79 74.9 55.98 75.31 56.11C76.44 56.47 79.85 56.69 81.47 56.51C82.17 56.43 83.02 56.37 83.34 56.37C83.67 56.36 84.15 56.27 84.43 56.17C84.7 56.06 85.24 55.91 85.61 55.82C85.99 55.73 86.48 55.57 86.7 55.46C86.93 55.33 87.19 55.24 87.3 55.24C87.54 55.24 90.3 53.82 90.62 53.55C90.72 53.45 90.86 53.37 90.91 53.37C91.07 53.37 93.02 51.81 93.77 51.09C94.89 50.02 97.1 47.2 97.1 46.85C97.1 46.82 97.33 46.38 97.61 45.87C98.21 44.77 98.8 43.33 98.93 42.67C98.98 42.41 99.1 42.02 99.2 41.82C99.3 41.61 99.46 40.82 99.55 40.07C99.64 39.31 99.78 38.24 99.86 37.67C100 36.81 99.99 36.46 99.81 35.3C99.7 34.57 99.58 33.55 99.54 33.08C99.49 32.59 99.35 31.97 99.23 31.69C99.1 31.41 98.96 30.98 98.91 30.76C98.81 30.29 98.13 28.53 97.98 28.33C97.93 28.26 97.64 27.75 97.35 27.17C95.87 24.24 92.91 21.23 89.8 19.51C87.75 18.37 87.38 18.23 84.37 17.33C82.47 16.77 77.85 16.77 75.69 17.33C71.38 18.46 67.36 20.82 65.25 23.46C64.95 23.84 64.64 24.15 64.55 24.15C64.37 24.15 63.75 23.03 63.52 22.28C63.44 21.97 63.29 21.6 63.19 21.47C63.09 21.33 63.01 21.1 63.01 20.97C63.01 20.83 62.87 20.43 62.7 20.09C62.54 19.74 62.39 19.39 62.39 19.31C62.39 19.22 62.25 18.87 62.08 18.53C61.9 18.19 61.76 17.84 61.76 17.76C61.76 17.68 61.65 17.38 61.53 17.11C61.39 16.82 61.2 16.37 61.09 16.1C60.89 15.56 60.41 14.31 59.95 13.1C59.79 12.69 59.53 11.99 59.35 11.54C59 10.61 58.49 9.27 58.14 8.35C58.02 8 57.77 7.36 57.59 6.88C57.42 6.42 57.12 5.67 56.94 5.19C56.39 3.76 56.33 3.62 55.97 2.98C54.76 0.91 52.58 0 50.29 0.64ZM82.37 25.65C86.25 26.46 89.52 29.42 90.91 33.39C91.48 35.03 91.48 38.52 90.9 40.2C89.69 43.72 86.63 46.79 83.55 47.6C83.28 47.66 82.83 47.81 82.55 47.93C81.63 48.28 78.28 48.2 77.06 47.8C75.94 47.43 74.71 46.92 74.25 46.62C73.04 45.85 72.58 45.48 71.75 44.63C69.26 42.05 68.17 38.57 68.74 35.08C68.89 34.18 69.13 33.22 69.26 32.93C69.39 32.63 69.51 32.34 69.51 32.27C69.51 32.01 70.33 30.68 71.1 29.67C72.64 27.7 75.16 26.15 77.62 25.66C78.35 25.52 79.05 25.39 79.18 25.35C79.62 25.24 81.02 25.37 82.37 25.65ZM21.3 11.41C20.93 11.48 20.2 11.51 19.71 11.53C19.18 11.54 18.51 11.64 18.08 11.78C17.69 11.91 17.15 12.06 16.87 12.11C16.6 12.15 16.22 12.28 16.05 12.36C15.87 12.45 15.45 12.59 15.11 12.67C14.29 12.87 12.26 13.87 10.59 14.9C9.55 15.53 7.18 17.5 6.42 18.36C4.2 20.88 2.32 23.91 1.65 26.09C1.46 26.7 1.2 27.49 1.06 27.83C0 30.64 0.01 37.23 1.09 40.07C1.21 40.41 1.32 40.77 1.32 40.86C1.32 41.31 2.85 44.72 3.52 45.78C3.68 46.04 3.97 46.49 4.16 46.78C5.88 49.46 9.22 52.44 12.25 53.98C12.52 54.13 12.84 54.3 12.94 54.36C13.39 54.66 14.76 55.24 15 55.24C15.13 55.24 15.47 55.36 15.75 55.48C16.02 55.61 16.47 55.74 16.75 55.79C17.02 55.84 17.53 55.98 17.87 56.11C19.44 56.68 26.29 56.68 27.86 56.11C28.21 55.98 28.71 55.84 28.98 55.79C29.26 55.74 29.7 55.61 29.95 55.48C30.21 55.34 30.54 55.24 30.71 55.24C30.98 55.24 32.44 54.55 34.33 53.51C36.48 52.34 39.07 50.1 40.46 48.21C40.65 47.95 40.9 47.65 41.02 47.53C41.36 47.2 42.07 46.09 42.57 45.13C42.73 44.82 43.04 44.24 43.26 43.84C43.71 43.03 44.08 42.03 44.36 40.96C44.46 40.55 44.62 40.07 44.72 39.9C44.81 39.71 44.92 39.29 44.97 38.95C45.02 38.6 45.14 37.85 45.24 37.26C45.6 35.28 45.53 33.23 45.08 32.27C43.59 29.15 39.47 28.98 37.72 31.97C37.39 32.54 37.34 32.74 36.99 35.01C36.88 35.74 36.74 36.64 36.68 37.01C36.49 38.19 36.09 39.21 34.99 41.36C34.74 41.85 33.19 43.78 32.74 44.17C31.27 45.45 30.21 46.25 29.96 46.25C29.92 46.25 29.68 46.38 29.43 46.53C28.86 46.89 27.35 47.5 27.05 47.5C26.91 47.5 26.51 47.63 26.15 47.78C25.16 48.19 20.77 48.2 19.62 47.8C19.21 47.65 18.69 47.5 18.47 47.45C18.02 47.38 15.9 46.37 15.12 45.85C13.74 44.96 11.33 42.51 10.79 41.45C10.68 41.23 10.41 40.75 10.2 40.33C7.63 35.64 8.48 28.76 12.09 24.84C12.35 24.56 12.56 24.3 12.56 24.26C12.56 24.15 14.54 22.5 15.03 22.2C15.55 21.89 16.98 21.18 17.74 20.84C18.63 20.45 20.58 20.03 21.99 19.91C25.31 19.62 27.05 18.13 27.05 15.57C27.05 12.61 24.74 10.94 21.3 11.41Z';

const [, , MARK_W, MARK_H] = MARK_VIEWBOX.split(' ').map(Number);

/**
 * Centres the mark inside a `size`x`size` box, scaled to `coverage` of the
 * width. Returns an SVG <g> ready to drop into a square canvas.
 */
const mark = (size, coverage, fill = INK) => {
  const w = size * coverage;
  const s = w / MARK_W;
  const h = MARK_H * s;
  const x = (size - w) / 2;
  const y = (size - h) / 2;
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="${MARK_PATH}" fill="${fill}"/></g>`;
};

/** Rounded-square icon (browser tabs, PWA). */
const roundedIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${YELLOW}"/>${mark(64, 0.72)}
</svg>`;

/** Full-bleed square — iOS applies its own mask, so we must not pre-round it. */
const squareIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${YELLOW}"/>${mark(64, 0.7)}
</svg>`;

/** Android may crop to a circle, so the mark sits inside the safe zone. */
const maskableIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${YELLOW}"/>${mark(64, 0.55)}
</svg>`;

/** Monochrome pinned-tab / Safari mask icon. */
const maskIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${mark(64, 0.86, 'black')}</svg>`;

/** 1200x630 social share card. */
const OG_MARK_W = 300;
const ogScale = OG_MARK_W / MARK_W;
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

  <g transform="translate(96 150) scale(${ogScale})"><path d="${MARK_PATH}" fill="${INK}"/></g>

  <text x="96" y="360" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="86" font-weight="700" fill="#2D3E50">CycleBees</text>
  <text x="96" y="432" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="40" font-weight="600" fill="#2D3E50" opacity="0.92">Your Ride. Our Responsibility.</text>
  <text x="96" y="492" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#2F2500" opacity="0.78">Doorstep bicycle repairs &amp; rentals in Coimbatore</text>

  <rect x="96" y="528" width="342" height="58" rx="29" fill="#2D3E50"/>
  <text x="267" y="566" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#ffffff">Book a mechanic today</text>
</svg>`;

const render = (svg, size, file) =>
  sharp(Buffer.from(svg), { density: 900 })
    .resize(size, size)
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

  fs.writeFileSync(path.join(PUBLIC, 'favicon.svg'), roundedIcon + '\n');
  fs.writeFileSync(path.join(PUBLIC, 'safari-pinned-tab.svg'), maskIcon + '\n');

  console.log('generated icons from the traced CycleBees mark');
})().catch((e) => {
  console.error('FAILED', e);
  process.exit(1);
});
