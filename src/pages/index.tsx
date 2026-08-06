import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import BrandMark from '@/components/BrandMark';
import Seo from '@/components/Seo';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from '@/lib/schema';

/**
 * Below-the-fold sections are code-split. The placeholder reserves roughly the
 * height of the real section so the swap does not shift the page (CLS).
 */
const placeholder = () => (
  <div className="min-h-[280px] flex items-center justify-center bg-secondary-300/10 mx-4 rounded-lg">
    <BrandMark className="w-12 text-secondary-300 animate-pulse" />
  </div>
);

const OnCallSection = dynamic(() => import('@/components/OnCallSection'), {
  loading: placeholder,
});
const HowItWorksSection = dynamic(
  () => import('@/components/HowItWorksSection'),
  { loading: placeholder }
);
const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'), {
  loading: placeholder,
});
const WhyUsSection = dynamic(() => import('@/components/WhyUsSection'), {
  loading: placeholder,
});
const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'), {
  loading: placeholder,
});
const BlogSection = dynamic(() => import('@/components/BlogSection'), {
  loading: placeholder,
});
const DownloadSection = dynamic(() => import('@/components/DownloadSection'), {
  loading: placeholder,
});

const Home: React.FC = () => (
  <>
    <Seo
      title="Doorstep Bicycle Service in Coimbatore"
      description="Book certified bicycle mechanics at your doorstep in Coimbatore. Repairs, servicing, e-bike diagnostics and rentals with upfront pricing and ~60 minute arrival."
      path="/"
      jsonLd={[organizationSchema, localBusinessSchema, websiteSchema]}
    />

    <Layout>
      <HeroSection />
      <ServicesSection />
      <OnCallSection />
      <HowItWorksSection />
      <BenefitsSection />
      <WhyUsSection />
      <ReviewsSection />
      <BlogSection />
      <DownloadSection />
    </Layout>
  </>
);

export default Home;
