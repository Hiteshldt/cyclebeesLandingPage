import React from 'react';
import Image from 'next/image';
import Icon, { IconName } from '@/components/Icon';
import BrandMark, { BrandWatermark } from '@/components/BrandMark';
import { BUSINESS_INFO } from '@/constants';

const TRUST_SIGNALS: { icon: IconName; label: string }[] = [
  { icon: 'star', label: `${BUSINESS_INFO.RATING} / 5 rated` },
  { icon: 'bike', label: `${BUSINESS_INFO.CUSTOMERS_SERVED} riders served` },
  { icon: 'clock', label: `Avg arrival: ${BUSINESS_INFO.AVG_ARRIVAL_TIME}` },
];

const HeroSection: React.FC = () => {
  const handleDownloadApp = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookService = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[85vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-24 sm:pt-20 pb-10 sm:pb-12 border-b border-light-yellow"
    >
      <BrandWatermark className="-left-28 -top-20 w-80 h-80 text-secondary-100/[0.05]" />
      <BrandWatermark className="-right-40 -bottom-32 w-[30rem] h-[30rem] text-white/[0.13]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 bg-secondary-100 text-primary text-xs font-semibold uppercase tracking-[0.12em] px-3.5 py-2 rounded-full mb-6 shadow-sm">
              <BrandMark className="w-4 h-4" strokeWidth={6} />
              Doorstep service across Coimbatore
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-100 mb-6 leading-tight">
              Your Ride.
              <br />
              <span className="text-secondary-100">Our Responsibility.</span>
            </h1>

            <p className="text-base md:text-lg text-secondary-100/90 mb-6 max-w-xl mx-auto lg:mx-0">
              Book professional mechanics at your doorstep for repair and rentals
              for all kinds of bicycle
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button
                onClick={handleDownloadApp}
                className="inline-flex items-center justify-center gap-2 bg-secondary-100 text-white px-6 py-3 rounded-lg hover:bg-secondary-100/90 transition-colors duration-150 font-semibold shadow-lg"
              >
                <Icon name="phone-app" className="w-5 h-5" />
                Download App
              </button>
              <button
                onClick={handleBookService}
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary-100 px-6 py-3 rounded-lg hover:bg-white/90 transition-colors duration-150 font-semibold shadow-lg border border-secondary-100/10"
              >
                <Icon name="wrench" className="w-5 h-5" />
                Book Service
              </button>
            </div>

            <ul className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
              {TRUST_SIGNALS.map((signal) => (
                <li
                  key={signal.label}
                  className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur-sm px-3 py-1.5 rounded-full text-secondary-100 font-medium"
                >
                  <Icon name={signal.icon} className="w-4 h-4" />
                  {signal.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary-100/30 blur-2xl rounded-full transform scale-110"></div>
              <div className="relative z-10">
                <Image
                  src="/hero-app.webp"
                  alt="The CycleBees app showing a doorstep bicycle service booking"
                  width={400}
                  height={800}
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
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
