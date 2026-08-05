import React from 'react';
import Link from 'next/link';
import Icon, { IconName } from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import { GoogleReviewCta, ReviewCard, StarRating } from '@/components/Reviews';
import { GOOGLE_REVIEWS, REVIEW_STATS, hasPublishedReviews } from '@/data/reviews';
import { BUSINESS_INFO } from '@/constants';

/** Commitments that back the rating — all sourced from existing site copy. */
const promises: { icon: IconName; title: string; detail: string }[] = [
  {
    icon: 'mechanic',
    title: 'Certified technicians',
    detail: 'Background-checked and trained through the CycleBees Academy.',
  },
  {
    icon: 'rupee',
    title: 'Upfront quotes',
    detail: 'You approve the price before any part is fitted.',
  },
  {
    icon: 'shield',
    title: '7-day workmanship guarantee',
    detail: 'If the issue recurs, we re-service it at no labour cost.',
  },
];

/**
 * Social proof on the home page. It has two states so the section is never a
 * hollow shell: with reviews in `src/data/reviews.ts` it shows the three most
 * recent; without them it leads on the service guarantees and points riders at
 * the Google listing.
 */
const ReviewsSection: React.FC = () => {
  const featured = GOOGLE_REVIEWS.slice(0, 3);

  return (
    <section
      id="reviews"
      className="bg-white py-10 sm:py-8 my-5 border-t border-light-yellow border-b border-light-yellow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social proof"
          title="Rated by Riders in Coimbatore"
          lead={
            hasPublishedReviews
              ? 'What riders say after a CycleBees service.'
              : 'The standards every CycleBees booking is held to.'
          }
          className="mb-10"
        />

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mb-10 text-center">
          <div>
            <p className="text-3xl font-bold text-secondary-100">
              {BUSINESS_INFO.RATING}
            </p>
            <StarRating rating={REVIEW_STATS.ratingValue} />
            <p className="text-xs text-secondary-600 mt-1">Average rating</p>
          </div>
          <div className="w-px h-12 bg-secondary-300 hidden sm:block" aria-hidden="true"></div>
          <div>
            <p className="text-3xl font-bold text-secondary-100">
              {BUSINESS_INFO.CUSTOMERS_SERVED}
            </p>
            <p className="text-xs text-secondary-600 mt-1">Riders served</p>
          </div>
          <div className="w-px h-12 bg-secondary-300 hidden sm:block" aria-hidden="true"></div>
          <div>
            <p className="text-3xl font-bold text-secondary-100">
              {BUSINESS_INFO.AVG_ARRIVAL_TIME}
            </p>
            <p className="text-xs text-secondary-600 mt-1">Average arrival</p>
          </div>
        </div>

        {hasPublishedReviews ? (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((review) => (
              <li key={`${review.author}-${review.date}`}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {promises.map((promise) => (
              <li
                key={promise.title}
                className="bg-secondary-300/15 rounded-xl p-5 text-center border border-secondary-300/30"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-white text-secondary-100 shadow-sm">
                  <Icon name={promise.icon} className="w-6 h-6" />
                </span>
                <h3 className="text-base font-bold text-secondary-100 mb-1.5">
                  {promise.title}
                </h3>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {promise.detail}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary-100 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 shadow-md"
          >
            See all reviews
          </Link>
          <GoogleReviewCta variant="ghost" />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
