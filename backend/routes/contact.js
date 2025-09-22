const express = require('express');
const Contact = require('../models/Contact');
const { contactValidation, handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// POST /api/contact - Create a new contact inquiry
router.post('/', contactValidation, handleValidationErrors, async (req, res) => {
  try {
    const { name, email, phone, destination, message } = req.body;

    // Create new contact inquiry
    const contact = new Contact({
      name,
      email,
      phone,
      destination,
      message
    });

    await contact.save();

    res.status(201).json({
      status: 'success',
      message: 'Contact inquiry submitted successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        status: contact.status,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to submit contact inquiry',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// GET /api/contact - Get all contact inquiries (for admin use)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const query = status ? { status } : {};
    
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v');

    const total = await Contact.countDocuments(query);

    res.status(200).json({
      status: 'success',
      data: {
        contacts,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalContacts: total,
          hasNext: page < Math.ceil(total / limit),
          hasPrev: page > 1
        }
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contact inquiries',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// GET /api/contact/:id - Get a specific contact inquiry
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');
    
    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact inquiry not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: { contact }
    });

  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch contact inquiry',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// PATCH /api/contact/:id - Update contact status (for admin use)
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'in_progress', 'resolved', 'closed'].includes(status)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid status. Must be one of: new, in_progress, resolved, closed'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact inquiry not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact status updated successfully',
      data: { contact }
    });

  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update contact inquiry',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// DELETE /api/contact/:id - Delete a contact inquiry (for admin use)
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact inquiry not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact inquiry deleted successfully'
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete contact inquiry',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;
