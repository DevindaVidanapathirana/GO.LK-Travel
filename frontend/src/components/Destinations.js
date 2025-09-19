import React, { useState } from 'react';

const Destinations = () => {
  const [activeDestination, setActiveDestination] = useState(0);

  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Experience the breathtaking sunsets and white-washed buildings of this iconic Greek island.',
      price: 'From $2,500',
      duration: '7 days',
      highlights: ['Private villa', 'Wine tasting', 'Sunset cruise', 'Photography tour']
    },
    {
      id: 2,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1506905925346-14bda2d134d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Luxury overwater bungalows and crystal-clear waters await in this tropical paradise.',
      price: 'From $3,200',
      duration: '5 days',
      highlights: ['Overwater villa', 'Spa treatments', 'Snorkeling', 'Private beach']
    },
    {
      id: 3,
      name: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1506905925346-14bda2d134d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Majestic mountain views and world-class skiing in the heart of the Swiss Alps.',
      price: 'From $4,000',
      duration: '6 days',
      highlights: ['Mountain lodge', 'Ski lessons', 'Helicopter tour', 'Fine dining']
    },
    {
      id: 4,
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Immerse yourself in traditional Japanese culture and stunning temple gardens.',
      price: 'From $2,800',
      duration: '8 days',
      highlights: ['Traditional ryokan', 'Tea ceremony', 'Temple tours', 'Kaiseki dining']
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-6">
            Exquisite <span className="luxury-text-gradient">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's most luxurious destinations, carefully curated for the ultimate travel experience
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`group cursor-pointer transition-all duration-500 ${
                activeDestination === index ? 'transform scale-105' : 'hover:transform hover:scale-105'
              }`}
              onClick={() => setActiveDestination(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">{destination.name}</h3>
                  <p className="text-sm opacity-90 mb-3">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-luxury-gold font-semibold">{destination.price}</span>
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>

                {/* Active indicator */}
                {activeDestination === index && (
                  <div className="absolute top-4 right-4 w-6 h-6 luxury-gradient rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <img
                src={destinations[activeDestination].image}
                alt={destinations[activeDestination].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-serif font-bold text-luxury-dark mb-4">
                {destinations[activeDestination].name}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {destinations[activeDestination].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-luxury-gray rounded-xl">
                  <div className="text-2xl font-bold luxury-text-gradient">
                    {destinations[activeDestination].price}
                  </div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
                <div className="text-center p-4 bg-luxury-gray rounded-xl">
                  <div className="text-2xl font-bold luxury-text-gradient">
                    {destinations[activeDestination].duration}
                  </div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-luxury-dark mb-4">Experience Highlights</h4>
                <div className="grid grid-cols-2 gap-3">
                  {destinations[activeDestination].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 luxury-gradient rounded-full"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="luxury-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Book This Experience
                </button>
                <button className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-semibold hover:bg-luxury-gold hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
