import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import DownloadAppSection from '@/components/DownloadAppSection';

const ServicesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    preferredDateTime: '',
    address: '',
    bikeType: ''
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const repairServices = [
    { name: 'Chain Repair', icon: '🔗', description: 'Chain cleaning & replacement' },
    { name: 'Brake Tuning', icon: '🛑', description: 'Brake adjustment & safety check' },
    { name: 'Gear Adjustment', icon: '⚙️', description: 'Smooth gear shifting setup' },
    { name: 'Tyre Service', icon: '🛞', description: 'Puncture repair & replacement' },
    { name: 'Wheel Truing', icon: '⚪', description: 'Wheel alignment & balancing' },
    { name: 'Full Service', icon: '🔧', description: 'Complete bike maintenance' },
    { name: 'Quick Wash', icon: '💧', description: 'Professional bike cleaning' },
    { name: 'Emergency Assist', icon: '🚨', description: '24/7 roadside support' }
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service booking:', formData);
    // Add booking logic here
  };

  return (
    <>
      <Head>
        <title>Services - CycleBees Professional Bike Service</title>
        <meta name="description" content="Complete range of bicycle services from doorstep repairs to full overhauls. Expert mechanics, transparent pricing, quality guaranteed." />
        <meta name="keywords" content="bike service, bicycle repair, doorstep service, bike maintenance, Coimbatore" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[30vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
                Professional Bicycle Services
              </h1>
              <p className="text-lg text-secondary-100/90 max-w-2xl mx-auto">
                Expert repairs, premium quality, trusted by riders across Coimbatore
              </p>
            </div>
          </div>
        </section>

        {/* Repair Services Section */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Repair Services</h2>
              <p className="text-base text-secondary-600 max-w-lg mx-auto">Professional bicycle repair and maintenance services</p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              {repairServices.map((service, index) => (
                <div key={index} className="bg-white border border-secondary-300 rounded-lg p-4 text-center hover:border-primary transition-all duration-300 hover:shadow-lg group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-sm font-bold text-secondary-100 mb-2">{service.name}</h3>
                  <p className="text-xs text-secondary-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-100/5 to-primary/5 border-t border-light-yellow border-b border-light-yellow relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/cyclebees_services_page.webp"
              alt="CycleBees Services"
              fill
              className="object-cover object-left-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white/90"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column - Info Cards */}
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Service Information</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📍</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Service Areas</h3>
                    <p className="text-xs text-secondary-600">All areas across Coimbatore city limits</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📞</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Contact Information</h3>
                    <p className="text-xs text-secondary-600">Phone: +91 95973 12212<br/>Email: mail@cyclebees.in</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 mt-4">
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">💰</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Visit Fee</h3>
                    <p className="text-xs text-secondary-600">Visit fee: ₹299 (technician callout; parts & replacements billed separately with an upfront quote)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">⏰</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Service Hours</h3>
                    <p className="text-xs text-secondary-600">Regular bookings: 6:00 AM — 10:00 PM<br/>Emergency on-road assist: available 24/7</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Response Time</h3>
                    <p className="text-xs text-secondary-600">Avg arrival: ~60 minutes (we provide a 60–90 minute arrival window at booking)</p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Book Your Service</h2>
                </div>
              </div>
              
              {/* Right Column - Form */}
              <div>
                <div className="bg-white rounded-xl shadow-xl border border-primary/20 p-6">
                  <form onSubmit={handleSubmit} className="space-y-4" role="form" aria-label="Service booking form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service-name" className="block text-sm font-medium text-secondary-100 mb-1">Full Name <span className="text-red-500 sr-only">required</span></label>
                        <input
                          id="service-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service-phone" className="block text-sm font-medium text-secondary-100 mb-1">Phone Number <span className="text-red-500 sr-only">required</span></label>
                        <input
                          id="service-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          pattern="[0-9]{10}"
                          aria-describedby="phone-help"
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service-type" className="block text-sm font-medium text-secondary-100 mb-1">Service Type <span className="text-red-500 sr-only">required</span></label>
                        <select
                          id="service-type"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        >
                          <option value="">Select a service</option>
                          {repairServices.map((service, index) => (
                            <option key={index} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="bike-type" className="block text-sm font-medium text-secondary-100 mb-1">Bike Type <span className="text-red-500 sr-only">required</span></label>
                        <select
                          id="bike-type"
                          name="bikeType"
                          value={formData.bikeType}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        >
                          <option value="">Select bike type</option>
                          <option value="mountain">Mountain Bike</option>
                          <option value="road">Road Bike</option>
                          <option value="hybrid">Hybrid Bike</option>
                          <option value="electric">Electric Bike</option>
                          <option value="kids">Kids Bike</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferred-datetime" className="block text-sm font-medium text-secondary-100 mb-1">Preferred Date & Time <span className="text-red-500 sr-only">required</span></label>
                      <input
                        id="preferred-datetime"
                        type="datetime-local"
                        name="preferredDateTime"
                        value={formData.preferredDateTime}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="service-address" className="block text-sm font-medium text-secondary-100 mb-1">Service Address <span className="text-red-500 sr-only">required</span></label>
                      <textarea
                        id="service-address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none text-sm bg-gray-50/50"
                        placeholder="Complete address where service is needed"
                      />
                    </div>

                    <div className="text-center pt-2">
                      <p className="text-xs text-secondary-600 mb-3">Visit fee: ₹299 • Estimated arrival: ~60 minutes (60–90 min window)</p>
                      <button
                        type="submit"
                        className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl text-sm transform hover:scale-105"
                      >
                        Book Service Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-8 bg-gradient-to-br from-secondary-100 to-secondary-400 border-t border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Why Choose CycleBees?</h2>
              <p className="text-base text-white/90">Experience the difference with professional service</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl mx-auto mb-3">👨‍🔧</div>
                <h3 className="text-base font-bold text-white mb-2">Certified Technicians</h3>
                <p className="text-sm text-white/90">Background-checked and trained through the CycleBees Academy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl mx-auto mb-3">💰</div>
                <h3 className="text-base font-bold text-white mb-2">Transparent Pricing</h3>
                <p className="text-sm text-white/90">No hidden charges or surprise costs. Exact price before service</p>
                <div className="mt-2 text-primary font-bold text-sm">No Hidden Fees</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl mx-auto mb-3">⭐</div>
                <h3 className="text-base font-bold text-white mb-2">Quality Guarantee</h3>
                <p className="text-sm text-white/90">100% satisfaction guaranteed. Free re-service or full refund</p>
                <div className="mt-2 text-primary font-bold text-sm">100% Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl mx-auto mb-3">🚀</div>
                <h3 className="text-base font-bold text-white mb-2">Fast Response</h3>
                <p className="text-sm text-white/90">Quick doorstep service with professional equipment</p>
                <div className="mt-2 text-primary font-bold text-sm">Avg arrival: ~60 minutes</div>
                <div className="text-sm text-white/80">(60–90 min window)</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 my-3 bg-secondary-300/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">Frequently Asked Questions</h2>
              <p className="text-base text-secondary-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How quickly can you reach my location?',
                  answer: 'For scheduled bookings we provide a 60–90 minute arrival window and show live ETA in the app. For emergency on-road assist use the in-app emergency button or call/WhatsApp the urgent line — emergency support is available 24/7.'
                },
                {
                  question: 'Is there a service charge for coming to my location?',
                  answer: 'Yes — a visit fee of ₹299 covers the technician callout. Parts and replacements are billed separately and only installed after you approve the upfront quote.'
                },
                {
                  question: 'What types of bicycles do you service?',
                  answer: 'We service kid\'s bikes, commuters, hybrid, road, MTB and e-bikes (including e-bike diagnostics and common electric system checks). Our mechanics are trained in <a href="https://www.parktool.com/blog/repair-help" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">professional repair techniques</a> for all bicycle types.'
                },
                {
                  question: 'What workmanship guarantee do you provide?',
                  answer: 'Every repair includes a 7-day workmanship guarantee. If the issue recurs within that window, we\'ll re-service it at no additional labour cost.'
                },
                {
                  question: 'How do I book a service or get urgent help?',
                  answer: 'Book via the CycleBees app (iOS/Android) or on the website. For urgent on-road assistance use the in-app emergency button or call/WhatsApp +91 95973 12212.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-secondary-300/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-secondary-300/5 transition-colors duration-200"
                  >
                    <h3 className="text-base font-bold text-secondary-100 pr-4">{faq.question}</h3>
                    <div className={`text-primary transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      openFAQ === index 
                        ? 'max-h-64 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 border-t border-secondary-300/20 bg-gradient-to-br from-primary/5 to-secondary-100/5">
                      <p className="text-sm leading-relaxed text-secondary-600 pt-4">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        {/* Download App Section */}
        <DownloadAppSection />
      </Layout>
    </>
  );
};

export default ServicesPage;