const { body, validationResult } = require('express-validator');

// Contact form validation
const contactValidation = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message is required')
];

// Booking form validation  
const bookingValidation = [
  // Personal Information
  body('firstName').trim().isLength({ min: 2 }).withMessage('First name is required'),
  body('lastName').trim().isLength({ min: 2 }).withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('dateOfBirth').isISO8601().withMessage('Valid date of birth is required'),
  body('nationality').trim().isLength({ min: 2 }).withMessage('Nationality is required'),
  
  // Travel Information
  body('destination').trim().isLength({ min: 2 }).withMessage('Destination is required'),
  body('travelDates.departure').isISO8601().withMessage('Departure date is required'),
  body('travelDates.return').isISO8601().withMessage('Return date is required'),
  body('travelers').isInt({ min: 1 }).withMessage('At least 1 traveler required'),
  body('accommodation').trim().isLength({ min: 2 }).withMessage('Accommodation is required'),
  body('roomType').trim().isLength({ min: 2 }).withMessage('Room type is required'),
  body('budget').trim().isLength({ min: 2 }).withMessage('Budget range is required'),
  
  // Emergency Contact
  body('emergencyName').trim().isLength({ min: 2 }).withMessage('Emergency contact name is required'),
  body('emergencyPhone').trim().notEmpty().withMessage('Emergency phone is required'),
  body('emergencyRelationship').notEmpty().withMessage('Emergency relationship is required')
];

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg
      }))
    });
  }
  next();
};

module.exports = {
  contactValidation,
  bookingValidation,
  handleValidationErrors
};