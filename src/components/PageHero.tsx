import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { BrandWatermark } from '@/components/BrandMark';

/**
 * Shared hero band for the inner pages.
 *
 * Every page previously hand-rolled the same `min-h-[30vh]` gradient block with
 * a slightly different heading size and padding, which is why the pages did not
 * feel like one site. This owns the treatment: identical gradient, spacing and
 * type scale, with the brand mark bled into the corners for depth.
 */
const PageHero: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ eyebrow, title, lead, children }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-28 pb-12 border-b border-light-yellow">
    <BrandWatermark className="-left-24 -top-16 w-72 h-72 text-secondary-100/[0.05]" />
    <BrandWatermark className="-right-28 -bottom-24 w-96 h-96 text-white/[0.16]" />

    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={lead} />
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default PageHero;
