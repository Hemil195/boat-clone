const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    productId: {
      type: Number,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  shippingAddress: {
    fullName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true,
      default: 'India'
    },
    phone: {
      type: String,
      required: true
    }
  },
  paymentMethod: {
    type: {
      type: String,
      enum: ['card', 'upi', 'netbanking'],
      required: true
    },
    details: {
      type: Object,
      required: true
    }
  },
  orderNotes: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

orderSchema.pre('save', function(next) {
  const calculatedTotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (Math.abs(calculatedTotal - this.totalAmount) > 0.01) {
    next(new Error('Total amount does not match sum of items'));
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema); 