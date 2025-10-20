import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              By accessing and using PropertyLoop (&quot;the Service&quot;), you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our service. We reserve the right to modify these terms 
              at any time, and your continued use of the Service constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              PropertyLoop provides online software for real estate professionals to manage vendor communications, generate 
              leads, create reports, and streamline their business operations. The Service includes but is not limited to 
              vendor management tools, document sharing, calendar management, open home reporting, and communication features.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Account Registration</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              To use certain features of the Service, you must register for an account. You agree to provide accurate, 
              current, and complete information during the registration process and to update such information to keep it 
              accurate, current, and complete. You are responsible for safeguarding your password and for all activities 
              that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Subscription and Payment</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              PropertyLoop operates on a subscription basis. By subscribing to our service, you agree to pay all applicable 
              fees as described at the time of purchase. All fees are non-refundable except as required by law or as 
              explicitly stated in our 30-day money-back guarantee policy. Subscriptions will automatically renew unless 
              cancelled prior to the renewal date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. 30-Day Money Back Guarantee</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We offer a 30-day money-back guarantee for new subscribers. If you are not satisfied with PropertyLoop within 
              the first 30 days of your initial subscription, you may request a full refund. This guarantee applies only to 
              first-time subscribers and does not apply to renewal payments or subsequent subscriptions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. User Conduct</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 ml-4 space-y-2">
              <li>Use the Service in any way that violates any applicable law or regulation</li>
              <li>Transmit any malicious code, viruses, or harmful data</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Use the Service to harass, abuse, or harm another person</li>
              <li>Share your account credentials with unauthorized third parties</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The Service and its entire contents, features, and functionality are owned by PropertyLoop and are protected 
              by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, 
              modify, or create derivative works of any content from the Service without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Data and Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the 
              collection and use of your information as described in our Privacy Policy. We take data security seriously 
              and implement appropriate measures to protect your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              To the maximum extent permitted by law, PropertyLoop shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Termination</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, 
              for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease 
              immediately. You may cancel your subscription at any time through your account settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes via email 
              or through the Service. Your continued use of the Service after such modifications constitutes your acceptance 
              of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed ml-4">
              Email: support@propertyloop.app<br />
              Website: www.propertyloop.app
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

