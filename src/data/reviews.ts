import { BUSINESS_INFO } from '@/constants';

export interface GoogleReview {
  /** Reviewer name exactly as it appears on the Google listing. */
  author: string;
  /** 1–5, as awarded on Google. */
  rating: number;
  /** The review body, verbatim. Do not paraphrase or shorten. */
  text: string;
  /** ISO 8601 date (YYYY-MM-DD) the review was posted. */
  date: string;
  /** Optional: a local file such as `/reviews/arun-k.webp`. */
  avatar?: string;
  /** Optional: which service the review is about, used for the card label. */
  service?: string;
}

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * REAL GOOGLE REVIEWS GO HERE — the array is intentionally empty.
 * ─────────────────────────────────────────────────────────────────────────────
 * Everything in this array is published as a public testimonial and, once
 * populated, is also emitted as `Review` structured data that Google reads.
 * Inventing entries would mean shipping fabricated testimonials and fake
 * structured data, so nothing is seeded here.
 *
 * To fill it in, open your Google Business Profile → Reviews and copy each
 * review across verbatim:
 *
 *   export const GOOGLE_REVIEWS: GoogleReview[] = [
 *     {
 *       author: 'Arun K.',
 *       rating: 5,
 *       text: 'Mechanic reached in 45 minutes and fixed my gear cable at home.',
 *       date: '2026-05-14',
 *       service: 'Gear Adjustment',
 *     },
 *   ];
 *
 * For reviewer photos, download the avatar from the listing into
 * `public/reviews/` and set `avatar: '/reviews/arun-k.webp'`. Hot-linking
 * `googleusercontent.com` URLs is not recommended — they rotate without notice
 * and would need adding to the image `remotePatterns` in `next.config.js`.
 * Cards fall back to the reviewer's initials when no avatar is set, so photos
 * are entirely optional.
 *
 * The reviews page, the home-page section and the `Review`/`AggregateRating`
 * schema all switch on automatically as soon as this array is non-empty.
 */
export const GOOGLE_REVIEWS: GoogleReview[] = [];

export const hasPublishedReviews = GOOGLE_REVIEWS.length > 0;

/**
 * Total reviews on the Google listing. Set this if you publish only a selection
 * of reviews above — `aggregateRating.reviewCount` should describe the whole
 * listing, not just the subset rendered on the page. Leave as `null` to derive
 * it from `GOOGLE_REVIEWS`.
 */
export const GOOGLE_TOTAL_REVIEWS: number | null = null;

/**
 * Headline numbers shown on the reviews page. `ratingValue` and `reviewCount`
 * feed AggregateRating structured data, but only once real reviews are present
 * (see `src/lib/schema.ts`) so the markup always matches the visible page.
 */
export const REVIEW_STATS = {
  ratingValue: Number(BUSINESS_INFO.RATING),
  reviewCount: GOOGLE_TOTAL_REVIEWS ?? GOOGLE_REVIEWS.length,
  ridersServed: BUSINESS_INFO.CUSTOMERS_SERVED,
  avgArrival: BUSINESS_INFO.AVG_ARRIVAL_TIME,
} as const;

/** Distribution of the star ratings actually present in GOOGLE_REVIEWS. */
export const ratingBreakdown = (): { stars: number; count: number }[] =>
  [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: GOOGLE_REVIEWS.filter((review) => Math.round(review.rating) === stars)
      .length,
  }));
