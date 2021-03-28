const mongoose = require('mongoose');

const AllTrucksSchema = new mongoose.Schema({
  typeOfTruck: {
    type: String,
    trim: true,
  },
  truckNumber: {
    type: String,
    trim: true,
  },
  nameOfDriver: {
    type: String,
    trim: true,
  },
  truckCode: {
    type: String,
    trim: true,
  },
  amountMadeByTruck: {
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model('AllTrucks', AllTrucksSchema);
