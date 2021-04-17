const mongoose = require('mongoose');
const subscriptionsSchema = new mongoose.Schema({
  dateOfRequest: {
    type: 'String',
    trim: 'true',
  },
  timeOfRequest: {
    type: 'String',
    trim: 'true',
  },
  customerName: {
    type: 'string',
    trim: 'true',
    require: [true, { message: 'Please enter the customer name.' }],
  },
  email: {
    type: 'String',
    trim: 'true',
  },
  nationalIdNumber: {
    type: 'String',
    trim: 'True',
  },
  placeOfResidence: {
    type: 'String',
    trim: 'true',
    require: [true, { message: 'Please enter the place of residence.' }],
  },
  serviceRequested: {
    type: 'String',
    trim: 'true',
  },
  subPeriod: {
    type: 'String',
    trim: 'true',
  },
  phoneNumber: {
    type: 'String',
    trim: 'true',
    require: [true, { message: 'Customer phone number required.' }],
  },
  numTrucks: {
    type: 'String',
    trim: 'true',
    require: true,
  },
  assignTruck: {
    type: 'String',
  },
  driverName: {
    type: 'String',
    trim: 'true',
  },
  timeOfService: {
    type: 'String',
    trim: 'true',
    require: [true, { message: 'Time of service required.' }],
  },
  dateOfService: {
    type: 'String',
    trim: 'true',
    require: [true, { message: 'Date of service required.' }],
  },
  serviceCost: {
    type: 'Number',
    trim: 'true',
  },
});

module.exports = mongoose.model('Subscriptions', subscriptionsSchema);
