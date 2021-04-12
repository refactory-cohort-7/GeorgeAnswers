const mongoose = require('mongoose');
const RequestsSchema = new mongoose.Schema({
  dateOfRequest: {
    type: 'String',
    trim: 'true',
  },
  timeOfRequest: {
    type: 'String',
    trim: 'true',
  },
  custName: {
    type: 'string',
    trim: 'true',
    require: [true, { message: 'Please enter the customer name.' }],
  },
  address: {
    type: 'String',
    trim: 'true',
    require: [true, { message: 'Please enter the location.' }],
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

module.exports = mongoose.model('Requests', RequestsSchema);
