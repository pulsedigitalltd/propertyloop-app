import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
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
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              PropertyLoop (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our service. Please read 
              this policy carefully to understand our practices regarding your personal data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 ml-4 space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Company information and business details</li>
              <li>Account credentials and login information</li>
              <li>Payment and billing information</li>
              <li>Property listings and vendor information</li>
              <li>Communications and messages sent through the platform</li>
              <li>Usage data and analytics information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 ml-4 space-y-2">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing your transactions and managing your subscriptions</li>
              <li>Sending you technical notices, updates, and support messages</li>
              <li>Responding to your comments, questions, and customer service requests</li>
              <li>Communicating with you about products, services, and events</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Detecting, preventing, and addressing technical issues and security threats</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only 
              in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 ml-4 space-y-2">
              <li>With your consent or at your direction</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with a merger, sale, or acquisition of our business</li>
              <li>With vendors and buyers as facilitated through the platform features</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, 
              access controls, and regular security assessments. However, no method of transmission over the internet or 
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy 
              Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, 
              we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 ml-4 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Data portability to transfer your information to another service</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies 
              are small data files stored on your device that help us improve your experience, understand user behavior, and 
              provide personalized content. You can control cookies through your browser settings, but disabling them may 
              affect your ability to use certain features of our service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Our service may contain links to third-party websites or integrate with third-party services. We are not 
              responsible for the privacy practices of these third parties. We encourage you to read their privacy policies 
              before providing any personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Our service is not intended for children under the age of 16. We do not knowingly collect personal information 
              from children. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us so we can delete such information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These 
              countries may have different data protection laws. We ensure appropriate safeguards are in place to protect 
              your information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the 
              new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy 
              periodically to stay informed about how we protect your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please 
              contact us at:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed ml-4">
              Email: privacy@propertyloop.app<br />
              Website: www.propertyloop.app
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

