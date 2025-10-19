import React, { useState } from 'react';
import Image from 'next/image';

const HowItWorksSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const navButtonStyles = "w-8 h-8 bg-secondary-100/20 rounded-full flex items-center justify-center text-secondary-100 hover:bg-secondary-100/30 transition-colors duration-200";
  
  const steps = [
    {
      number: '1',
      title: 'Select Service/Rental',
      description: 'Choose from our comprehensive range of services or rental bicycles.',
      icon: '🔧'
    },
    {
      number: '2',
      title: 'Confirm Slot & Address',
      description: 'Pick your preferred time slot and confirm your location.',
      icon: '📍'
    },
    {
      number: '3',
      title: 'Pay Securely in App',
      description: 'Complete payment securely through our app with multiple payment options.',
      icon: '💳'
    },
    {
      number: '4',
      title: 'We Arrive & Deliver',
      description: 'Our certified mechanic arrives at your doorstep with all necessary tools.',
      icon: '✅'
    }
  ];

  return (
    <section id="howItWorks" className="bg-white py-10 sm:py-8 my-5 border-t border-light-yellow border-b border-light-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">
            How CycleBees Works
          </h2>
          <p className="text-sm text-secondary-600 max-w-xl mx-auto">
            Professional bicycle service in just 4 simple steps
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="relative flex-1 hidden md:flex items-center py-2">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary transform -translate-y-1/2"></div>
          <div className="grid grid-cols-4 gap-4 w-full">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-10 h-10 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center text-sm relative z-10">
                  <span className="text-secondary-100 font-bold">{step.number}</span>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-md border border-secondary-300/20">
                  <div className="text-xl mb-1">{step.icon}</div>
                  <h3 className="text-sm font-bold text-secondary-100 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-secondary-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden flex-1 py-2">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-lg">
              <span className="text-secondary-100 font-bold">{steps[currentSlide].number}</span>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-secondary-300/20 mb-4">
              <div className="text-2xl mb-2">{steps[currentSlide].icon}</div>
              <h3 className="text-lg font-bold text-secondary-100 mb-2">
                {steps[currentSlide].title}
              </h3>
              <p className="text-sm text-secondary-600 mb-4">
                {steps[currentSlide].description}
              </p>
            </div>
            
            <div className="flex justify-center items-center space-x-4">
              <button onClick={prevSlide} className={navButtonStyles}>
                ‹
              </button>
              
              <div className="flex justify-center space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-primary' : 'bg-secondary-300/30'
                    }`}
                  />
                ))}
              </div>
              
              <button onClick={nextSlide} className={navButtonStyles}>
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;