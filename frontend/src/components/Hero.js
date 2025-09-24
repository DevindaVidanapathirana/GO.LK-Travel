import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  /* Hero Images */
  const heroImages = [
    'https://i0.wp.com/trailsofinju.com/wp-content/uploads/2021/01/Adventure-Travel-In-India.png?resize=780%2C348&ssl=1',
    'https://images.unsplash.com/photo-1626460189233-7c6d5cc04ff8?q=80&w=1471&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2070&q=80'
  ];

  /* Auto change image every 5 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
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
            Discover
            <span className="block text-yellow-400">Extraordinary</span>
            <span className="block">Destinations</span>
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Experience the world's most luxurious destinations with our curated travel experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/explore-destinations" className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition inline-block text-center">
              Explore Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator (Simple Arrow) */}
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
  );
};

export default Hero;