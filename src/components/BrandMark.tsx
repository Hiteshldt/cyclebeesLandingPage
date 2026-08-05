import React from 'react';

/**
 * The CycleBees bicycle mark as inline SVG.
 *
 * The logo also exists as `public/logo.webp`, but that raster is fixed in
 * colour and needs a network request. This draws in `currentColor`, so the same
 * mark works as a navy header lockup, a yellow accent on dark sections, and a
 * low-opacity background watermark — no extra assets, no colour clashes, and it
 * stays crisp at any size. Geometry matches `public/favicon.svg`.
 */
const BrandMark: React.FC<{
  className?: string;
  strokeWidth?: number;
  title?: string;
}> = ({ className = 'w-8 h-8', strokeWidth = 5.5, title }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    role={title ? 'img' : undefined}
    aria-hidden={title ? undefined : true}
    aria-label={title}
    focusable="false"
  >
    {title ? <title>{title}</title> : null}
    <path d="M28.66 35.41A10 10 0 1 1 20.74 28.15" />
    <circle cx="45" cy="38" r="10" />
    <path d="M22 29 31 16l14 22" />
  </svg>
);

/**
 * Oversized, very low-contrast mark used to give large flat panels some depth.
 * Purely decorative and always `aria-hidden`.
 */
export const BrandWatermark: React.FC<{
  className?: string;
  strokeWidth?: number;
}> = ({ className = '', strokeWidth = 3 }) => (
  <div
    className={`pointer-events-none absolute select-none ${className}`}
    aria-hidden="true"
  >
    <BrandMark className="w-full h-full" strokeWidth={strokeWidth} />
  </div>
);

export default BrandMark;
