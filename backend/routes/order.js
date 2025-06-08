const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const Order = require('../models/Order');
const User = require('../models/User');

// @route   POST /api/orders
// @desc    Create a new order
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const {
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      orderNotes
    } = req.body;

    // Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one item' });
    }

    if (!totalAmount || totalAmount <= 0) {
      return res.status(400).json({ message: 'Invalid total amount' });
    }

    if (!shippingAddress || !shippingAddress.fullName || !shippingAddress.address || 
        !shippingAddress.city || !shippingAddress.state || !shippingAddress.postalCode || 
        !shippingAddress.phone) {
      return res.status(400).json({ message: 'All shipping address fields are required' });
    }

    if (!paymentMethod || !paymentMethod.type || !paymentMethod.details) {
      return res.status(400).json({ message: 'Payment method details are required' });
    }

    // Create the order
    const order = new Order({
      userId: req.user._id,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      orderNotes: orderNotes || ''
    });

    // Save the order
    const savedOrder = await order.save();

    // Increment the user's totalOrders count
    await User.findByIdAndUpdate(
      req.user._id,
      { $inc: { totalOrders: 1 } }
    );

    // Get updated user data
    const updatedUser = await User.findById(req.user._id).select('-password');

    res.status(201).json({
      message: 'Order created successfully',
      order: savedOrder,
      user: updatedUser // Send back updated user data with new totalOrders
    });
  } catch (error) {
    console.error('Order creation error:', error);
    // Log specific Mongoose validation errors
    if (error.name === 'ValidationError') {
      console.error('Mongoose Validation Error:', error.errors);
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation Error',
        errors: errors,
        details: error.errors
      });
    }
    res.status(500).json({ 
      message: 'Error creating order', 
      error: error.message,
      details: error.errors // Include validation errors if any
    });
  }
});

// @route   GET /api/orders
// @desc    Get all orders for the logged-in user
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id })
      .sort({ createdAt: -1 }); // Sort by newest first
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// @route   GET /api/orders/:id
// @desc    Get a single order by ID
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
});

module.exports = router; 