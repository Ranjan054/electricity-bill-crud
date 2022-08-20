const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  unit: {
    type: Number,
    required: true,
    min: 0
  },
  address: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  customerId: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    required: true
  },
}, { collection: 'HomeBIllDetail' });

module.exports = mongoose.model('HomeBIllDetail', BillSchema);
