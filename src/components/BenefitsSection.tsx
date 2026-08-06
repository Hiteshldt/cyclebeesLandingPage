import React from 'react';
import Icon, { IconName } from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import { BrandWatermark } from '@/components/BrandMark';
import CarouselControls from '@/components/CarouselControls';
import useCarousel from '@/hooks/useCarousel';

const benefits: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Certified Technicians',
    description:
      'Trained, background-checked mechanics with years of experience in bicycle repair and maintenance.',
    icon: 'mechanic',
  },
  {
    title: 'Transparent Pricing',
    description:
      "Up-front quotes with no hidden fees. You know exactly what you're paying for before we start.",
    icon: 'rupee',
  },
  {
    title: 'Genuine Parts',
    description:
      'We use only OEM and high-grade spare parts to ensure your bicycle performs at its best.',
    icon: 'gear',
  },
  {
    title: '100% Satisfaction',
    description:
      "Re-service free if you're not happy. Your satisfaction is our top priority.",
    icon: 'shield',
  },
];

const stats = [
  { value: '20+', label: 'Repair Services Available' },
  { value: '4.8', label: 'Average Rating', showStar: true },
  { value: '24/7', label: 'Including Emergency Support' },
];

const BenefitsSection: React.FC = () => {
  const { index, setIndex, next, previous, swipeHandlers } = useCarousel(
    benefits.length
  );
  const current = benefits[index];

  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-gradient-to-br from-secondary-100 to-secondary-400 py-12 sm:py-10 my-5 border-t border-light-yellow border-b border-light-yellow"
    >
      <BrandWatermark className="-left-20 -top-16 w-72 text-white/[0.05]" />
      <BrandWatermark className="-right-24 -bottom-20 w-96 text-primary/[0.06]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <SectionHeading
          eyebrow="The difference"
          title="Why Riders Love CycleBees"
          lead="Experience the difference with our professional service."
          tone="light"
          className="mb-10"
        />

        {/* Desktop grid */}
        <ul className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-colors duration-200"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-primary text-secondary-100">
                <Icon name={benefit.icon} className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center"
            {...swipeHandlers}
          >
            <span className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-primary text-secondary-100">
              <Icon name={current.icon} className="w-7 h-7" />
            </span>
            <h3 className="text-xl font-bold mb-3">{current.title}</h3>
            <p className="text-white/90 leading-relaxed mb-4 text-sm">
              {current.description}
            </p>

            <CarouselControls
              count={benefits.length}
              index={index}
              onSelect={setIndex}
              onPrevious={previous}
              onNext={next}
              label="benefit"
              tone="light"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <dl className="inline-flex flex-wrap justify-center items-center gap-x-8 gap-y-4 bg-white/10 backdrop-blur-sm rounded-3xl px-8 py-4">
            {stats.map((stat, position) => (
              <React.Fragment key={stat.label}>
                {position > 0 && (
                  <span
                    className="hidden sm:block w-px h-8 bg-white/20"
                    aria-hidden="true"
                  ></span>
                )}
                <div className="text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="text-2xl font-bold text-primary inline-flex items-center gap-1">
                      {stat.value}
                      {stat.showStar && <Icon name="star" className="w-5 h-5" />}
                    </span>
                    <span className="block text-sm text-white/80">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
