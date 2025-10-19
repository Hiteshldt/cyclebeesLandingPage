import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { BlogPost } from '@/types';
import { blogPosts } from '@/data/blogPosts';

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-secondary-100 mb-4">Post not found</h1>
            <Link href="/blog" className="text-primary hover:text-primary/80">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - CycleBees Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`CycleBees, cycling, ${post.category.toLowerCase()}, bicycle maintenance, Coimbatore`} />
        <link rel="canonical" href={`https://cyclebees.com/blog/${post.id}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={`${post.title} - CycleBees Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - CycleBees Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Structured Data for Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": post.excerpt,
              "image": post.image,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "CycleBees",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://cyclebees.com/logo.webp"
                }
              },
              "datePublished": post.date,
              "dateModified": post.date,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://cyclebees.com/blog/${post.id}`
              }
            })
          }}
        />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[40vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="w-full">
              <Link 
                href="/blog"
                className="mb-6 flex items-center text-secondary-100 hover:text-secondary-100/80 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>

              <div className="mb-4">
                <span className="bg-secondary-100 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center text-secondary-100/90 text-sm">
                <span>By {post.author}</span>
                <span className="mx-3">•</span>
                <span>{post.date}</span>
                <span className="mx-3">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article>
              <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-lg md:text-xl font-bold text-secondary-100 mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (paragraph.includes('**')) {
                    const htmlContent = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-secondary-100">$1</strong>');
                    return (
                      <p 
                        key={index} 
                        className="text-secondary-600 mb-4 leading-relaxed text-base"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                      />
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc list-inside text-secondary-600 mb-4 space-y-2 text-base ml-4">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="leading-relaxed">{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p 
                      key={index} 
                      className="text-secondary-600 mb-4 leading-relaxed text-base"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  );
                })}
              </div>
            </article>
          </div>
        </section>

        {/* Share & Navigation Section */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-300/20 to-primary/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-secondary-600 text-sm">Share this article:</span>
                <button 
                  onClick={() => {
                    const text = `${post.title} - ${post.excerpt}`;
                    const url = `${window.location.origin}/blog/${post.id}`;
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                  }}
                  className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                >
                  Share on WhatsApp
                </button>
              </div>
              <Link 
                href="/blog"
                className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md text-sm"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id.toString() }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((post) => post.id.toString() === params?.id);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    }
  };
};

export default BlogPostPage;