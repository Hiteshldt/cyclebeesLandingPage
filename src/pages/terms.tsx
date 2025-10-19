import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

const TermsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions - CycleBees</title>
        <meta name="description" content="CycleBees Terms & Conditions - Rules, disclaimers, and terms of service for using our bicycle repair and rental platform." />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white pt-20 border-t border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-100 mb-6">
                Terms & Conditions
              </h1>
              <p className="text-lg text-secondary-600">
                Last updated: January 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Acceptance of Terms</h2>
                <p className="text-secondary-600 mb-4">
                  Welcome to CycleBees Private Limited ("CycleBees," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our bicycle repair, rental, and related services, whether accessed through our mobile application, website, or in-person interactions.
                </p>
                <p className="text-secondary-600 mb-4">
                  By accessing or using CycleBees services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                </p>
                <p className="text-secondary-600 mb-4">
                  CycleBees Private Limited is a company incorporated under the laws of India, with its registered office at 79, Aarudhra Enclvae, Athipalayam Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Services Description</h2>
                <p className="text-secondary-600 mb-4">
                  CycleBees provides professional bicycle repair, maintenance, and rental services primarily in Coimbatore and surrounding areas. Our services include but are not limited to:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Door-step bicycle repair and maintenance services</li>
                  <li>• Bicycle rental and leasing</li>
                  <li>• Emergency roadside assistance for bicycles</li>
                  <li>• Bicycle accessories and spare parts supply</li>
                  <li>• Cycling training and coaching services</li>
                  <li>• Periodic maintenance packages</li>
                </ul>
                <p className="text-secondary-600 mb-4">
                  All services are subject to availability and may vary based on location, time, and other factors.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">User Account and Registration</h2>
                <p className="text-secondary-600 mb-4">
                  To access certain features of our services, you may need to create an account. When creating an account, you must:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Notify us immediately of any unauthorized use</li>
                  <li>• Be at least 18 years of age or have parental consent</li>
                  <li>• Use the account for lawful purposes only</li>
                </ul>
                <p className="text-secondary-600 mb-4">
                  You are responsible for all activities that occur under your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Service Booking and Scheduling</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Booking Process</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Services must be booked through our official channels (app, website, or phone)</li>
                  <li>• Booking confirmation is subject to mechanic availability</li>
                  <li>• We reserve the right to decline service requests in certain circumstances</li>
                  <li>• Service timing may vary due to traffic, weather, or other unforeseen circumstances</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Cancellation Policy</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Cancellations made 2+ hours before scheduled time: No charge</li>
                  <li>• Cancellations made within 2 hours: 25% service charge may apply</li>
                  <li>• No-shows or same-time cancellations: 50% service charge may apply</li>
                  <li>• Emergency cancellations will be handled case-by-case</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Rescheduling</h3>
                <p className="text-secondary-600 mb-4">
                  Services can be rescheduled up to 1 hour before the scheduled time without additional charges. Multiple rescheduling may result in service charges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Pricing and Payment</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Service Charges</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• All prices are inclusive of applicable taxes unless stated otherwise</li>
                  <li>• Prices may vary based on service complexity, location, and timing</li>
                  <li>• Emergency services may carry additional charges</li>
                  <li>• Spare parts and accessories are charged separately</li>
                  <li>• Service charges are determined before work commences</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Payment Terms</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Payment is due upon service completion</li>
                  <li>• We accept cash, UPI, credit/debit cards, and digital wallets</li>
                  <li>• Service packages may require advance payment</li>
                  <li>• Rental services require security deposits</li>
                  <li>• Late payment may result in service suspension</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Price Changes</h3>
                <p className="text-secondary-600 mb-4">
                  We reserve the right to modify our pricing at any time. Price changes will not affect already confirmed bookings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Service Standards and Quality</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Our Commitments</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Certified and trained mechanics for all services</li>
                  <li>• Quality spare parts and accessories</li>
                  <li>• Service warranty as specified for each service type</li>
                  <li>• Professional and courteous service delivery</li>
                  <li>• Transparent communication throughout the service process</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Customer Responsibilities</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Provide accurate information about bicycle condition</li>
                  <li>• Ensure safe access to the service location</li>
                  <li>• Be present during service delivery</li>
                  <li>• Inspect and approve work before payment</li>
                  <li>• Follow maintenance recommendations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Liability and Insurance</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Service Liability</h3>
                <p className="text-secondary-600 mb-4">
                  CycleBees carries professional liability insurance for our services. However, our liability is limited to:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Direct damages caused by our negligence during service</li>
                  <li>• Maximum liability not exceeding the service cost or ₹10,000, whichever is lower</li>
                  <li>• Damages must be reported within 24 hours of service completion</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Exclusions</h3>
                <p className="text-secondary-600 mb-4">We are not liable for:</p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Pre-existing damage or wear</li>
                  <li>• Damage due to customer negligence or misuse</li>
                  <li>• Loss of use or consequential damages</li>
                  <li>• Damage to accessories not serviced by us</li>
                  <li>• Delays due to circumstances beyond our control</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Customer Insurance</h3>
                <p className="text-secondary-600 mb-4">
                  Customers are encouraged to maintain their own insurance for bicycles and accessories. We recommend declaring bicycle value and any special equipment before service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Warranty and Returns</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Service Warranty</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• General repairs: 15-30 days warranty (varies by service type)</li>
                  <li>• Spare parts: Manufacturer warranty or 90 days, whichever is longer</li>
                  <li>• Labor warranty: 15 days for standard services</li>
                  <li>• Periodic services: 30 days comprehensive warranty</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Warranty Claims</h3>
                <p className="text-secondary-600 mb-4">
                  Warranty claims must be reported immediately with service receipt. Warranty covers defects in workmanship, not normal wear or customer-caused damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Intellectual Property</h2>
                <p className="text-secondary-600 mb-4">
                  All content on our platform, including but not limited to text, graphics, logos, images, software, and design, is the property of CycleBees Private Limited or our licensors and is protected by Indian and international copyright laws.
                </p>
                <p className="text-secondary-600 mb-4">
                  You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">User Conduct</h2>
                <p className="text-secondary-600 mb-4">When using our services, you agree not to:</p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Provide false or misleading information</li>
                  <li>• Interfere with other users or our service operations</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                  <li>• Use our services for illegal or harmful purposes</li>
                  <li>• Harass, threaten, or abuse our staff or other customers</li>
                  <li>• Attempt to reverse engineer our technology</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Force Majeure</h2>
                <p className="text-secondary-600 mb-4">
                  CycleBees shall not be liable for any failure or delay in performance due to events beyond our reasonable control, including but not limited to:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Natural disasters, severe weather conditions</li>
                  <li>• Government actions, lockdowns, or restrictions</li>
                  <li>• Labor strikes or disputes</li>
                  <li>• Technical failures or internet outages</li>
                  <li>• Supply chain disruptions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Privacy and Data Protection</h2>
                <p className="text-secondary-600 mb-4">
                  Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which forms part of these Terms. By using our services, you consent to our data practices as described in the Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Termination</h2>
                <p className="text-secondary-600 mb-4">
                  Either party may terminate the service relationship at any time. CycleBees reserves the right to suspend or terminate your account for violation of these Terms. Upon termination:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Pending services will be completed or canceled with appropriate refunds</li>
                  <li>• Outstanding payments must be settled</li>
                  <li>• Your account access may be restricted</li>
                  <li>• Certain provisions of these Terms shall survive termination</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Dispute Resolution</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Customer Support</h3>
                <p className="text-secondary-600 mb-4">
                  We encourage customers to first contact our customer support team to resolve any issues or concerns. Most disputes can be resolved quickly and amicably through direct communication.
                </p>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Mediation and Arbitration</h3>
                <p className="text-secondary-600 mb-4">
                  If direct resolution is not possible, disputes will be resolved through mediation or arbitration in Coimbatore, Tamil Nadu, under Indian law. Legal proceedings, if necessary, will be subject to the jurisdiction of Coimbatore courts.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Modifications to Terms</h2>
                <p className="text-secondary-600 mb-4">
                  CycleBees reserves the right to modify these Terms at any time. Changes will be effective upon posting on our website or app. Material changes will be communicated to users via email or in-app notifications.
                </p>
                <p className="text-secondary-600 mb-4">
                  Continued use of our services after changes indicates acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Contact Information</h2>
                <p className="text-secondary-600 mb-4">
                  For questions about these Terms & Conditions or any other concerns, please contact us:
                </p>
                <div className="bg-secondary-300/20 rounded-lg p-6">
                  <p className="text-secondary-600 mb-2"><strong>CycleBees Private Limited</strong></p>
                  <p className="text-secondary-600 mb-2">Address: 79, Aarudhra Enclvae, Athipalayam Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                  <p className="text-secondary-600 mb-2">Email: <a href="mailto:guru.moorthy@cyclebees.in" className="text-primary hover:text-primary/80">guru.moorthy@cyclebees.in</a></p>
                  <p className="text-secondary-600 mb-2">Customer Support: <a href="mailto:mail@cyclebees.in" className="text-primary hover:text-primary/80">mail@cyclebees.in</a></p>
                  <p className="text-secondary-600">Phone: <a href="tel:+919597312212" className="text-primary hover:text-primary/80">+91 95973 12212</a></p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Governing Law</h2>
                <p className="text-secondary-600 mb-4">
                  These Terms and Conditions are governed by the laws of India. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Coimbatore, Tamil Nadu, India.
                </p>
                <p className="text-secondary-600 mb-4">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TermsPage;
