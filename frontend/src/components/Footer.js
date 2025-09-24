import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  /* Footer Links Data */
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'Premium Travel', href: '#experiences' },
      { name: 'Private Jets', href: '#experiences' },
      { name: 'Villa Rentals', href: '#experiences' },
      { name: 'Concierge', href: '#contact' }
    ],
    destinations: [
      { name: 'Europe', href: '#destinations' },
      { name: 'Asia', href: '#destinations' },
      { name: 'Americas', href: '#destinations' },
      { name: 'Africa', href: '#destinations' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  };

  /* Social Media Links */
  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'Facebook', href: '#', icon: 'FB' },
    { name: 'Twitter', href: '#', icon: 'TW' },
    { name: 'LinkedIn', href: '#', icon: 'LI' }
  ];

  return (
    <footer className="bg-luxury-navy text-luxury-cream">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-serif font-bold luxury-text-gradient">
                GO.LK
              </span>
            </div>
            <p className="text-luxury-cream mb-6 leading-relaxed font-sans">
              Creating extraordinary travel experiences for discerning clients worldwide. 
              Your luxury journey begins with us.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 luxury-gradient rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-luxury-cream font-sans">Global Network of Partners</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 luxury-gradient rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-luxury-cream font-sans">Personalized Experiences</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-luxury-gold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-luxury-gold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-luxury-gold">Destinations</h3>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-luxury-cream hover:text-luxury-gold transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} GO.LK Travel. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {footerLinks.support.map((link, index) => {
                // Use Link for internal routes, regular anchor for external links
                if (link.href.startsWith('/')) {
                  return (
                    <Link
                      key={index}
                      to={link.href}
                      className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  );
                } else {
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  );
                }
              })}
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 luxury-gradient rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  <span className="text-xs font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;