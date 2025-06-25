const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  title: String,
  category: String,
  priority: String,
  description: String,
  location: String,
  attachment: String,
  name: String,
  email: String,
  date: String,
  status: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
