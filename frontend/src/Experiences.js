import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Experiences = () => {
  const [activeTab, setActiveTab] = useState('luxury');
  const navigate = useNavigate();

  /* Experience Categories Data */
  const experienceCategories = {
    luxury: {
      title: 'Luxury Experiences',
      experiences: [
        {
          id: 1,
          title: 'Private Jet Charter',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
          description: 'Travel in ultimate comfort with our private jet charter services',
          price: 'From $15,000',
          duration: 'Per flight',
          features: ['Personal concierge', 'Custom catering', 'Luxury amenities', 'Flexible scheduling']
        },
        {
          id: 2,
          title: 'Exclusive Villa Rentals',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          description: 'Stay in the world\'s most exclusive private villas and estates',
          price: 'From $5,000/night',
          duration: 'Minimum 3 nights',
          features: ['Private staff', 'Infinity pools', 'Ocean views', 'Personal chef']
        },
        {
          id: 3,
          title: 'Michelin Star Dining',
          image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          description: 'Exclusive access to the world\'s finest restaurants and chefs',
          price: 'From $500/person',
          duration: 'Per meal',
          features: ['Private chef', 'Wine pairing', 'Exclusive venues', 'Custom menus']
        }
      ]
    },
    adventure: {
      title: 'Adventure Experiences',
      experiences: [
        {
          id: 4,
          title: 'Helicopter Safari',
          image: 'https://maunaloahelicopters.edu/wp-content/uploads/2021/06/IMG_7414-1-scaled.jpg',
          description: 'Soar above breathtaking landscapes in a private helicopter',
          price: 'From $2,000',
          duration: '2-4 hours',
          features: ['Private pilot', 'Scenic routes', 'Photo opportunities', 'Champagne service']
        },
        {
          id: 5,
          title: 'Deep Sea Fishing',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          description: 'Exclusive deep sea fishing expeditions with professional guides',
          price: 'From $1,500',
          duration: 'Full day',
          features: ['Professional guide', 'Top equipment', 'Catch & cook', 'Luxury yacht']
        },
        {
          id: 6,
          title: 'Mountain Climbing',
          image: 'https://t3.ftcdn.net/jpg/01/89/10/70/C.jpg',
          description: 'Conquer the world\'s most challenging peaks with expert guides',
          price: 'From $3,000',
          duration: '3-7 days',
          features: ['Expert guides', 'Safety equipment', 'Base camp luxury', 'Summit celebration']
        }
      ]
    },
    cultural: {
      title: 'Cultural Experiences',
      experiences: [
        {
          id: 7,
          title: 'Private Museum Tours',
          image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          description: 'Exclusive after-hours access to the world\'s greatest museums',
          price: 'From $800',
          duration: '2-3 hours',
          features: ['Private curator', 'Exclusive access', 'Art history expert', 'Champagne reception']
        },
        {
          id: 8,
          title: 'Traditional Ceremonies',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          description: 'Participate in authentic cultural ceremonies and traditions',
          price: 'From $600',
          duration: 'Half day',
          features: ['Local experts', 'Traditional attire', 'Cultural immersion', 'Photography']
        },
        {
          id: 9,
          title: 'Artisan Workshops',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          description: 'Learn from master craftsmen in their traditional workshops',
          price: 'From $400',
          duration: '3-4 hours',
          features: ['Master craftsmen', 'Hands-on learning', 'Take home creation', 'Cultural stories']
        }
      ]
    }
  };

  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-6">
            Unforgettable <span className="luxury-text-gradient">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From luxury adventures to cultural immersions, create memories that last a lifetime
          </p>
        </div>

        {/* Experience Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(experienceCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'luxury-gradient text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {experienceCategories[category].title}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceCategories[activeTab].experiences.map((experience) => (
            <div
              key={experience.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="glass-effect px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">{experience.price}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-3">
                  {experience.title}
                </h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-luxury-gold font-semibold">{experience.price}</span>
                  <span className="text-sm text-gray-500">{experience.duration}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-luxury-dark mb-2">Includes:</h4>
                  <div className="space-y-1">
                    {experience.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 luxury-gradient rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/booking')}
                  className="w-full luxury-gradient text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Book Experience
                </button>
              </div>
            </div>
          ))}
        </div>

      {/* Call to Action */}
<div className="text-center mt-20">
  <div className="luxury-gradient rounded-3xl p-12 text-white relative overflow-hidden">
    {/* Optional background pattern for extra luxury */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
    </div>
    
    <div className="relative z-10">
      <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
        Ready to Create Your Dream Experience?
      </h3>
      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
        Let our travel experts craft a personalized journey just for you
      </p>
      <button 
        onClick={() => navigate('/booking')}
        className="bg-white text-luxury-dark px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50"
      >
        Start Planning
      </button>
    </div>
    
    {/* Floating elements for visual interest */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
    <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Experiences;