import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CarouselControls from '@/components/CarouselControls';
import useCarousel from '@/hooks/useCarousel';

const features = [
  {
    title: 'Doorstep Convenience',
    content:
      'No more hauling your bicycle to distant repair shops or waiting in long queues. Our certified mechanics come directly to your home, office, or wherever you are in Coimbatore. We bring all the necessary tools and equipment, transforming any location into a professional service center.',
  },
  {
    title: 'Trained Professionals',
    content:
      "Every CycleBees mechanic undergoes rigorous training and background verification. With years of experience across all bicycle types—from kids' cycles to professional road bicycles and e-bicycles—our team ensures expert handling of your valuable ride with precision and care.",
  },
  {
    title: 'Competitive & Transparent',
    content:
      'We believe in honest pricing with zero surprises. Get upfront quotes before any work begins, with detailed breakdowns of parts and labor costs. Our competitive rates, combined with premium service quality, deliver exceptional value for your investment.',
  },
  {
    title: 'Always-On Support',
    content:
      "Bicycle emergencies don't follow business hours, and neither do we. Our 24/7 support team and emergency on-road assistance ensure you're never stranded. Whether it's a flat tire during your morning commute or a chain issue during your evening ride, we're just a call away.",
  },
];

/**
 * The desktop cards previously rendered `content.substring(0, 140) + '...'`,
 * so roughly half of this section's copy never reached the page — with no way
 * to expand it. Crawlers saw the truncation too, on the one section written to
 * carry the long-form keyword copy. The full text is rendered now.
 */
const WhyUsSection: React.FC = () => {
  const { index, setIndex, next, previous, swipeHandlers } = useCarousel(
    features.length
  );
  const current = features[index];

  return (
    <section
      id="whyUs"
      className="bg-white py-10 sm:py-8 my-5 border-t border-light-yellow border-b border-light-yellow"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <SectionHeading
          eyebrow="Why us"
          title="The CycleBees Difference"
          lead="Why thousands of riders trust us."
          className="mb-10"
        />

        {/* Desktop grid */}
        <ol className="hidden md:grid grid-cols-2 gap-6 flex-1">
          {features.map((feature, position) => (
            <li
              key={feature.title}
              className="bg-secondary-300/10 rounded-lg p-5 flex items-start gap-3"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary-100 font-bold text-sm">
                {position + 1}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-secondary-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {feature.content}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Mobile carousel */}
        <div className="md:hidden flex-1">
          <div
            className="bg-secondary-300/10 rounded-lg p-5 mb-4 flex items-start gap-3"
            {...swipeHandlers}
          >
            <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary-100 font-bold text-sm">
              {index + 1}
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-secondary-100 mb-2">
                {current.title}
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                {current.content}
              </p>
            </div>
          </div>

          <CarouselControls
            count={features.length}
            index={index}
            onSelect={setIndex}
            onPrevious={previous}
            onNext={next}
            label="reason"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
