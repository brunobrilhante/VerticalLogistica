const mongoose = require('mongoose');

const pedidoItemSchema = new mongoose.Schema({
  userId: {
    type: Number,
    minlength: 10,
    required: true
  },
  userName: {
    type: String,
    minlength: 45,
    required: true
  },
  orderId: {
    type: Number,
    minlength: 10,
  },
  prodId: {
    type: Number,
    minlength: 10,
    required: true
  },
  value: {
    type: Number,
    minlength: 12,
    required: true
  },
  date: {
    type: Date,
    minlength: 8,
    required: true
  }
});

module.exports = mongoose.model('PedidoItem', pedidoItemSchema);