import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-cream">
      {/* Header */}
      <div className="luxury-gradient py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-center mt-4 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-lg prose-invert max-w-none">
          
          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              1. Information We Collect
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support.
            </p>
            <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-3">
              Personal Information
            </h3>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Travel preferences and requirements</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Passport and identification details for travel arrangements</li>
              <li>Communication history and preferences</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li>Provide, maintain, and improve our travel services</li>
              <li>Process bookings and manage your travel arrangements</li>
              <li>Communicate with you about your bookings and our services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              3. Information Sharing
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li><strong>Service Providers:</strong> With hotels, airlines, and other travel partners to fulfill your bookings</li>
              <li><strong>Business Partners:</strong> With trusted partners who assist in providing our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Consent:</strong> When you have given us explicit permission to share your information</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              4. Data Security
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication systems</li>
              <li>Staff training on data protection practices</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              5. Cookies and Tracking
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience on our website:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-luxury-cream leading-relaxed mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              6. Your Rights
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              7. Data Retention
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li>Booking information is retained for 7 years for tax and legal compliance</li>
              <li>Marketing preferences are retained until you opt out</li>
              <li>Communication history is retained for 3 years for service improvement</li>
            </ul>
          </section>

          {/* International Transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              8. International Transfers
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in accordance with applicable data protection laws.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              10. Changes to This Policy
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              11. Contact Us
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-luxury-navy p-6 rounded-lg">
              <p className="text-luxury-cream">
                <strong>GO.LK Travel</strong><br />
                Data Protection Officer<br />
                Email: privacy@golk.travel<br />
                Phone: +94 XX XXX XXXX<br />
                Address: Colombo, Sri Lanka
              </p>
            </div>
          </section>

        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="luxury-gradient text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;