import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Icon, { IconName } from '@/components/Icon';
import DownloadSection from '@/components/DownloadSection';
import { GoogleReviewCta, ReviewCard, StarRating } from '@/components/Reviews';
import {
  GOOGLE_REVIEWS,
  REVIEW_STATS,
  hasPublishedReviews,
  ratingBreakdown,
} from '@/data/reviews';
import { BUSINESS_INFO, CONTACT_INFO } from '@/constants';
import { GOOGLE_BUSINESS } from '@/lib/site';
import {
  LOCAL_BUSINESS_ID,
  breadcrumbSchema,
  localBusinessSchema,
} from '@/lib/schema';

const guarantees: { icon: IconName; title: string; detail: string }[] = [
  {
    icon: 'mechanic',
    title: 'Certified technicians',
    detail:
      'Every mechanic is background-checked and trained through the CycleBees Academy before taking a booking.',
  },
  {
    icon: 'rupee',
    title: 'Transparent pricing',
    detail: `A ₹299 visit fee covers the callout. Parts and replacements are quoted upfront and only fitted once you approve.`,
  },
  {
    icon: 'gear',
    title: 'Genuine parts',
    detail:
      'We fit OEM and high-grade spares only, so the repair lasts beyond the ride home.',
  },
  {
    icon: 'shield',
    title: '7-day workmanship guarantee',
    detail:
      'If the same issue returns within a week, we re-service it at no additional labour cost.',
  },
  {
    icon: 'clock',
    title: 'Predictable arrival',
    detail:
      'Bookings get a 60–90 minute arrival window with live ETA, averaging around 60 minutes.',
  },
  {
    icon: 'siren',
    title: 'Emergency cover',
    detail:
      'Regular bookings run 6:00 AM–10:00 PM; on-road emergency assist is available 24/7.',
  },
];

const ReviewsPage: React.FC = () => {
  const breakdown = ratingBreakdown();
  const totalRated = breakdown.reduce((sum, row) => sum + row.count, 0);

  /**
   * Review structured data is emitted only for reviews that are actually
   * rendered on this page. Google requires the two to match, and marking up
   * ratings that no visible review supports is what gets a site's rich results
   * pulled.
   */
  const reviewSchema = hasPublishedReviews
    ? {
        ...localBusinessSchema,
        review: GOOGLE_REVIEWS.map((review) => ({
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.rating,
            bestRating: 5,
            worstRating: 1,
          },
          author: { '@type': 'Person', name: review.author },
          datePublished: review.date,
          reviewBody: review.text,
          itemReviewed: { '@id': LOCAL_BUSINESS_ID },
        })),
      }
    : localBusinessSchema;

  return (
    <>
      <Seo
        title="Customer Reviews & Ratings"
        description={`See what riders across Coimbatore say about CycleBees doorstep bicycle service — rated ${BUSINESS_INFO.RATING}/5 with ${BUSINESS_INFO.CUSTOMERS_SERVED} riders served.`}
        path="/reviews"
        jsonLd={[
          reviewSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Reviews', path: '/reviews' },
          ]),
        ]}
      />

      <Layout>
        <PageHero
          eyebrow="Social proof"
          title="What Riders Say About CycleBees"
          lead="Doorstep bicycle repairs and rentals across Coimbatore — reviewed by the riders who booked them."
        >
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 bg-white/40 backdrop-blur-sm rounded-2xl px-8 py-5 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary-100 leading-none mb-2">
                {BUSINESS_INFO.RATING}
              </p>
              <StarRating rating={REVIEW_STATS.ratingValue} className="w-5 h-5" />
              <p className="text-xs text-secondary-100/80 mt-1">Average rating</p>
            </div>
            <div className="w-px h-14 bg-secondary-100/20 hidden sm:block" aria-hidden="true"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary-100 leading-none mb-2">
                {BUSINESS_INFO.CUSTOMERS_SERVED}
              </p>
              <p className="text-xs text-secondary-100/80">Riders served</p>
            </div>
            <div className="w-px h-14 bg-secondary-100/20 hidden sm:block" aria-hidden="true"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary-100 leading-none mb-2">
                24/7
              </p>
              <p className="text-xs text-secondary-100/80">Emergency assist</p>
            </div>
          </div>
        </PageHero>

        {/* Review wall, or the Google hand-off while the wall is empty */}
        <section className="py-10 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {hasPublishedReviews ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
                  <div className="lg:col-span-1">
                    <h2 className="text-xl font-bold text-secondary-100 mb-4">
                      Rating breakdown
                    </h2>
                    <ul className="space-y-2">
                      {breakdown.map((row) => {
                        const percent = totalRated
                          ? Math.round((row.count / totalRated) * 100)
                          : 0;
                        return (
                          <li key={row.stars} className="flex items-center gap-2">
                            <span className="text-xs text-secondary-600 w-10 flex-shrink-0">
                              {row.stars} star
                            </span>
                            <span
                              className="flex-1 h-2 rounded-full bg-secondary-300/50 overflow-hidden"
                              aria-hidden="true"
                            >
                              <span
                                className="block h-full bg-primary rounded-full"
                                style={{ width: `${percent}%` }}
                              ></span>
                            </span>
                            <span className="text-xs text-secondary-600 w-8 text-right flex-shrink-0">
                              {row.count}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-6">
                      <GoogleReviewCta />
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <h2 className="text-xl font-bold text-secondary-100 mb-4">
                      Recent reviews
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {GOOGLE_REVIEWS.map((review) => (
                        <li key={`${review.author}-${review.date}`}>
                          <ReviewCard review={review} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-secondary-100 mb-5">
                  <Icon name="google" className="w-8 h-8" />
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">
                  Read our reviews on Google
                </h2>
                <p className="text-sm md:text-base text-secondary-600 leading-relaxed mb-6">
                  Our rider reviews live on the CycleBees Google Business
                  Profile, where every rating comes from a verified Google
                  account. Open the listing to read them in full — and if
                  we&apos;ve serviced your bike, we&apos;d be grateful if you
                  left one.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <GoogleReviewCta href={GOOGLE_BUSINESS.placeUrl}>
                    Read reviews on Google
                  </GoogleReviewCta>
                  <GoogleReviewCta variant="ghost">
                    Write a review
                  </GoogleReviewCta>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* What the rating is built on */}
        <section className="py-10 my-3 bg-secondary-300/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our commitments"
              title="What Every Booking Includes"
              lead="The commitments behind the rating — the same for a puncture repair and a full overhaul."
              className="mb-10"
            />

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {guarantees.map((guarantee) => (
                <li
                  key={guarantee.title}
                  className="bg-white rounded-xl p-5 shadow-sm border border-secondary-300/30 hover:border-primary transition-colors duration-200"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 mb-3 rounded-full bg-primary/20 text-secondary-100">
                    <Icon name={guarantee.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="text-base font-bold text-secondary-100 mb-1.5">
                    {guarantee.title}
                  </h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">
                    {guarantee.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-10 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">
              Serviced by CycleBees? Tell other riders.
            </h2>
            <p className="text-sm text-secondary-600 max-w-2xl mx-auto mb-6">
              A review takes a minute and helps the next rider in Coimbatore find
              a mechanic they can trust. Something not right? Call us on{' '}
              <a
                href={`tel:+${CONTACT_INFO.WHATSAPP_NUMBER}`}
                className="text-secondary-100 font-semibold underline hover:text-primary transition-colors duration-200"
              >
                {CONTACT_INFO.PHONE}
              </a>{' '}
              and we&apos;ll put it right first.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <GoogleReviewCta />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-white text-secondary-100 border border-secondary-300 hover:border-primary transition-colors duration-200"
              >
                <Icon name="mail" className="w-4 h-4" />
                Contact support
              </Link>
            </div>
            <p className="text-xs text-secondary-600/70 mt-6">
              Reviews are hosted on our{' '}
              <a
                href={GOOGLE_BUSINESS.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-secondary-100"
              >
                Google Business Profile
              </a>
              , so every rating comes from a verified Google account.
            </p>
          </div>
        </section>

        <DownloadSection />
      </Layout>
    </>
  );
};

export default ReviewsPage;
