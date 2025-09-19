import React from 'react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '50+', label: 'Countries Covered' },
    { number: '10,000+', label: 'Happy Travelers' },
    { number: '24/7', label: 'Concierge Service' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      description: 'Passionate about creating extraordinary travel experiences'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Ensuring every detail is perfect for our clients'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Travel Curator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Expert in discovering hidden gems around the world'
    }
  ];

  return (
    <section id="about" className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-6">
            About <span className="luxury-text-gradient">LuxeTravel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we have been crafting extraordinary travel experiences for discerning clients who demand the finest in luxury, service, and exclusivity. Our passion for perfection and attention to detail sets us apart in the world of luxury travel.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold luxury-text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-serif font-bold text-luxury-dark mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2008 by travel enthusiasts who believed that every journey should be extraordinary, LuxeTravel began as a small boutique agency with a big dream. We started with a simple mission: to create travel experiences that go beyond expectations and create memories that last a lifetime.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Today, we are proud to be one of the world's leading luxury travel companies, with a global network of partners and a team of dedicated professionals who share our passion for excellence. Every trip we plan is a masterpiece, carefully crafted to reflect our clients' unique desires and dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="luxury-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Our Philosophy
              </button>
              <button className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-semibold hover:bg-luxury-gold hover:text-white transition-all duration-300">
                Awards & Recognition
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Luxury travel team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 luxury-gradient rounded-full opacity-20 animate-float"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-luxury-dark text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full luxury-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                <h4 className="text-xl font-serif font-bold text-luxury-dark mb-2">
                  {member.name}
                </h4>
                <p className="text-luxury-gold font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h3 className="text-3xl font-serif font-bold text-luxury-dark text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-luxury-dark mb-3">Passion</h4>
              <p className="text-gray-600">
                We are passionate about travel and committed to creating experiences that exceed expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-luxury-dark mb-3">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in every detail, ensuring our clients receive the highest quality service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-luxury-dark mb-3">Trust</h4>
              <p className="text-gray-600">
                We build lasting relationships based on trust, transparency, and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
