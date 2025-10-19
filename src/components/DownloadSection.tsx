import React from 'react';
import Image from 'next/image';

const DownloadSection: React.FC = () => {
  const downloadButtonStyles = "bg-secondary-100 text-white px-4 py-2 rounded-lg hover:bg-secondary-100/90 transition-colors duration-150 font-semibold text-sm shadow-md hover:shadow-lg flex items-center justify-center";

  const handleDownloadApp = (platform: 'android' | 'ios') => {
    alert('Coming Soon!');
  };

  return (
    <section id="download" className="bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 py-6 border-t border-light-yellow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-100 mb-3 leading-tight">
              Ready to Ride?{' '}
              <span className="text-secondary-100">Download CycleBees</span>{' '}
              Now
            </h2>
            
            <p className="text-sm text-secondary-100/90 mb-4 leading-relaxed max-w-lg">
              ✨ 1000+ riders trust CycleBees. Download now and get your first service at special discount!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4">
              <button onClick={() => handleDownloadApp('android')} className={downloadButtonStyles}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a.996.996 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.807 1.626L15.5 12l2.198-2.491zM5.864 2.658L16.802 8.99 14.5 11.293 5.864 2.658z"/>
                </svg>
                Android
              </button>
              <button onClick={() => handleDownloadApp('ios')} className={downloadButtonStyles}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iOS
              </button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start text-xs">
              <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-secondary-100 font-medium">🎉 20% Off</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-secondary-100 font-medium">📱 Easy Booking</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-secondary-100 font-medium">🚀 Quick Service</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary-100/20 opacity-30 blur-2xl rounded-full transform scale-110"></div>
              <div className="relative z-10">
                <Image
                  src="/hero-app.webp"
                  alt="CycleBees Mobile App Download"
                  width={280}
                  height={560}
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>
              
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary-100/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;