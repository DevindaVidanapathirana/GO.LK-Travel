const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  nationality: {
    type: String,
    required: true,
    trim: true
  },
  
  // Travel Information
  destination: {
    type: String,
    required: true,
    trim: true
  },
  travelDates: {
    departure: {
      type: Date,
      required: true
    },
    return: {
      type: Date,
      required: true
    }
  },
  travelers: {
    type: Number,
    required: true
  },
  accommodation: {
    type: String,
    required: true,
    trim: true
  },
  roomType: {
    type: String,
    required: true,
    trim: true
  },
  
  // Preferences
  budget: {
    type: String,
    required: true,
    trim: true
  },
  interests: [{
    type: String,
    trim: true
  }],
  specialRequests: {
    type: String,
    trim: true
  },
  dietaryRequirements: {
    type: String,
    trim: true
  },
  
  // Emergency Contact
  emergencyName: {
    type: String,
    required: true,
    trim: true
  },
  emergencyPhone: {
    type: String,
    required: true,
    trim: true
  },
  emergencyRelationship: {
    type: String,
    required: true,
    trim: true
  },
  
  // Additional Services
  flights: {
    type: Boolean,
    default: false
  },
  transfers: {
    type: Boolean,
    default: false
  },
  travelInsurance: {
    type: Boolean,
    default: false
  },
  conciergeService: {
    type: Boolean,
    default: false
  },
  
  // Booking Status
  status: {
    type: String,
    default: 'pending'
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
bookingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Validation: Return date must be after departure date
bookingSchema.pre('save', function(next) {
  if (this.travelDates.departure && this.travelDates.return) {
    if (this.travelDates.return <= this.travelDates.departure) {
      const error = new Error('Return date must be after departure date');
      return next(error);
    }
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);