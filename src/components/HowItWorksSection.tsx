import React from 'react';
import Icon, { IconName } from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import CarouselControls from '@/components/CarouselControls';
import useCarousel from '@/hooks/useCarousel';

const steps: {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    number: '1',
    title: 'Select Service/Rental',
    description:
      'Choose from our comprehensive range of services or rental bicycles.',
    icon: 'wrench',
  },
  {
    number: '2',
    title: 'Confirm Slot & Address',
    description: 'Pick your preferred time slot and confirm your location.',
    icon: 'pin',
  },
  {
    number: '3',
    title: 'Pay Securely in App',
    description:
      'Complete payment securely through our app with multiple payment options.',
    icon: 'card',
  },
  {
    number: '4',
    title: 'We Arrive & Deliver',
    description:
      'Our certified mechanic arrives at your doorstep with all necessary tools.',
    icon: 'check-circle',
  },
];

const HowItWorksSection: React.FC = () => {
  const { index, setIndex, next, previous, swipeHandlers } = useCarousel(
    steps.length
  );
  const current = steps[index];

  return (
    <section
      id="howItWorks"
      className="bg-white py-10 sm:py-8 my-5 border-t border-light-yellow border-b border-light-yellow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <SectionHeading
          eyebrow="The process"
          title="How CycleBees Works"
          lead="Professional bicycle service in just 4 simple steps."
          className="mb-10"
        />

        {/* Desktop timeline */}
        <div className="relative flex-1 hidden md:flex items-center py-2">
          <div
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary transform -translate-y-1/2"
            aria-hidden="true"
          ></div>
          <ol className="grid grid-cols-4 gap-4 w-full">
            {steps.map((step) => (
              <li key={step.number} className="text-center relative">
                <span className="w-10 h-10 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center text-sm relative z-10">
                  <span className="text-secondary-100 font-bold">
                    {step.number}
                  </span>
                </span>
                <div className="bg-white rounded-lg p-3 shadow-md border border-secondary-300/20">
                  <span className="inline-flex text-secondary-100 mb-1">
                    <Icon name={step.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-sm font-bold text-secondary-100 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-secondary-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden flex-1 py-2">
          <div className="text-center" {...swipeHandlers}>
            <span className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-lg">
              <span className="text-secondary-100 font-bold">
                {current.number}
              </span>
            </span>
            <div className="bg-white rounded-lg p-4 shadow-md border border-secondary-300/20 mb-4">
              <span className="inline-flex text-secondary-100 mb-2">
                <Icon name={current.icon} className="w-7 h-7" />
              </span>
              <h3 className="text-lg font-bold text-secondary-100 mb-2">
                {current.title}
              </h3>
              <p className="text-sm text-secondary-600">
                {current.description}
              </p>
            </div>

            <CarouselControls
              count={steps.length}
              index={index}
              onSelect={setIndex}
              onPrevious={previous}
              onNext={next}
              label="step"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
