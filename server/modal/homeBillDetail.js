const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  name: String,
  unit: String,
  address: String,
  month: String,
  amount: String,
  customerId: Number,
  status: String,
}, { collection: 'HomeBIllDetail' });

module.exports = mongoose.model('HomeBIllDetail', BillSchema);
