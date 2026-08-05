import React from 'react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { breadcrumbSchema } from '@/lib/schema';

const RefundPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Refund & Return Policy"
        description="CycleBees refund and return policy: 7-day refund window, processing times and return procedures for repair and rental services."
        path="/refund"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Refund & Return Policy', path: '/refund' },
        ])}
      />
      
      <Layout>
        <div className="min-h-screen bg-white pt-20 border-t border-light-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-100 mb-6">
                Refund & Return Policy
              </h1>
              <p className="text-lg text-secondary-600">
                Last updated: January 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Overview</h2>
                <p className="text-secondary-600 mb-4">
                  At CycleBees Private Limited, we strive to provide exceptional bicycle repair and rental services. We understand that sometimes circumstances may require a refund or return, and we want to make this process as transparent and straightforward as possible.
                </p>
                <p className="text-secondary-600 mb-4">
                  This Refund & Return Policy outlines the conditions, procedures, and timelines for requesting refunds and returns for our services and products. By using CycleBees services, you agree to the terms outlined in this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Refund Eligibility</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">7-Day Refund Window</h3>
                <p className="text-secondary-600 mb-4">
                  All refund requests must be submitted within 7 days of the service completion or purchase date. Requests submitted after this period will not be considered for refund.
                </p>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Eligible Services and Products</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Repair services that were not performed as promised</li>
                  <li>• Services cancelled by CycleBees due to unavailability</li>
                  <li>• Defective spare parts or accessories purchased from CycleBees</li>
                  <li>• Rental services terminated early due to equipment failure</li>
                  <li>• Prepaid service packages not yet utilized</li>
                  <li>• Training sessions cancelled by CycleBees</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Non-Refundable Items</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Services that have been satisfactorily completed</li>
                  <li>• Custom or personalized services already performed</li>
                  <li>• Spare parts that have been installed and are functioning properly</li>
                  <li>• Services cancelled by the customer within 2 hours of appointment</li>
                  <li>• Rental services completed without issues</li>
                  <li>• Emergency services provided outside business hours</li>
                  <li>• Services affected by customer negligence or misuse</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Service-Specific Refund Policies</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Repair Services</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Full refund if repair was not completed as agreed</li>
                  <li>• Partial refund if repair is partially satisfactory</li>
                  <li>• No refund if repair meets specified requirements and quality standards</li>
                  <li>• Free re-service for warranty issues within 15-30 days</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Rental Services</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Full refund for early termination due to equipment failure</li>
                  <li>• Proportional refund for significant equipment issues during rental</li>
                  <li>• Security deposits returned within 3-5 business days after return</li>
                  <li>• No refund for customer-initiated early termination without cause</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Spare Parts and Accessories</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Full refund for defective parts within 7 days of purchase</li>
                  <li>• Return in original packaging with all accessories and documentation</li>
                  <li>• No refund for parts that have been installed and are working properly</li>
                  <li>• Manufacturer warranty applies separately for branded parts</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Training and Coaching Services</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Full refund if session is cancelled by CycleBees</li>
                  <li>• Proportional refund for incomplete training programs</li>
                  <li>• No refund for sessions attended or missed by the customer</li>
                  <li>• Rescheduling available for weather-related cancellations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Refund Request Process</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">How to Request a Refund</h3>
                <ol className="text-secondary-600 mb-4 space-y-3 list-decimal list-inside">
                  <li><strong>Contact Customer Support:</strong> Email us at <a href="mailto:hitesh.gupta@cyclebees.in" className="text-primary hover:text-primary/80">hitesh.gupta@cyclebees.in</a> or call <a href="tel:+919597312212" className="text-primary hover:text-primary/80">+91 95973 12212</a></li>
                  <li><strong>Provide Details:</strong> Include your booking ID, service date, reason for refund, and supporting documentation</li>
                  <li><strong>Submit Within Timeline:</strong> Ensure your request is submitted within 7 days of service completion</li>
                  <li><strong>Await Review:</strong> Our team will review your request and respond within 48-72 hours</li>
                  <li><strong>Follow Instructions:</strong> If approved, follow any additional instructions for returning items or scheduling inspections</li>
                </ol>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Required Information</h3>
                <p className="text-secondary-600 mb-4">To process your refund request efficiently, please provide:</p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Full name and contact information</li>
                  <li>• Booking confirmation number or invoice number</li>
                  <li>• Date and time of service</li>
                  <li>• Detailed reason for refund request</li>
                  <li>• Photos or videos if applicable (for product defects or service issues)</li>
                  <li>• Original payment method details</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Review Process</h3>
                <p className="text-secondary-600 mb-4">
                  Our customer service team will review each refund request individually. The review process may include:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Verification of service records and quality standards</li>
                  <li>• Communication with the assigned mechanic or service provider</li>
                  <li>• Inspection of returned items if applicable</li>
                  <li>• Review of photographic evidence or documentation</li>
                  <li>• Assessment of compliance with warranty terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Refund Processing Times</h2>
                
                <div className="bg-primary/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-secondary-100 mb-3">Standard Processing Timeline</h3>
                  <ul className="text-secondary-600 space-y-2">
                    <li>• <strong>Request Review:</strong> 2-3 business days</li>
                    <li>• <strong>Refund Processing:</strong> 3-5 business days after approval</li>
                    <li>• <strong>Bank Credit:</strong> 5-7 business days depending on payment method</li>
                    <li>• <strong>Total Timeline:</strong> 7-12 business days from request to bank credit</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Payment Method Specific Timelines</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• <strong>UPI/Digital Wallets:</strong> 1-3 business days</li>
                  <li>• <strong>Credit Cards:</strong> 3-5 business days (may take 1-2 billing cycles to reflect)</li>
                  <li>• <strong>Debit Cards:</strong> 3-7 business days</li>
                  <li>• <strong>Net Banking:</strong> 3-5 business days</li>
                  <li>• <strong>Cash Payments:</strong> Bank transfer within 3-5 business days</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Factors Affecting Processing Time</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Bank processing delays during holidays or weekends</li>
                  <li>• Additional verification required for high-value refunds</li>
                  <li>• Incomplete or incorrect refund information provided</li>
                  <li>• Technical issues with payment processors</li>
                  <li>• Complex cases requiring management approval</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Partial Refunds</h2>
                <p className="text-secondary-600 mb-4">
                  In certain circumstances, CycleBees may offer partial refunds rather than full refunds:
                </p>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Partial Refund Scenarios</h3>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Service partially completed but not fully satisfactory</li>
                  <li>• Spare parts used but additional parts were defective</li>
                  <li>• Late cancellations with partial service charges</li>
                  <li>• Rental equipment with minor issues that didn't affect primary use</li>
                  <li>• Training sessions partially attended</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Partial Refund Calculation</h3>
                <p className="text-secondary-600 mb-4">
                  Partial refunds are calculated based on:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Proportion of service completed satisfactorily</li>
                  <li>• Cost of materials used or services provided</li>
                  <li>• Time and effort invested by our team</li>
                  <li>• Industry standard practices and fairness principles</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Exchanges and Store Credit</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Service Exchanges</h3>
                <p className="text-secondary-600 mb-4">
                  In lieu of refunds, CycleBees may offer service exchanges for:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Unsatisfactory repair work (free re-service)</li>
                  <li>• Defective parts replacement</li>
                  <li>• Alternative service of equal value</li>
                  <li>• Upgraded service with price difference payment</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">CycleBees Store Credit</h3>
                <p className="text-secondary-600 mb-4">
                  Store credit may be offered as an alternative to cash refunds:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Credit valid for 12 months from issuance date</li>
                  <li>• Can be used for any CycleBees service or product</li>
                  <li>• Non-transferable and cannot be converted back to cash</li>
                  <li>• May include bonus value (e.g., 10% extra credit)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Special Circumstances</h2>
                
                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Emergency Services</h3>
                <p className="text-secondary-600 mb-4">
                  Emergency roadside assistance and urgent repair services have different refund terms:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Full refund if mechanic fails to arrive within committed time</li>
                  <li>• Partial refund if service is incomplete due to parts unavailability</li>
                  <li>• No refund if service is completed as requested</li>
                  <li>• Alternative solutions offered before refund consideration</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Subscription and Packages</h3>
                <p className="text-secondary-600 mb-4">
                  For prepaid service packages and subscriptions:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Pro-rated refund for unused services within package</li>
                  <li>• Cancellation fees may apply based on terms</li>
                  <li>• Subscription refunds calculated from cancellation date</li>
                  <li>• Package transfers to family members allowed</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-100 mb-3">Weather-Related Issues</h3>
                <p className="text-secondary-600 mb-4">
                  Services affected by severe weather conditions:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Free rescheduling for weather-cancelled services</li>
                  <li>• Full refund if rescheduling is not possible</li>
                  <li>• No additional charges for weather delays</li>
                  <li>• Force majeure conditions handled case-by-case</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Dispute Resolution</h2>
                <p className="text-secondary-600 mb-4">
                  If you are not satisfied with our refund decision, you may:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Request escalation to our management team</li>
                  <li>• Provide additional documentation or evidence</li>
                  <li>• Seek mediation through consumer forums</li>
                  <li>• Contact our customer advocacy department</li>
                </ul>
                
                <p className="text-secondary-600 mb-4">
                  We are committed to fair resolution and will work with customers to find mutually acceptable solutions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Refund Notifications</h2>
                <p className="text-secondary-600 mb-4">
                  CycleBees will keep you informed throughout the refund process:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Immediate acknowledgment of refund request</li>
                  <li>• Updates during review process</li>
                  <li>• Approval or rejection notification with reasons</li>
                  <li>• Processing confirmation and expected timeline</li>
                  <li>• Final confirmation when refund is completed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Policy Updates</h2>
                <p className="text-secondary-600 mb-4">
                  CycleBees reserves the right to modify this Refund & Return Policy at any time. Changes will be communicated through:
                </p>
                <ul className="text-secondary-600 mb-4 space-y-2">
                  <li>• Email notifications to registered customers</li>
                  <li>• Updates on our website and mobile application</li>
                  <li>• In-app notifications for policy changes</li>
                  <li>• Customer service communications</li>
                </ul>
                <p className="text-secondary-600 mb-4">
                  Changes will not affect refund requests already submitted under previous policy terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-100 mb-4">Contact Information</h2>
                <p className="text-secondary-600 mb-4">
                  For refund requests, questions, or concerns about this policy:
                </p>
                <div className="bg-secondary-300/20 rounded-lg p-6">
                  <p className="text-secondary-600 mb-2"><strong>CycleBees Private Limited</strong></p>
                  <p className="text-secondary-600 mb-2">Address: 79, Aarudhra Enclvae, Athipalayam Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                  <p className="text-secondary-600 mb-2">Refund Requests: <a href="mailto:hitesh.gupta@cyclebees.in" className="text-primary hover:text-primary/80">hitesh.gupta@cyclebees.in</a></p>
                  <p className="text-secondary-600 mb-2">Customer Support: <a href="mailto:mail@cyclebees.in" className="text-primary hover:text-primary/80">mail@cyclebees.in</a></p>
                  <p className="text-secondary-600 mb-2">Phone: <a href="tel:+919597312212" className="text-primary hover:text-primary/80">+91 95973 12212</a></p>
                  <p className="text-secondary-600">Business Hours: Monday to Sunday, 6:00 AM to 10:00 PM IST</p>
                </div>
              </section>

              <section className="mb-8">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-secondary-100 mb-4">Quick Reference</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-secondary-100 mb-2">Maximum Refund Request Period:</h4>
                      <p className="text-secondary-600">7 days from service completion</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-100 mb-2">Processing Time:</h4>
                      <p className="text-secondary-600">3-5 business days</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-100 mb-2">Bank Credit Time:</h4>
                      <p className="text-secondary-600">5-7 business days</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-100 mb-2">Contact Email:</h4>
                      <p className="text-secondary-600"><a href="mailto:hitesh.gupta@cyclebees.in" className="text-primary hover:text-primary/80">hitesh.gupta@cyclebees.in</a></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RefundPage;
