import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';

// Lazy load below-the-fold components
const OnCallSection = dynamic(() => import('@/components/OnCallSection'), {
  loading: () => <div className="py-8 animate-pulse bg-gray-100 rounded-lg mx-4"></div>
});
const HowItWorksSection = dynamic(() => import('@/components/HowItWorksSection'), {
  loading: () => <div className="py-8 animate-pulse bg-gray-100 rounded-lg mx-4"></div>
});
const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'), {
  loading: () => <div className="py-8 animate-pulse bg-gray-100 rounded-lg mx-4"></div>
});
const WhyUsSection = dynamic(() => import('@/components/WhyUsSection'), {
  loading: () => <div className="py-8 animate-pulse bg-gray-100 rounded-lg mx-4"></div>
});
const BlogSection = dynamic(() => import('@/components/BlogSection'), {
  loading: () => <div className="py-8 animate-pulse bg-gray-100 rounded-lg mx-4"></div>
});
const DownloadSection = dynamic(() => import('@/components/DownloadSection'), {
  loading: () => <div className="py-8 animate-pulse bg-gray-100 rounded-lg mx-4"></div>
});

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>CycleBees - Professional Bicycle Services</title>
        <meta name="description" content="Premium bicycle services at your doorstep. Expert repairs, quality rentals & professional coaching. Trusted by riders across Coimbatore." />
        <meta name="keywords" content="professional bicycle repair, premium bike service, expert mobile mechanic, quality bike rental, professional cycling coach, Coimbatore bicycle services" />
        <link rel="canonical" href="https://cyclebees.com" />
      </Head>
      
      <Layout>
        <HeroSection />
        <ServicesSection />
        <OnCallSection />
        <HowItWorksSection />
        <BenefitsSection />
        <WhyUsSection />
        <BlogSection />
        <DownloadSection />
      </Layout>
    </>
  );
};

export default Home;