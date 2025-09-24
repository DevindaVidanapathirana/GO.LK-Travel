import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-cream">
      {/* Header */}
      <div className="luxury-gradient py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">
            Terms of Service
          </h1>
          <p className="text-white/80 text-center mt-4 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-lg prose-invert max-w-none">
          
          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              By accessing and using GO.LK Travel services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              2. Services Description
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              GO.LK Travel provides luxury travel services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li>Premium travel packages and experiences</li>
              <li>Private jet charter services</li>
              <li>Villa and luxury accommodation rentals</li>
              <li>Personalized concierge services</li>
              <li>Travel consultation and planning</li>
            </ul>
          </section>

          {/* Booking and Payment Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              3. Booking and Payment Terms
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              All bookings are subject to availability and confirmation. Payment terms vary by service type:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li>Deposits may be required at the time of booking</li>
              <li>Full payment may be required before travel dates</li>
              <li>Payment methods accepted include major credit cards and bank transfers</li>
              <li>Prices are subject to change without notice</li>
            </ul>
          </section>

          {/* Cancellation and Refund Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              4. Cancellation and Refund Policy
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              Cancellation policies vary by service and provider:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li>Refunds are subject to the terms of individual service providers</li>
              <li>Cancellation fees may apply</li>
              <li>Force majeure events may affect cancellation terms</li>
              <li>Travel insurance is recommended for all bookings</li>
            </ul>
          </section>

          {/* Liability and Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              5. Liability and Disclaimers
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              GO.LK Travel acts as an intermediary between clients and service providers. We are not liable for:
            </p>
            <ul className="list-disc pl-6 text-luxury-cream space-y-2">
              <li>Acts of third-party service providers</li>
              <li>Weather conditions or natural disasters</li>
              <li>Travel delays or cancellations beyond our control</li>
              <li>Personal injury or property damage during travel</li>
            </ul>
          </section>

          {/* Privacy and Data Protection */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              6. Privacy and Data Protection
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              All content, trademarks, and intellectual property on our website and in our materials are owned by GO.LK Travel or our licensors. Unauthorized use is prohibited.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              8. Governing Law
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              These terms are governed by the laws of Sri Lanka. Any disputes will be resolved in the courts of Sri Lanka.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-luxury-gold mb-4">
              9. Contact Information
            </h2>
            <p className="text-luxury-cream leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-luxury-navy p-6 rounded-lg">
              <p className="text-luxury-cream">
                <strong>GO.LK Travel</strong><br />
                Email: info@golk.travel<br />
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

export default TermsOfService;