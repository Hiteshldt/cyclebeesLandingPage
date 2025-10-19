import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { blogPosts } from '@/data/blogPosts';

const BlogIndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog - CycleBees | Cycling Tips & Guides</title>
        <meta name="description" content="Expert cycling tips, maintenance guides, and industry insights from CycleBees professionals. Stay informed about bicycle care and urban cycling trends." />
        <meta name="keywords" content="cycling tips, bicycle maintenance, bike repair guides, CycleBees blog, Coimbatore cycling" />
        <link rel="canonical" href="https://cyclebees.com/blog" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="CycleBees Blog - Cycling Tips & Guides" />
        <meta property="og:description" content="Expert cycling tips, maintenance guides, and industry insights from CycleBees professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-app.webp" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CycleBees Blog - Cycling Tips & Guides" />
        <meta name="twitter:description" content="Expert cycling tips, maintenance guides, and industry insights from CycleBees professionals." />
        <meta name="twitter:image" content="/hero-app.webp" />
        
        {/* Structured Data for Blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "CycleBees Blog",
              "description": "Expert cycling tips, maintenance guides, and industry insights from CycleBees professionals.",
              "url": "https://cyclebees.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "CycleBees",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://cyclebees.com/logo.webp"
                }
              },
              "blogPost": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "image": post.image,
                "author": {
                  "@type": "Person",
                  "name": post.author
                },
                "datePublished": post.date,
                "url": `https://cyclebees.com/blog/${post.id}`
              }))
            })
          }}
        />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[30vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
                CycleBees Blog
              </h1>
              <p className="text-lg text-secondary-100/90 max-w-2xl mx-auto">
                Expert cycling tips, maintenance guides, and industry insights to keep you rolling smoothly
              </p>
            </div>
          </div>
        </section>

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
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-secondary-100 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-xs text-secondary-600 mb-3">
                        <span>{post.date}</span>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
              />
              <button className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogIndexPage;