import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
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
import { CONTACT_INFO } from '@/constants';
import { GOOGLE_BUSINESS } from '@/lib/site';
import { breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/schema';

const contactCards: {
  title: string;
  icon: IconName;
  lines: React.ReactNode;
  note: string;
}[] = [
  {
    title: 'Phone',
    icon: 'phone',
    lines: (
      <a
        href={`tel:+${CONTACT_INFO.WHATSAPP_NUMBER}`}
        className="hover:text-secondary-100 transition-colors duration-200"
      >
        {CONTACT_INFO.PHONE}
      </a>
    ),
    note: 'Available 24/7 for emergencies',
  },
  {
    title: 'Email',
    icon: 'mail',
    lines: (
      <a
        href={`mailto:${CONTACT_INFO.EMAIL}`}
        className="hover:text-secondary-100 transition-colors duration-200"
      >
        {CONTACT_INFO.EMAIL}
      </a>
    ),
    note: 'We reply within 2 hours',
  },
  {
    title: 'Address',
    icon: 'map-pin',
    lines: (
      <a
        href={GOOGLE_BUSINESS.placeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary-100 transition-colors duration-200"
      >
        79, Aarudhra Enclave, Athipalayam Rd, Saravanampatti, Coimbatore, Tamil
        Nadu 641035
      </a>
    ),
    note: 'Service across the city',
  },
  {
    title: 'Hours',
    icon: 'clock',
    lines: <>6 AM – 10 PM</>,
    note: 'Emergency on-road assist 24/7',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'How quickly can you reach my location?',
    answer:
      'For scheduled bookings we provide a 60–90 minute arrival window and show live ETA in the app. For emergency on-road assist, emergency support is available 24/7.',
    plainAnswer:
      'For scheduled bookings we provide a 60–90 minute arrival window and show live ETA in the app. For emergency on-road assist, emergency support is available 24/7.',
  },
  {
    question: 'Is there a service charge for coming to my location?',
    answer:
      'Yes — a visit fee of ₹299 covers the technician callout. Parts and replacements are billed separately and only installed after you approve the upfront quote.',
    plainAnswer:
      'Yes — a visit fee of ₹299 covers the technician callout. Parts and replacements are billed separately and only installed after you approve the upfront quote.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: (
      <>
        We accept UPI, debit/credit cards, netbanking and major wallets through
        the app. Cash on completion is available in select cases. All digital
        payments follow{' '}
        <a
          href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11142"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-100 font-medium underline hover:text-primary transition-colors duration-200"
        >
          RBI digital payment guidelines
        </a>
        .
      </>
    ),
    plainAnswer:
      'We accept UPI, debit/credit cards, netbanking and major wallets through the app. Cash on completion is available in select cases. All digital payments follow RBI digital payment guidelines.',
  },
  {
    question: 'What types of bicycles do you service?',
    answer:
      "We service kid's bikes, commuters, hybrid, road, MTB and e-bikes (including e-bike diagnostics and common electric system checks).",
    plainAnswer:
      "We service kid's bikes, commuters, hybrid, road, MTB and e-bikes (including e-bike diagnostics and common electric system checks).",
  },
  {
    question: 'How do I book a service appointment?',
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
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactPage: React.FC = () => {
  /**
   * Submits to `/api/contact`, which delivers to the Zoho inbox through Resend.
   * This form previously only ran `console.log` — every message was dropped.
   */
  const { values, status, errorMessage, handleChange, submit, honeypotProps } =
    useEnquiryForm('contact', INITIAL);

  return (
    <>
      <Seo
        title="Contact CycleBees — Support & Bookings"
        description="Call, WhatsApp or email CycleBees for bicycle service enquiries in Coimbatore. Bookings 6 AM–10 PM, emergency on-road assistance available 24/7."
        path="/contact"
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
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <Layout>
        <PageHero
          eyebrow="Talk to us"
          title="Get in Touch"
          lead="Professional support and assistance — we're here to help 24/7."
        />

        {/* Contact details + form */}
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
                <SectionHeading
                  eyebrow="Reach us"
                  title="Contact Information"
                  align="left"
                  className="mb-6"
                />

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactCards.map((card) => (
                    <li
                      key={card.title}
                      className="bg-white rounded-xl p-4 border border-primary/20 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-primary/20 text-secondary-100">
                        <Icon name={card.icon} className="w-5 h-5" />
                      </span>
                      <h3 className="text-sm font-bold text-secondary-100 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-secondary-600 leading-relaxed">
                        {card.lines}
                      </p>
                      <p className="text-xs text-secondary-600/70 mt-1">
                        {card.note}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-white rounded-xl p-4 border border-primary/20 text-center">
                  <p className="text-sm text-secondary-600">
                    Prefer to talk? WhatsApp us on{' '}
                    <a
                      href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-secondary-100 underline hover:text-primary transition-colors duration-200"
                    >
                      {CONTACT_INFO.PHONE}
                    </a>{' '}
                    — we respond within the hour.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-xl border border-primary/20 p-6">
                  <form onSubmit={submit} className="space-y-4" noValidate>
                    <h2 className="text-lg font-bold text-secondary-100">
                      Send us a message
                    </h2>

                    <Honeypot {...honeypotProps} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className={labelStyles}>
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          value={values.name}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className={labelStyles}>
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className={labelStyles}>
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          inputMode="numeric"
                          value={values.phone}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                          placeholder="10-digit mobile number"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className={labelStyles}>
                          Subject
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          required
                          className={inputStyles}
                        >
                          <option value="">Select a subject</option>
                          <option value="Service Inquiry">Service Inquiry</option>
                          <option value="Booking Support">Booking Support</option>
                          <option value="Technical Issue">Technical Issue</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className={labelStyles}>
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className={`${inputStyles} resize-none`}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="pt-1">
                      <SubmitButton
                        status={status}
                        className="w-full bg-secondary-100 text-white px-6 py-3 rounded-lg hover:bg-secondary-100/90 shadow-lg text-sm"
                      >
                        <Icon name="mail" className="w-4 h-4" />
                        Send message
                      </SubmitButton>

                      <FormStatus status={status} errorMessage={errorMessage} />

                      <p className="text-xs text-secondary-600/70 mt-2 text-center">
                        Goes straight to {CONTACT_INFO.EMAIL}
                        {status === 'error' && (
                          <>
                            {' · '}
                            <WhatsAppFallback />
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

        {/* FAQ */}
        <section className="py-8 my-3 bg-secondary-300/10 border-t border-light-yellow border-b border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              lead="Quick answers to common questions."
              className="mb-10"
            />

            <FaqAccordion faqs={faqs} idPrefix="contact-faq" />
          </div>
        </section>

        <DownloadSection />
      </Layout>
    </>
  );
};

export default ContactPage;
