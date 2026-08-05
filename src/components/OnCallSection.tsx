import React from 'react';
import Icon, { IconName } from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import CarouselControls from '@/components/CarouselControls';
import useCarousel from '@/hooks/useCarousel';

const benefits: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Less Time Consuming',
    description:
      'Average arrival: ~60 minutes (we provide a 60–90 minute arrival window at booking).',
    icon: 'clock',
  },
  {
    title: 'Book in Real-Time',
    description:
      'Schedule from home, office or on the move—track your mechanic live.',
    icon: 'phone-app',
  },
  {
    title: 'Sit & Relax',
    description:
      'Enjoy your coffee while we service your ride at your doorstep.',
    icon: 'coffee',
  },
  {
    title: 'Professional Quality',
    description:
      'Certified mechanics with premium tools ensure your bike gets expert care.',
    icon: 'wrench',
  },
];

const OnCallSection: React.FC = () => {
  const { index, setIndex, next, previous, swipeHandlers } = useCarousel(
    benefits.length
  );
  const current = benefits[index];

  return (
    <section
      id="onCall"
      className="bg-secondary-300/10 py-10 sm:py-8 my-5 border-t border-light-yellow border-b border-light-yellow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <SectionHeading
          eyebrow="How it feels"
          title="Mechanic-on-Call Service"
          lead="Professional service at your doorstep."
          className="mb-8"
        />

        {/* Desktop grid */}
        <ul className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 flex-1 items-stretch mb-4">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="bg-white border border-secondary-300/30 rounded-xl p-6 text-center shadow-md hover:shadow-lg hover:border-primary transition-all duration-150"
            >
              <span className="w-16 h-16 mx-auto mb-4 bg-primary/20 text-secondary-100 rounded-full flex items-center justify-center">
                <Icon name={benefit.icon} className="w-8 h-8" />
              </span>
              <h3 className="text-lg font-bold text-secondary-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Mobile carousel */}
        <div className="md:hidden flex-1 mb-4">
          <div
            className="bg-white border border-secondary-300/30 rounded-xl p-6 text-center shadow-md"
            {...swipeHandlers}
          >
            <span className="w-16 h-16 mx-auto mb-4 bg-primary/20 text-secondary-100 rounded-full flex items-center justify-center">
              <Icon name={current.icon} className="w-8 h-8" />
            </span>
            <h3 className="text-lg font-bold text-secondary-100 mb-3">
              {current.title}
            </h3>
            <p className="text-sm text-secondary-600 leading-relaxed mb-4">
              {current.description}
            </p>

            <CarouselControls
              count={benefits.length}
              index={index}
              onSelect={setIndex}
              onPrevious={previous}
              onNext={next}
              label="benefit"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
            <span className="text-secondary-100 font-semibold text-sm">
              Regular bookings: 6:00 AM — 10:00 PM • Emergency on-road assist:
              available 24/7
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnCallSection;
