import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ExploreDestinations = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  /* Hero Images */
  const heroImages = [
    'https://www.tourcompass.co.uk/wp-content/uploads/2024/08/couple-exploring-khao-sok-in-thailand-6.jpg',
    'https://visitmaldives.s3.amazonaws.com/go0mRMwZ/c/kxhw2dyl-shareable_image.jpg',
    'https://explore-live.s3.eu-west-1.amazonaws.com/medialibraries/explore/explore-media/destinations/asia/japan/japan-banner.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704211523%201920w'
  ];

  /* Auto-slide every 5 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  /* Destination Data */
  const categories = ['all', 'beach', 'mountain', 'city', 'cultural', 'adventure'];

  const destinations = [
    {
      id: 1,
      name: 'Thailand',
      category: 'beach',
      image: 'https://cdn.forevervacation.com/uploads/blog/thailand-visitor-guide-things-to-do-4406.jpg',
      description: 'Discover golden temples, vibrant street markets, and tropical beaches in the Land of Smiles.',
      price: 'From $2,500',
      duration: '7 days',
      rating: 4.9,
      highlights: ['Grand Palace tour','Street food experience in Bangkok','Phi Phi Islands boat trip','Floating market visit','Traditional Thai massage']
    },
    {
      id: 2,
      name: 'Maldives',
      category: 'beach',
      image: 'https://samudramaldives.com/wp-content/uploads/where-is-maldives-location-of-maldives-on-world-map.jpg',
      description: 'Luxury overwater bungalows and crystal-clear waters await in this tropical paradise.',
      price: 'From $3,200',
      duration: '5 days',
      rating: 4.8,
      highlights: ['Overwater villa', 'Spa treatments', 'Snorkeling', 'Private beach']
    },
    {
      id: 3,
      name: 'New Zealand',
      category: 'mountain',
      image: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/EECD/production/_127033116_gettyimages-457521250.jpg',
      description: 'Explore stunning fjords, snow-capped mountains, and emerald lakes in this adventure seeker’s paradise.',
      price: 'From $4,000',
      duration: '6 days',
      rating: 4.9,
      highlights: ['Milford Sound cruise','Glowworm caves tour','Hobbiton movie set visit','Rotorua geothermal springs','Scenic hikes in Fiordland National Park']
    },
    {
      id: 4,
      name: 'Japan',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Immerse yourself in traditional Japanese culture and stunning temple gardens.',
      price: 'From $2,800',
      duration: '8 days',
      rating: 4.7,
      highlights: ['Traditional ryokan', 'Tea ceremony', 'Temple tours', 'Kaiseki dining']
    },
    {
      id: 5,
      name: 'Dubai, UAE',
      category: 'city',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2070&q=80',
      description: 'Experience the ultimate luxury in the world\'s most futuristic city.',
      price: 'From $3,500',
      duration: '6 days',
      rating: 4.8,
      highlights: ['Burj Khalifa', 'Desert safari', 'Luxury shopping', 'Fine dining']
    },
    {
      id: 6,
      name: 'Patagonia, Chile',
      category: 'adventure',
      image: 'https://images.squarespace-cdn.com/content/v1/6137f1eafdd46630c1744367/118c6bda-87ce-422c-95eb-1c8085e160f4/DSC00486-2.jpg',
      description: 'Discover the raw beauty of one of the world\'s last wilderness frontiers.',
      price: 'From $4,500',
      duration: '10 days',
      rating: 4.9,
      highlights: ['Glacier hiking', 'Wildlife watching', 'Luxury lodge', 'Photography tours']
    }
  ];

  const filteredDestinations = selectedCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* 🎬 DYNAMIC HERO SLIDER (REPLACED STATIC HERO) */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image Slides */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Luxury destination ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Hero Text & Buttons */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Our
              <span className="block text-yellow-400">Curated</span>
              <span className="block">Destinations</span>
            </h1>

            <p className="text-lg md:text-xl mb-8">
              Handpicked luxury escapes across the globe — designed for unforgettable moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block text-center"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Image Dot Indicators */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentImage ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Rest of your ExploreDestinations content */}
      <div className="container mx-auto px-6 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-400 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group cursor-pointer"
              onClick={() => setSelectedDestination(destination)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-sm opacity-90 mb-3 line-clamp-2">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 font-semibold">{destination.price}</span>
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Destinations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured <span className="text-yellow-400">Experiences</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLG0z50Jy-kfwXT9BWEnILx81lPDWjLpHRw&s"
                alt="Luxury Resort"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Private Island Retreat</h3>
                <p className="text-lg mb-6">Exclusive access to pristine private islands with personalized service</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2070&q=80"
                alt="Cultural Experience"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Cultural Immersion</h3>
                <p className="text-lg mb-6">Authentic experiences with local communities and traditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.name}
                    className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-800">
                      {selectedDestination.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold">{selectedDestination.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {selectedDestination.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-100 rounded-xl">
                      <div className="text-2xl font-bold text-yellow-500">
                        {selectedDestination.price}
                      </div>
                      <div className="text-sm text-gray-600">Starting Price</div>
                    </div>
                    <div className="text-center p-4 bg-gray-100 rounded-xl">
                      <div className="text-2xl font-bold text-yellow-500">
                        {selectedDestination.duration}
                      </div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Experience Highlights</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedDestination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => navigate('/booking')}
                      className="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Book This Experience
                    </button>
                    <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreDestinations;