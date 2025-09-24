import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  /* Form Submission (Simplified - No backend required) */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate successful submission
    setSubmitStatus('success');
    setErrors({});
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  /* Contact Information Data */
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      details: ['123 Isurupura Road,', 'Kothalawala,', 'Kaduwela.']
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      details: ['+94 71 418 6839', '011 297 8001']
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      details: ['info@golktravel.com', 'support@golktravel.com']
    }
  ];

  const destinations = [
    'Thailand',
    'Maldives',
    'New Zealand',
    'Kyoto, Japan',
    'Dubai, UAE',
    'Patagonia, Chile',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-6">
            Get In <span className="luxury-text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start planning your next luxury adventure? Our travel experts are here to help you create the perfect experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                We're here to help you plan the perfect premium travel experience. Reach out to us through any of the channels below.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-luxury-dark mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-luxury-dark mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <span className="text-sm font-semibold">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-luxury-gray rounded-3xl p-8">
              <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6">
                Plan Your Journey
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-luxury-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-300 ${
                        errors.name ? 'border-red-500' : 'border-gray-300 focus:border-luxury-gold'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-luxury-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-300 ${
                        errors.email ? 'border-red-500' : 'border-gray-300 focus:border-luxury-gold'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-luxury-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-300 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-luxury-gold'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-luxury-dark mb-2">
                      Destination Interest
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-luxury-gold focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-luxury-dark mb-2">
                    Tell Us About Your Dream Trip
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors duration-300 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300 focus:border-luxury-gold'
                    }`}
                    placeholder="Describe your ideal premium travel experience..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-lg luxury-gradient text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  </div>
                )}
                
                {errors.general && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {errors.general}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="bg-luxury-gray rounded-3xl p-8">
            <h3 className="text-2xl font-serif font-bold text-luxury-dark text-center mb-8">
              Visit Our Office
            </h3>
            <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center w-full h-full flex flex-col items-center justify-center p-4">
                {/* Icon */}
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                {/* Address with Google Maps link */}
                <p className="text-gray-600 mb-2">Find Us Here</p>
                <a
                  href="https://www.google.com/maps/place/Sri+Lanka+Institute+of+Information+Technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline mb-4"
                >
                  123 Isurupura Road, Kothalawala, Kaduwela.
                </a>

                {/* Embedded Map */}
                <div className="w-full h-64 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985117158014!2d79.97294449999998!3d6.914677500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1758679274812!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;