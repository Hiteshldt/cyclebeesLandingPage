import React from 'react';
import Icon, { IconName } from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import {
  FormStatus,
  Honeypot,
  SubmitButton,
  WhatsAppFallback,
} from '@/components/FormBits';
import useEnquiryForm from '@/hooks/useEnquiryForm';

const services: { name: string; icon: IconName }[] = [
  { name: 'Chain Repair', icon: 'chain' },
  { name: 'Brake Tuning', icon: 'brake' },
  { name: 'Gear Adjustment', icon: 'gear' },
  { name: 'Tyre Replacement', icon: 'tyre' },
  { name: 'Wheel Truing', icon: 'wheel' },
  { name: 'E-Bicycle Diagnostics', icon: 'battery' },
  { name: 'Periodic Service', icon: 'calendar' },
  { name: 'Full Overhaul', icon: 'wrench' },
  { name: 'Bike Cleaning', icon: 'droplet' },
  { name: 'Emergency On-Road Assist', icon: 'siren' },
];

const INITIAL = { name: '', phone: '', serviceType: '' };

const ServicesSection: React.FC = () => {
  /** Posts to `/api/contact`; delivered to the Zoho inbox through Resend. */
  const { values, status, errorMessage, handleChange, submit, honeypotProps } =
    useEnquiryForm('quick', INITIAL);

  const inputStyles =
    'w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/25 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm transition-shadow duration-150';

  return (
    <section
      id="services"
      className="bg-white py-8 sm:py-6 my-5 border-t border-light-yellow border-b border-light-yellow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 lg:items-start">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="What we fix"
              title="Bicycle Services at Home"
              lead="Professional door-step repair service across Coimbatore."
              align="left"
              className="mb-6"
            />
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {services.map((service) => (
                <li
                  key={service.name}
                  className="bg-secondary-300/20 hover:bg-primary/20 rounded-lg p-4 text-center transition-colors duration-200 border border-transparent hover:border-primary/40"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-white text-secondary-100 shadow-sm">
                    <Icon name={service.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="text-xs font-semibold text-secondary-100 leading-tight">
                    {service.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="bg-secondary-100 rounded-lg p-5 text-white w-full max-w-sm">
              <h3 className="text-lg font-bold mb-1">Enquire Now</h3>
              <p className="text-xs text-white/70 mb-3">
                Tell us what you need and we&apos;ll call you back.
              </p>
              <form onSubmit={submit} className="space-y-3" noValidate>
                <Honeypot {...honeypotProps} />
                <div>
                  <label htmlFor="enquiry-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-phone" className="sr-only">
                    Phone number
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="numeric"
                    value={values.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit mobile number"
                    className={inputStyles}
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="enquiry-service" className="sr-only">
                    Service type
                  </label>
                  <select
                    id="enquiry-service"
                    name="serviceType"
                    value={values.serviceType}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                  >
                    <option value="" className="text-secondary-100">
                      Select service
                    </option>
                    <option value="Repair Services" className="text-secondary-100">
                      Repair Services
                    </option>
                    <option value="Rental Services" className="text-secondary-100">
                      Rental Services
                    </option>
                    <option value="Courses Booking" className="text-secondary-100">
                      Courses Booking
                    </option>
                    <option value="Business Enquiry" className="text-secondary-100">
                      Business Enquiry
                    </option>
                  </select>
                </div>

                <SubmitButton
                  status={status}
                  className="w-full bg-primary text-secondary-100 py-2.5 rounded-lg hover:bg-primary/90 text-sm"
                >
                  Enquire Now
                </SubmitButton>

                <FormStatus
                  status={status}
                  errorMessage={errorMessage}
                  tone="dark"
                />

                {status === 'error' && (
                  <p className="text-xs text-white/70 text-center">
                    <WhatsAppFallback />
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
