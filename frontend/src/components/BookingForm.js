import React, { useState } from 'react';

const BookingForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    
    // Travel Information
    destination: '',
    travelDates: {
      departure: '',
      return: ''
    },
    travelers: 1,
    accommodation: '',
    roomType: '',
    
    // Preferences
    budget: '',
    interests: [],
    specialRequests: '',
    dietaryRequirements: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelationship: '',
    
    // Additional Services
    flights: false,
    transfers: false,
    travelInsurance: false,
    conciergeService: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const destinations = [
    'Santorini, Greece',
    'Maldives',
    'Swiss Alps',
    'Kyoto, Japan',
    'Dubai, UAE',
    'Patagonia, Chile',
    'Bali, Indonesia',
    'Tuscany, Italy',
    'Reykjavik, Iceland',
    'Cape Town, South Africa'
  ];

  const accommodationTypes = [
    'Luxury Resort',
    'Private Villa',
    'Boutique Hotel',
    'Mountain Lodge',
    'Overwater Bungalow',
    'Traditional Ryokan',
    'Desert Camp',
    'Safari Lodge'
  ];

  const roomTypes = [
    'Presidential Suite',
    'Ocean View Suite',
    'Garden Villa',
    'Overwater Villa',
    'Mountain View Room',
    'City View Room',
    'Standard Room'
  ];

  const budgetRanges = [
    'Under $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000 - $50,000',
    'Over $50,000'
  ];

  const interestOptions = [
    'Beach & Relaxation',
    'Adventure & Sports',
    'Cultural Experiences',
    'Fine Dining',
    'Spa & Wellness',
    'Photography',
    'Wildlife & Nature',
    'History & Heritage',
    'Nightlife & Entertainment',
    'Shopping'
  ];

  /* Handle Input Changes */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Handle nested fields (e.g., travelDates.departure)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
      return;
    }

    // Handle checkboxes
    if (type === 'checkbox') {
      if (name === 'interests') {
        setFormData(prev => ({
          ...prev,
          interests: checked 
            ? [...prev.interests, value]
            : prev.interests.filter(interest => interest !== value)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
      return;
    }

    // Regular input
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /* Simple Validation (Only Required Fields) */
  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'Required';
      if (!formData.lastName) newErrors.lastName = 'Required';
      if (!formData.email) newErrors.email = 'Required';
      if (!formData.phone) newErrors.phone = 'Required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Required';
      if (!formData.nationality) newErrors.nationality = 'Required';
    } else if (step === 2) {
      if (!formData.destination) newErrors.destination = 'Required';
      if (!formData.travelDates.departure) newErrors['travelDates.departure'] = 'Required';
      if (!formData.travelDates.return) newErrors['travelDates.return'] = 'Required';
      if (!formData.accommodation) newErrors.accommodation = 'Required';
      if (!formData.roomType) newErrors.roomType = 'Required';
      if (!formData.budget) newErrors.budget = 'Required';
    } else if (step === 4) {
      if (!formData.emergencyName) newErrors.emergencyName = 'Required';
      if (!formData.emergencyPhone) newErrors.emergencyPhone = 'Required';
      if (!formData.emergencyRelationship) newErrors.emergencyRelationship = 'Required';
    }

    return newErrors;
  };

  /* Navigation */
  const handleNext = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
    } else {
      setErrors({});
      if (currentStep < 4) setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  /* Form Submission (No backend needed) */
  const handleSubmit = (e) => {
    e.preventDefault();
    const stepErrors = validateStep(4);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setIsSubmitted(true);
  };

  /* Step 1: Personal Information */
  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nationality *</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.nationality ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
        </div>
      </div>
    </div>
  );

  /* Step 2: Travel Details */
  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6">Travel Details</h3>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Destination *</label>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
            errors.destination ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a destination</option>
          {destinations.map(dest => (
            <option key={dest} value={dest}>{dest}</option>
          ))}
        </select>
        {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Departure Date *</label>
          <input
            type="date"
            name="travelDates.departure"
            value={formData.travelDates.departure}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors['travelDates.departure'] ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors['travelDates.departure'] && <p className="text-red-500 text-sm mt-1">{errors['travelDates.departure']}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Return Date *</label>
          <input
            type="date"
            name="travelDates.return"
            value={formData.travelDates.return}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors['travelDates.return'] ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors['travelDates.return'] && <p className="text-red-500 text-sm mt-1">{errors['travelDates.return']}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers *</label>
          <select
            name="travelers"
            value={formData.travelers}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.travelers ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
          {errors.travelers && <p className="text-red-500 text-sm mt-1">{errors.travelers}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range *</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.budget ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select budget range</option>
            {budgetRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Accommodation Type *</label>
          <select
            name="accommodation"
            value={formData.accommodation}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.accommodation ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select accommodation type</option>
            {accommodationTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.accommodation && <p className="text-red-500 text-sm mt-1">{errors.accommodation}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Room Type *</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.roomType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select room type</option>
            {roomTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.roomType && <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>}
        </div>
      </div>
    </div>
  );

  /* Step 3: Preferences */
  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6">Preferences & Interests</h3>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">What are your interests? (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interestOptions.map(interest => (
            <label key={interest} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="interests"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleInputChange}
                className="w-5 h-5 text-luxury-gold border-gray-300 rounded focus:ring-luxury-gold"
              />
              <span className="text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary Requirements</label>
        <textarea
          name="dietaryRequirements"
          value={formData.dietaryRequirements}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
          placeholder="Please specify any dietary restrictions..."
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
          placeholder="Any special requests..."
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold text-luxury-dark mb-4">Additional Services</h4>
        <div className="space-y-3">
          {[
            { name: 'flights', label: 'Flight Bookings' },
            { name: 'transfers', label: 'Airport Transfers' },
            { name: 'travelInsurance', label: 'Travel Insurance' },
            { name: 'conciergeService', label: '24/7 Concierge Service' }
          ].map(service => (
            <label key={service.name} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name={service.name}
                checked={formData[service.name]}
                onChange={handleInputChange}
                className="w-5 h-5 text-luxury-gold border-gray-300 rounded focus:ring-luxury-gold"
              />
              <span className="text-gray-700">{service.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  /* Step 4: Emergency Contact */
  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6">Emergency Contact</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Name *</label>
          <input
            type="text"
            name="emergencyName"
            value={formData.emergencyName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.emergencyName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.emergencyName && <p className="text-red-500 text-sm mt-1">{errors.emergencyName}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Phone *</label>
          <input
            type="tel"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
              errors.emergencyPhone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Relationship *</label>
        <select
          name="emergencyRelationship"
          value={formData.emergencyRelationship}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent ${
            errors.emergencyRelationship ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select relationship</option>
          <option value="spouse">Spouse</option>
          <option value="parent">Parent</option>
          <option value="sibling">Sibling</option>
          <option value="child">Child</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </select>
        {errors.emergencyRelationship && <p className="text-red-500 text-sm mt-1">{errors.emergencyRelationship}</p>}
      </div>

      <div className="bg-luxury-gray p-6 rounded-xl">
        <h4 className="text-lg font-semibold text-luxury-dark mb-4">Booking Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Destination:</span>
            <span className="font-semibold">{formData.destination || 'Not selected'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Travel Dates:</span>
            <span className="font-semibold">
              {formData.travelDates.departure && formData.travelDates.return 
                ? `${formData.travelDates.departure} - ${formData.travelDates.return}`
                : 'Not selected'
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Travelers:</span>
            <span className="font-semibold">{formData.travelers} {formData.travelers === 1 ? 'Person' : 'People'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Budget:</span>
            <span className="font-semibold">{formData.budget || 'Not selected'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Accommodation:</span>
            <span className="font-semibold">{formData.accommodation || 'Not selected'}</span>
          </div>
        </div>
      </div>
    </div>
  );

  /* Success Screen */
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-luxury-gray flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 max-w-2xl mx-6 text-center shadow-2xl">
          <div className="w-20 h-20 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold text-luxury-dark mb-4">Booking Request Submitted!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you! Our travel specialists will contact you within 24 hours.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  dateOfBirth: '',
                  nationality: '',
                  destination: '',
                  travelDates: { departure: '', return: '' },
                  travelers: 1,
                  accommodation: '',
                  roomType: '',
                  budget: '',
                  interests: [],
                  specialRequests: '',
                  dietaryRequirements: '',
                  emergencyName: '',
                  emergencyPhone: '',
                  emergencyRelationship: '',
                  flights: false,
                  transfers: false,
                  travelInsurance: false,
                  conciergeService: false
                });
              }}
              className="luxury-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Submit Another Request
            </button>
            <div>
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-semibold hover:bg-luxury-gold hover:text-white transition-all duration-300"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Main Form UI */
  return (
    <div className="min-h-screen bg-luxury-gray py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-start mb-6">
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="flex items-center space-x-2 text-luxury-gold hover:text-luxury-dark transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-semibold">Back to Home</span>
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-6">
              Book Your <span className="luxury-text-gradient">Dream Vacation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our travel specialists create an unforgettable luxury experience tailored just for you
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map(step => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step ? 'luxury-gradient text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'luxury-gradient' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Personal Info</span>
              <span>Travel Details</span>
              <span>Preferences</span>
              <span>Emergency Contact</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
            {errors.general && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                {errors.general}
              </div>
            )}
            
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white'
                }`}
              >
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="luxury-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="luxury-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Submit Booking Request
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;