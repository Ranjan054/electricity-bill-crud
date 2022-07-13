const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  month: String,
  amount: Number,
  status: String,
}, { collection: 'HomeBIllDetail' });

module.exports = mongoose.model('HomeBIllDetail', BillSchema);
