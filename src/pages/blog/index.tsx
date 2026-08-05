import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { FormStatus, Honeypot, SubmitButton } from '@/components/FormBits';
import useEnquiryForm from '@/hooks/useEnquiryForm';
import { blogPosts } from '@/data/blogPosts';
import { absoluteUrl } from '@/lib/site';
import { ORGANIZATION_ID, breadcrumbSchema } from '@/lib/schema';

const BlogIndexPage: React.FC = () => {
  const {
    values: subscriber,
    status,
    errorMessage,
    handleChange,
    submit,
    honeypotProps,
  } = useEnquiryForm('newsletter', { email: '' });

  return (
    <>
      <Seo
        title="CycleBees Blog — Cycling Tips & Maintenance Guides"
        description="Expert cycling tips, bicycle maintenance guides and local riding advice from the CycleBees mechanics in Coimbatore."
        path="/blog"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'CycleBees Blog',
            description:
              'Expert cycling tips, maintenance guides, and industry insights from CycleBees professionals.',
            url: absoluteUrl('/blog'),
            publisher: { '@id': ORGANIZATION_ID },
            blogPost: blogPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              author: { '@type': 'Person', name: post.author },
              datePublished: post.isoDate,
              url: absoluteUrl(`/blog/${post.id}`),
            })),
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />
      
      <Layout>
        <PageHero
          eyebrow="From the workshop"
          title="CycleBees Blog"
          lead="Expert cycling tips, maintenance guides and industry insights to keep you rolling smoothly."
        />

        {/* Blog Posts Section */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white border border-secondary-300/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-primary transition-all duration-150 group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-secondary-100 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-xs text-secondary-600 mb-3">
                        <time dateTime={post.isoDate}>{post.date}</time>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-lg font-bold text-secondary-100 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {post.title}
                      </h2>
                      
                      <p className="text-sm text-secondary-600 line-clamp-3 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-secondary-300/20">
                        <span className="text-xs text-secondary-600">By {post.author}</span>
                        <div className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center text-sm">
                          Continue Reading
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-300/20 to-primary/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">Join Our Cycling Community</h2>
            <p className="text-base text-secondary-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest cycling tips, maintenance guides, and exclusive CycleBees updates
            </p>
            <form onSubmit={submit} className="max-w-lg mx-auto" noValidate>
              <Honeypot {...honeypotProps} />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <label htmlFor="blog-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="blog-newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={subscriber.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-secondary-300/50 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary text-sm bg-white"
                />
                <SubmitButton
                  status={status}
                  className="bg-secondary-100 text-white px-6 py-2.5 rounded-lg hover:bg-secondary-100/90 shadow-md text-sm"
                >
                  Subscribe
                </SubmitButton>
              </div>
              <FormStatus status={status} errorMessage={errorMessage} />
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogIndexPage;