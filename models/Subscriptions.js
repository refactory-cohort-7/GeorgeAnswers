const mongoose = require('mongoose');
const subscriptionsSchema = new mongoose.Schema({
  dateOfSubscription: {
    type: 'String',
    trim: 'true',
  },
  timeOfSubscription: {
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
});

module.exports = mongoose.model('Subscriptions', subscriptionsSchema);
