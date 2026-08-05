import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import { BrandWatermark } from '@/components/BrandMark';
import Icon, { IconName } from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import DownloadSection from '@/components/DownloadSection';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import {
  FormStatus,
  Honeypot,
  SubmitButton,
  WhatsAppFallback,
} from '@/components/FormBits';
import useEnquiryForm from '@/hooks/useEnquiryForm';
import { BUSINESS_INFO, CONTACT_INFO } from '@/constants';
import { breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/schema';

const repairServices: {
  name: string;
  icon: IconName;
  description: string;
}[] = [
  { name: 'Chain Repair', icon: 'chain', description: 'Chain cleaning & replacement' },
  { name: 'Brake Tuning', icon: 'brake', description: 'Brake adjustment & safety check' },
  { name: 'Gear Adjustment', icon: 'gear', description: 'Smooth gear shifting setup' },
  { name: 'Tyre Service', icon: 'tyre', description: 'Puncture repair & replacement' },
  { name: 'Wheel Truing', icon: 'wheel', description: 'Wheel alignment & balancing' },
  { name: 'Full Service', icon: 'wrench', description: 'Complete bike maintenance' },
  { name: 'Quick Wash', icon: 'droplet', description: 'Professional bike cleaning' },
  { name: 'Emergency Assist', icon: 'siren', description: '24/7 roadside support' },
];

const serviceInfo: {
  title: string;
  icon: IconName;
  body: React.ReactNode;
  wide?: boolean;
}[] = [
  {
    title: 'Service Areas',
    icon: 'map-pin',
    body: 'All areas across Coimbatore city limits',
  },
  {
    title: 'Contact Information',
    icon: 'phone',
    body: (
      <>
        <a
          href={`tel:+${CONTACT_INFO.WHATSAPP_NUMBER}`}
          className="hover:text-secondary-100 transition-colors duration-200"
        >
          {CONTACT_INFO.PHONE}
        </a>
        <br />
        <a
          href={`mailto:${CONTACT_INFO.EMAIL}`}
          className="hover:text-secondary-100 transition-colors duration-200"
        >
          {CONTACT_INFO.EMAIL}
        </a>
      </>
    ),
  },
  {
    title: 'Visit Fee',
    icon: 'rupee',
    wide: true,
    body: `Visit fee: ${BUSINESS_INFO.VISIT_FEE} (technician callout; parts & replacements billed separately with an upfront quote)`,
  },
  {
    title: 'Service Hours',
    icon: 'clock',
    body: (
      <>
        Regular bookings: 6:00 AM — 10:00 PM
        <br />
        Emergency on-road assist: available 24/7
      </>
    ),
  },
  {
    title: 'Response Time',
    icon: 'rocket',
    body: `Avg arrival: ${BUSINESS_INFO.AVG_ARRIVAL_TIME} (we provide a 60–90 minute arrival window at booking)`,
  },
];

const whyChoose: {
  title: string;
  icon: IconName;
  body: string;
  highlight?: string;
  sub?: string;
}[] = [
  {
    title: 'Certified Technicians',
    icon: 'mechanic',
    body: 'Background-checked and trained through the CycleBees Academy',
  },
  {
    title: 'Transparent Pricing',
    icon: 'rupee',
    body: 'No hidden charges or surprise costs. Exact price before service',
    highlight: 'No Hidden Fees',
  },
  {
    title: 'Quality Guarantee',
    icon: 'shield',
    body: '100% satisfaction guaranteed. Free re-service or full refund',
    highlight: '100% Guarantee',
  },
  {
    title: 'Fast Response',
    icon: 'rocket',
    body: 'Quick doorstep service with professional equipment',
    highlight: `Avg arrival: ${BUSINESS_INFO.AVG_ARRIVAL_TIME}`,
    sub: '(60–90 min window)',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'How quickly can you reach my location?',
    answer:
      'For scheduled bookings we provide a 60–90 minute arrival window and show live ETA in the app. For emergency on-road assist use the in-app emergency button or call/WhatsApp the urgent line — emergency support is available 24/7.',
    plainAnswer:
      'For scheduled bookings we provide a 60–90 minute arrival window and show live ETA in the app. For emergency on-road assist use the in-app emergency button or call/WhatsApp the urgent line — emergency support is available 24/7.',
  },
  {
    question: 'Is there a service charge for coming to my location?',
    answer:
      'Yes — a visit fee of ₹299 covers the technician callout. Parts and replacements are billed separately and only installed after you approve the upfront quote.',
    plainAnswer:
      'Yes — a visit fee of ₹299 covers the technician callout. Parts and replacements are billed separately and only installed after you approve the upfront quote.',
  },
  {
    question: 'What types of bicycles do you service?',
    answer: (
      <>
        We service kid&apos;s bikes, commuters, hybrid, road, MTB and e-bikes
        (including e-bike diagnostics and common electric system checks). Our
        mechanics are trained in{' '}
        <a
          href="https://www.parktool.com/blog/repair-help"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-100 font-medium underline hover:text-primary transition-colors duration-200"
        >
          professional repair techniques
        </a>{' '}
        for all bicycle types.
      </>
    ),
    plainAnswer:
      "We service kid's bikes, commuters, hybrid, road, MTB and e-bikes (including e-bike diagnostics and common electric system checks). Our mechanics are trained in professional repair techniques for all bicycle types.",
  },
  {
    question: 'What workmanship guarantee do you provide?',
    answer:
      "Every repair includes a 7-day workmanship guarantee. If the issue recurs within that window, we'll re-service it at no additional labour cost.",
    plainAnswer:
      "Every repair includes a 7-day workmanship guarantee. If the issue recurs within that window, we'll re-service it at no additional labour cost.",
  },
  {
    question: 'How do I book a service or get urgent help?',
    answer:
      'Book via the CycleBees app (iOS/Android) or on the website. For urgent on-road assistance use the in-app emergency button or call/WhatsApp +91 95973 12212.',
    plainAnswer:
      'Book via the CycleBees app (iOS/Android) or on the website. For urgent on-road assistance use the in-app emergency button or call/WhatsApp +91 95973 12212.',
  },
];

const inputStyles =
  'w-full px-3.5 py-2.5 rounded-lg border border-secondary-300/60 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary text-sm bg-white transition-shadow duration-150';

const labelStyles = 'block text-sm font-medium text-secondary-100 mb-1.5';

const INITIAL = {
  name: '',
  phone: '',
  serviceType: '',
  bikeType: '',
  preferredDateTime: '',
  address: '',
};

const ServicesPage: React.FC = () => {
  /**
   * Bookings post to `/api/contact` and land in the Zoho inbox via Resend.
   * This form previously only ran `console.log`, so every booking was lost.
   */
  const { values, status, errorMessage, handleChange, submit, honeypotProps } =
    useEnquiryForm('booking', INITIAL);

  return (
    <>
      <Seo
        title="Bicycle Repair & Service in Coimbatore"
        description="Doorstep bicycle repair in Coimbatore: chain, brakes, gears, tyres, wheel truing, full service and 24/7 emergency assist. ₹299 visit fee with upfront quotes."
        path="/services"
        jsonLd={[
          localBusinessSchema,
          faqSchema(
            faqs.map((faq) => ({
              question: faq.question,
              answer: faq.plainAnswer,
            }))
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />

      <Layout>
        <PageHero
          eyebrow="Doorstep repair"
          title="Professional Bicycle Services"
          lead="Expert repairs, premium quality, trusted by riders across Coimbatore."
        />

        {/* Repair services */}
        <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What we fix"
              title="Repair Services"
              lead="Professional bicycle repair and maintenance services."
              className="mb-10"
            />

            <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
              {repairServices.map((service) => (
                <li
                  key={service.name}
                  className="bg-white border border-secondary-300 rounded-lg p-4 text-center hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 mb-3 rounded-full bg-primary/20 text-secondary-100">
                    <Icon name={service.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="text-sm font-bold text-secondary-100 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service info + booking */}
        <section className="py-8 my-3 bg-gradient-to-br from-secondary-100/5 to-primary/5 border-t border-light-yellow border-b border-light-yellow relative overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Image
              src="/cyclebees_services_page.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-left-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white/90"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-6 text-center">
                  Service Information
                </h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceInfo.map((info) => (
                    <li
                      key={info.title}
                      className={`bg-white rounded-xl p-4 border border-primary/20 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 ${
                        info.wide ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-primary/20 text-secondary-100">
                        <Icon name={info.icon} className="w-5 h-5" />
                      </span>
                      <h3 className="text-sm font-bold text-secondary-100 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-xs text-secondary-600 leading-relaxed">
                        {info.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-xl border border-primary/20 p-6">
                  <h2 className="text-lg font-bold text-secondary-100 mb-4">
                    Book Your Service
                  </h2>

                  <form onSubmit={submit} className="space-y-4" noValidate>
                    <Honeypot {...honeypotProps} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="service-name"
                          className={labelStyles}
                        >
                          Full Name
                        </label>
                        <input
                          id="service-name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          value={values.name}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service-phone"
                          className={labelStyles}
                        >
                          Phone Number
                        </label>
                        <input
                          id="service-phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          title="Enter a 10-digit mobile number"
                          value={values.phone}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                          placeholder="10-digit mobile number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="service-type"
                          className={labelStyles}
                        >
                          Service Type
                        </label>
                        <select
                          id="service-type"
                          name="serviceType"
                          value={values.serviceType}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                        >
                          <option value="">Select a service</option>
                          {repairServices.map((service) => (
                            <option key={service.name} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="bike-type"
                          className={labelStyles}
                        >
                          Bike Type
                        </label>
                        <select
                          id="bike-type"
                          name="bikeType"
                          value={values.bikeType}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                        >
                          <option value="">Select bike type</option>
                          <option value="Mountain Bike">Mountain Bike</option>
                          <option value="Road Bike">Road Bike</option>
                          <option value="Hybrid Bike">Hybrid Bike</option>
                          <option value="Electric Bike">Electric Bike</option>
                          <option value="Kids Bike">Kids Bike</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="preferred-datetime"
                        className={labelStyles}
                      >
                        Preferred Date &amp; Time
                      </label>
                      <input
                        id="preferred-datetime"
                        type="datetime-local"
                        name="preferredDateTime"
                        value={values.preferredDateTime}
                        onChange={handleChange}
                        required
                        className={inputStyles}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service-address"
                        className={labelStyles}
                      >
                        Service Address
                      </label>
                      <textarea
                        id="service-address"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        required
                        rows={2}
                        className={`${inputStyles} resize-none`}
                        placeholder="Complete address where service is needed"
                      />
                    </div>

                    <div className="pt-1">
                      <p className="text-xs text-secondary-600 mb-3 text-center bg-secondary-300/20 rounded-lg py-2 px-3">
                        Visit fee: {BUSINESS_INFO.VISIT_FEE} • Estimated arrival:{' '}
                        {BUSINESS_INFO.AVG_ARRIVAL_TIME} (60–90 min window)
                      </p>

                      <SubmitButton
                        status={status}
                        pendingLabel="Sending booking…"
                        className="w-full bg-secondary-100 text-white px-6 py-3 rounded-lg hover:bg-secondary-100/90 shadow-lg text-sm"
                      >
                        <Icon name="calendar" className="w-4 h-4" />
                        Request this booking
                      </SubmitButton>

                      <FormStatus status={status} errorMessage={errorMessage} />

                      <p className="text-xs text-secondary-600/70 mt-2 text-center">
                        We confirm every booking by phone before a mechanic is
                        assigned.
                        {status === 'error' && (
                          <>
                            {' · '}
                            <WhatsAppFallback message="Hello CycleBees, I'd like to book a service." />
                          </>
                        )}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="relative overflow-hidden py-10 bg-gradient-to-br from-secondary-100 to-secondary-400 border-t border-light-yellow">
          <BrandWatermark className="-right-20 -bottom-16 w-80 h-80 text-primary/[0.06]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why us"
              title="Why Choose CycleBees?"
              lead="Experience the difference with professional service."
              tone="light"
              className="mb-8"
            />

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {whyChoose.map((item) => (
                <li
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-200"
                >
                  <span className="w-12 h-12 bg-primary text-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={item.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90">{item.body}</p>
                  {item.highlight && (
                    <p className="mt-2 text-primary font-bold text-sm">
                      {item.highlight}
                    </p>
                  )}
                  {item.sub && (
                    <p className="text-sm text-white/80">{item.sub}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 my-3 bg-secondary-300/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              lead="Quick answers to common questions."
              className="mb-10"
            />

            <FaqAccordion faqs={faqs} idPrefix="services-faq" />
          </div>
        </section>

        <DownloadSection />
      </Layout>
    </>
  );
};

export default ServicesPage;
