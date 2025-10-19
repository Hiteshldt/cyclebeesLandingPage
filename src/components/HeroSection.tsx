import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const buttonStyles = "bg-secondary-100 text-white px-6 py-3 rounded-lg hover:bg-secondary-100/90 transition-colors duration-150 font-semibold shadow-lg";

  const handleDownloadApp = () => {
    alert('Coming Soon!');
  };

  const handleBookService = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[85vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-20 sm:pt-16 pb-6 sm:pb-8 border-b border-light-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-100 mb-6 leading-tight">
              Your Ride.{' '}
              <br />
              <span className="text-secondary-100">Our Responsibility.</span>
            </h1>
            
            <p className="text-base md:text-lg text-secondary-100/90 mb-6 max-w-xl">
              Book Professional mechanics at your doorstep for Repair and Rentals for all kinds of bicycle
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button onClick={handleDownloadApp} className={buttonStyles}>
                Download App
              </button>
              <button onClick={handleBookService} className={buttonStyles}>
                Book Service
              </button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-secondary-100">⭐ 4.8 / 5</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-secondary-100">🚴 1000+ riders served</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-secondary-100">⏱️ Avg arrival: ~60 minutes</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary-100/30 blur-2xl rounded-full transform scale-110"></div>
              <div className="relative z-10">
                <Image
                  src="/hero-app.webp"
                  alt="CycleBees Mobile App"
                  width={400}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;