import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import DownloadAppSection from '@/components/DownloadAppSection';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const contactInfo = [
    {
      title: 'Phone',
      value: '+91 95973 12212',
      icon: '📞',
      description: 'Available 24/7 for emergencies'
    },
    {
      title: 'Email', 
      value: 'mail@cyclebees.in',
      icon: '✉️',
      description: 'We reply within 2 hours'
    },
    {
      title: 'Address',
      value: '79, Aarudhra Enclvae, Athipalayam Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035',
      icon: '📍', 
      description: 'Service across the city'
    },
    {
      title: 'Hours',
      value: '6 AM - 10 PM',
      icon: '🕐',
      description: 'Emergency service 24/7'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you reach my location?',
      answer: 'For scheduled bookings we provide a 60–90 minute arrival window and show live ETA in the app. For emergency on-road assist, emergency support is available 24/7.'
    },
    {
      question: 'Is there a service charge for coming to my location?',
      answer: 'Yes — a visit fee of ₹299 covers the technician callout. Parts and replacements are billed separately and only installed after you approve the upfront quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, debit/credit cards, netbanking and major wallets through the app. Cash on completion is available in select cases. All digital payments follow <a href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11142" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">RBI digital payment guidelines</a>.'
    },
    {
      question: 'What types of bicycles do you service?',
      answer: 'We service kid\'s bikes, commuters, hybrid, road, MTB and e-bikes (including e-bike diagnostics and common electric system checks).'
    },
    {
      question: 'How do I book a service appointment?',
      answer: 'Book via the CycleBees app (iOS/Android) or on the website. For urgent on-road assistance use the in-app emergency button or call/WhatsApp +91 95973 12212.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    // Add form submission logic here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - CycleBees Customer Support</title>
        <meta name="description" content="Get in touch with CycleBees for bike service inquiries, support, or feedback. Available 24/7 with quick response times across Coimbatore." />
        <meta name="keywords" content="CycleBees contact, bike service support, Coimbatore bike repair contact, customer service" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[30vh] bg-gradient-to-br from-secondary-200 via-primary to-secondary-300 pt-16 border-b border-light-yellow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-secondary-100/90 max-w-2xl mx-auto">
                Professional support & assistance - We're here to help 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
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
              
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-2">Contact Information</h2>
                          </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📞</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Phone</h3>
                    <p className="text-xs text-secondary-600">+91 95973 12212<br/>Available 24/7</p>
                          </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">✉️</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Email</h3>
                    <p className="text-xs text-secondary-600">mail@cyclebees.in<br/>Reply within 2 hours</p>
                          </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📍</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Address</h3>
                    <p className="text-xs text-secondary-600">
                      79, Aarudhra Enclvae, Athipalayam Rd, Saravanampatti,<br />
                      Coimbatore, Tamil Nadu 641035
                    </p>
                        </div>
                  
                  <div className="bg-white rounded-xl p-3 border border-primary/20 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:scale-105 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🕐</div>
                    <h3 className="text-sm font-bold text-secondary-100 mb-1">Hours</h3>
                    <p className="text-xs text-secondary-600">6 AM - 10 PM<br/>Emergency 24/7</p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <p className="text-base text-secondary-600">Professional support - We respond within one hour</p>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="flex items-start">
                <div className="bg-white rounded-xl shadow-xl border border-primary/20 p-6 w-full">
              {isSubmitted ? (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl mx-auto mb-3">
                    ✅
                  </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                      <p className="text-sm text-secondary-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" role="form" aria-label="Contact form">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-secondary-100 mb-1">Full Name <span className="text-red-500 sr-only">required</span></label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-describedby="name-error"
                        className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-secondary-100 mb-1">Email Address <span className="text-red-500 sr-only">required</span></label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                        className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                          <label htmlFor="contact-phone" className="block text-sm font-medium text-secondary-100 mb-1">Phone Number <span className="text-red-500 sr-only">required</span></label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-describedby="phone-error"
                        className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    
                    <div>
                          <label htmlFor="contact-subject" className="block text-sm font-medium text-secondary-100 mb-1">Subject <span className="text-red-500 sr-only">required</span></label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-describedby="subject-error"
                        className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm bg-gray-50/50"
                      >
                        <option value="">Select a subject</option>
                        <option value="service-inquiry">Service Inquiry</option>
                        <option value="booking-support">Booking Support</option>
                        <option value="technical-issue">Technical Issue</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-secondary-100 mb-1">Message <span className="text-red-500 sr-only">required</span></label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      aria-describedby="message-error"
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-secondary-300/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none text-sm bg-gray-50/50"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                      <div className="text-center pt-2">
                    <button
                      type="submit"
                          className="bg-primary text-secondary-100 px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl text-sm transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
                </div>
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
              {faqs.map((faq, index) => (
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

export default ContactPage;
