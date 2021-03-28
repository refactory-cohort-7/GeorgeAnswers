const mongoose = require('mongoose');

const allStaffSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
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
  phoneNumber: {
    type: Number,
    trim: true,
  },
  jobTitle: {
    type: String,
    trim: true,
  },

  salary: {
    type: String,
    trim: true,
  },

  allowanceAmount: {
    type: String,
    trim: true,
  },
  pastIncident: {
    type: String,
    trim: true,
  },
  typeOfAllowance: {
    type: String,
    trim: true,
  },
  nationalIdNumber: {
    type: String,
    trim: true,
  },
  driversLisenceNumber: {
    type: String,
    trim: true,
  },
  placeOfResidence: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('AllStaff', allStaffSchema);
