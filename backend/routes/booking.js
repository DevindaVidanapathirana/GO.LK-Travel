const express = require('express');
const Booking = require('../models/Booking');
const { bookingValidation, handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// POST /api/booking - Create a new booking inquiry
router.post('/', bookingValidation, handleValidationErrors, async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({
      status: 'success',
      message: 'Booking inquiry submitted successfully'
    });

  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to submit booking inquiry'
    });
  }
});

// GET /api/booking - Get all booking inquiries
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: 'success',
      data: { bookings }
    });

  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch booking inquiries'
    });
  }
});

// GET /api/booking/:id - Get a specific booking inquiry
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        status: 'error',
        message: 'Booking inquiry not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: { booking }
    });

  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch booking inquiry'
    });
  }
});

// PATCH /api/booking/:id - Update booking status
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: new Date() },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        status: 'error',
        message: 'Booking inquiry not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Booking status updated successfully'
    });

  } catch (error) {
    console.error('Update booking error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update booking inquiry'
    });
  }
});

// DELETE /api/booking/:id - Delete a booking inquiry
router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        status: 'error',
        message: 'Booking inquiry not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Booking inquiry deleted successfully'
    });

  } catch (error) {
    console.error('Delete booking error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete booking inquiry'
    });
  }
});

module.exports = router;