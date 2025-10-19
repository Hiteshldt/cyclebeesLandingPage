import React, { useState } from 'react';

const WhyUsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const navButtonStyles = "w-8 h-8 bg-secondary-300/20 rounded-full flex items-center justify-center text-secondary-100 hover:bg-secondary-300/30 transition-colors duration-200";
  
  const features = [
    {
      title: 'Doorstep Convenience',
      content: 'No more hauling your bicycle to distant repair shops or waiting in long queues. Our certified mechanics come directly to your home, office, or wherever you are in Coimbatore. We bring all the necessary tools and equipment, transforming any location into a professional service center.'
    },
    {
      title: 'Trained Professionals',
      content: 'Every CycleBees mechanic undergoes rigorous training and background verification. With years of experience across all bicycle types—from kids\' cycles to professional road bicycles and e-bicycles—our team ensures expert handling of your valuable ride with precision and care.'
    },
    {
      title: 'Competitive & Transparent',
      content: 'We believe in honest pricing with zero surprises. Get upfront quotes before any work begins, with detailed breakdowns of parts and labor costs. Our competitive rates, combined with premium service quality, deliver exceptional value for your investment.'
    },
    {
      title: 'Always-On Support',
      content: 'Bicycle emergencies don\'t follow business hours, and neither do we. Our 24/7 support team and emergency on-road assistance ensure you\'re never stranded. Whether it\'s a flat tire during your morning commute or a chain issue during your evening ride, we\'re just a call away.'
    }
  ];

  return (
    <section id="whyUs" className="bg-white py-10 sm:py-8 my-5 border-t border-light-yellow border-b border-light-yellow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">
            The CycleBees Difference
          </h2>
          <p className="text-sm text-secondary-600 max-w-xl mx-auto">
            Why thousands of riders trust us
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 gap-6 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary-300/10 rounded-lg p-5">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary-100 font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {feature.content.substring(0, 140)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden flex-1">
          <div 
            className="bg-secondary-300/10 rounded-lg p-5 mb-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary-100 font-bold text-sm">
                  {currentSlide + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-secondary-100 mb-2">
                  {features[currentSlide].title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {features[currentSlide].content.substring(0, 180)}...
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-4">
            <button onClick={prevSlide} className={navButtonStyles}>
              ‹
            </button>
            
            <div className="flex justify-center space-x-2">
              {features.map((_, index) => (
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
    </section>
  );
};

export default WhyUsSection;