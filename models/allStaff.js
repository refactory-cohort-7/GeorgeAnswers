const mongoose = require('mongoose');

const allStaffSchema = new mongoose.Schema({
  job: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  nin: {
    type: String,
    trim: true,
  },
  lisenceNum: {
    type: String,
    trim: true,
  },
  residence: {
    type: String,
    trim: true,
  },
  phoneNum: {
    type: Number,
    trim: true,
  },
  pastIncidence: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('allStaff', allStaffSchema);
