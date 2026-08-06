import React from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon';
import BrandMark from '@/components/BrandMark';
import { GoogleReview } from '@/data/reviews';
import { GOOGLE_BUSINESS } from '@/lib/site';

/** Renders a 1–5 rating as filled/empty stars with an accessible text label. */
export const StarRating: React.FC<{
  rating: number;
  className?: string;
  showValue?: boolean;
}> = ({ rating, className = 'w-4 h-4', showValue = false }) => (
  <span className="inline-flex items-center gap-1">
    <span className="inline-flex" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name="star"
          className={`${className} ${
            star <= Math.round(rating) ? 'text-primary' : 'text-secondary-300'
          }`}
        />
      ))}
    </span>
    {showValue && (
      <span className="text-sm font-semibold text-secondary-100">
        {rating.toFixed(1)}
      </span>
    )}
  </span>
);

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

const formatDate = (iso: string) => {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleDateString('en-IN', {
    month: 'short',
    year: 'numeric',
  });
};

export const ReviewCard: React.FC<{ review: GoogleReview }> = ({ review }) => (
  <article className="bg-white rounded-xl p-5 shadow-md border border-secondary-300/30 flex flex-col h-full">
    <div className="flex items-center justify-between mb-3">
      <Icon name="quote" className="w-7 h-7 text-primary/50" />
      <BrandMark className="w-7 text-secondary-300" />
    </div>

    <blockquote className="flex-1">
      <p className="text-sm text-secondary-600 leading-relaxed">{review.text}</p>
    </blockquote>

    <footer className="mt-4 pt-4 border-t border-secondary-300/30 flex items-center gap-3">
      {review.avatar ? (
        <Image
          src={review.avatar}
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
      ) : (
        <span
          className="w-10 h-10 rounded-full bg-primary/20 text-secondary-100 font-bold text-sm flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          {initials(review.author)}
        </span>
      )}

      <div className="min-w-0">
        <p className="text-sm font-semibold text-secondary-100 truncate">
          {review.author}
        </p>
        <p className="flex items-center gap-2 text-xs text-secondary-600">
          <StarRating rating={review.rating} className="w-3.5 h-3.5" />
          <time dateTime={review.date}>{formatDate(review.date)}</time>
        </p>
      </div>

      {review.service && (
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-wide bg-secondary-300/40 text-secondary-100 px-2 py-1 rounded-full whitespace-nowrap">
          {review.service}
        </span>
      )}
    </footer>
  </article>
);

/** Button linking to the Google Business Profile, used in several places. */
export const GoogleReviewCta: React.FC<{
  variant?: 'primary' | 'ghost';
  children?: React.ReactNode;
  href?: string;
}> = ({ variant = 'primary', children, href = GOOGLE_BUSINESS.writeReviewUrl }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 ${
      variant === 'primary'
        ? 'bg-secondary-100 text-white hover:bg-secondary-100/90 shadow-md'
        : 'bg-white text-secondary-100 border border-secondary-300 hover:border-primary'
    }`}
  >
    <Icon name="google" className="w-4 h-4" />
    {children ?? 'Review us on Google'}
  </a>
);
