import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import CarouselControls from '@/components/CarouselControls';
import { FormStatus, Honeypot, SubmitButton } from '@/components/FormBits';
import useCarousel from '@/hooks/useCarousel';
import useEnquiryForm from '@/hooks/useEnquiryForm';
import { blogPosts } from '@/data/blogPosts';

const previewPosts = blogPosts.slice(0, 4);

const ArrowRight = () => (
  <svg
    className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const BlogSection: React.FC = () => {
  const { index, setIndex, next, previous, swipeHandlers } = useCarousel(
    previewPosts.length
  );
  const current = previewPosts[index];

  /** Subscribe had no handler at all — clicking it did nothing. */
  const {
    values: subscriber,
    status,
    errorMessage,
    handleChange,
    submit,
    honeypotProps,
  } = useEnquiryForm('newsletter', { email: '' });

  return (
    <section
      id="blog"
      className="bg-secondary-300/20 py-10 sm:py-8 my-5 border-t border-light-yellow border-b border-light-yellow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the workshop"
          title="Latest from the Hive"
          lead="Cycling tips, maintenance guides and industry insights."
          className="mb-10"
        />

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-4">
          {previewPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-primary text-secondary-100 px-2 py-1 rounded text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-4">
                <p className="flex items-center text-xs text-secondary-600 mb-2">
                  <time dateTime={post.isoDate}>{post.date}</time>
                  <span className="mx-1" aria-hidden="true">
                    •
                  </span>
                  <span>{post.readTime}</span>
                </p>

                <h3 className="text-sm font-bold text-secondary-100 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-secondary-600 text-xs line-clamp-2 mb-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 inline-flex items-center text-xs"
                >
                  Read {post.category} Guide
                  <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mb-4">
          <article
            className="bg-white rounded-lg overflow-hidden shadow-md mb-4 group"
            {...swipeHandlers}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
              <span className="absolute top-2 left-2 bg-primary text-secondary-100 px-2 py-1 rounded text-xs font-semibold">
                {current.category}
              </span>
            </div>

            <div className="p-4">
              <p className="flex items-center text-xs text-secondary-600 mb-2">
                <time dateTime={current.isoDate}>{current.date}</time>
                <span className="mx-1" aria-hidden="true">
                  •
                </span>
                <span>{current.readTime}</span>
              </p>

              <h3 className="text-sm font-bold text-secondary-100 mb-2">
                {current.title}
              </h3>

              <p className="text-secondary-600 text-xs mb-3">
                {current.excerpt}
              </p>

              <Link
                href={`/blog/${current.id}`}
                className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 inline-flex items-center text-xs"
              >
                View Full Article
                <ArrowRight />
              </Link>
            </div>
          </article>

          <CarouselControls
            count={previewPosts.length}
            index={index}
            onSelect={setIndex}
            onPrevious={previous}
            onNext={next}
            label="article"
          />
        </div>

        <div className="text-center mt-6">
          <Link
            href="/blog"
            className="inline-block bg-secondary-100 text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200 text-sm"
          >
            View All Articles
          </Link>
        </div>

        <div className="mt-8">
          <div
            className="w-full h-px bg-gradient-to-r from-transparent via-secondary-300 to-transparent mb-6"
            aria-hidden="true"
          ></div>
          <div className="bg-gradient-to-r from-primary/10 via-secondary-300/20 to-primary/10 rounded-lg p-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="inline-flex items-center gap-2 text-xl font-bold text-secondary-100 mb-3">
                <Icon name="bike" className="w-6 h-6" />
                Join Our Cycling Community
              </h3>
              <p className="text-secondary-600 mb-6 text-sm">
                Get latest cycling tips, maintenance guides, and exclusive
                CycleBees updates
              </p>
              <form onSubmit={submit} className="max-w-lg mx-auto" noValidate>
                <Honeypot {...honeypotProps} />
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={subscriber.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-secondary-300/50 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary text-sm bg-white"
                  />
                  <SubmitButton
                    status={status}
                    className="bg-secondary-100 text-white px-6 py-3 rounded-lg hover:bg-secondary-100/90 text-sm shadow-md"
                  >
                    Subscribe
                  </SubmitButton>
                </div>
                <FormStatus status={status} errorMessage={errorMessage} />
              </form>
              <p className="inline-flex items-center gap-1.5 text-secondary-600/80 text-xs mt-3">
                <Icon name="sparkle" className="w-3.5 h-3.5" />
                500+ cyclists trust our expert advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
