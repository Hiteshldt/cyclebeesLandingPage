import React from 'react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { breadcrumbSchema } from '@/lib/schema';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How CycleBees collects, uses and protects your personal information when you book bicycle repair, rental and doorstep services."
        path="/privacy"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ])}
      />
      
      <Layout>
        <div className="min-h-screen bg-white pt-20 border-t border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-100 mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-secondary-600">
                Last updated: January 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Introduction</h2>
                <p className="text-secondary-600 mb-4">
                  CycleBees Private Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our bicycle repair and rental services, whether through our mobile application, website, or in-person services.
                </p>
                <p className="text-secondary-600 mb-4">
                  By using CycleBees services, you agree to the collection and use of information in accordance with this policy. We are a private limited company registered in India and comply with applicable Indian data protection laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Personal Information</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Full name and contact details (phone number, email address)</li>
                  <li>• Service address and location information</li>
                  <li>• Payment information (processed securely through third-party providers)</li>
                  <li>• Service preferences and bicycle details</li>
                  <li>• Communication records and feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Automatically Collected Information</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Device information and unique identifiers</li>
                  <li>• Location data (when services are requested)</li>
                  <li>• Usage patterns and app performance data</li>
                  <li>• Log files and technical information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">How We Use Your Information</h2>
                <p className="text-secondary-600 mb-4">We use your personal information for the following purposes:</p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Providing bicycle repair and rental services</li>
                  <li>• Scheduling and coordinating service appointments</li>
                  <li>• Processing payments and managing transactions</li>
                  <li>• Communicating service updates and confirmations</li>
                  <li>• Improving our services and customer experience</li>
                  <li>• Sending promotional offers and service notifications (with your consent)</li>
                  <li>• Complying with legal obligations and regulatory requirements</li>
                  <li>• Ensuring safety and security of our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-secondary-600 mb-4">We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Service Providers</h3>
                <p className="text-secondary-600 mb-4">
                  We work with trusted third-party service providers who assist us in operating our platform, conducting business, and serving our customers. These partners include payment processors, logistics providers, and technology service providers.
                </p>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Legal Requirements</h3>
                <p className="text-secondary-600 mb-4">
                  We may disclose your information when required by law, court order, or government request, or when we believe disclosure is necessary to protect our rights, property, or safety.
                </p>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Business Transfers</h3>
                <p className="text-secondary-600 mb-4">
                  In the event of a merger, acquisition, or sale of assets, customer information may be transferred as part of that transaction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Data Security</h2>
                <p className="text-secondary-600 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Encryption of sensitive data in transit and at rest</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Access controls and authentication mechanisms</li>
                  <li>• Employee training on data protection practices</li>
                  <li>• Secure storage and backup systems</li>
                </ul>
                <p className="text-secondary-600 mb-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Data Retention</h2>
                <p className="text-secondary-600 mb-4">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Specifically:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Account information: Retained while your account is active and for 3 years after closure</li>
                  <li>• Service records: Retained for 5 years for warranty and service history purposes</li>
                  <li>• Payment information: Retained as required by financial regulations (typically 7 years)</li>
                  <li>• Communication records: Retained for 2 years for quality assurance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Your Rights</h2>
                <p className="text-secondary-600 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Access: Request copies of your personal data</li>
                  <li>• Rectification: Request correction of inaccurate information</li>
                  <li>• Erasure: Request deletion of your personal data (subject to legal obligations)</li>
                  <li>• Portability: Request transfer of your data to another service provider</li>
                  <li>• Restriction: Request limitation of processing in certain circumstances</li>
                  <li>• Objection: Object to processing based on legitimate interests</li>
                  <li>• Withdraw consent: Withdraw previously given consent at any time</li>
                </ul>
                <p className="text-secondary-600 mb-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-secondary-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience with our services. These technologies help us:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Remember your preferences and settings</li>
                  <li>• Analyze usage patterns and improve our services</li>
                  <li>• Provide personalized content and recommendations</li>
                  <li>• Ensure security and prevent fraud</li>
                </ul>
                <p className="text-secondary-600 mb-4">
                  You can manage cookie preferences through your browser settings, though this may affect some functionality of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Third-Party Links</h2>
                <p className="text-secondary-600 mb-4">
                  Our services may contain links to third-party websites or applications. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party services you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Children's Privacy</h2>
                <p className="text-secondary-600 mb-4">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Changes to This Policy</h2>
                <p className="text-secondary-600 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Posting the updated policy on our website</li>
                  <li>• Sending email notifications to registered users</li>
                  <li>• Displaying prominent notices in our mobile application</li>
                </ul>
                <p className="text-secondary-600 mb-4">
                  Your continued use of our services after any changes indicates your acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Contact Information</h2>
                <p className="text-secondary-600 mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-secondary-300/20 rounded-lg p-6">
                  <p className="text-secondary-600 mb-2"><strong>CycleBees Private Limited</strong></p>
                  <p className="text-secondary-600 mb-2">Address: 79, Aarudhra Enclave, Athipalayam Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                  <p className="text-secondary-600 mb-2">Email: <a href="mailto:hitesh.gupta@cyclebees.in" className="text-primary hover:text-primary/80">hitesh.gupta@cyclebees.in</a></p>
                  <p className="text-secondary-600 mb-2">Phone: <a href="tel:+919597312212" className="text-primary hover:text-primary/80">+91 95973 12212</a></p>
                  <p className="text-secondary-600">Data Protection Officer: Hitesh Gupta (<a href="mailto:hitesh.gupta@cyclebees.in" className="text-primary hover:text-primary/80">hitesh.gupta@cyclebees.in</a>)</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Governing Law</h2>
                <p className="text-secondary-600 mb-4">
                  This Privacy Policy is governed by the laws of India. Any disputes arising from this policy will be subject to the jurisdiction of the courts in Coimbatore, Tamil Nadu, India.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPage;
