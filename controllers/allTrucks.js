const Truck = require('../models/AllTrucks');

// @description  Get all truck information
// @route        GET /alltrucks
// @access       Private
exports.getAllTrucks = async (req, res, next) => {
  try {
    // Find all the data in the  AllTrucks collection
    const truckDetails = await AllTrucks.find();
    res.render('alltrucks', {
      trucks: truckDetails,
      title: "All Trucks' Details",
    });
  } catch (err) {
    res.send('Failed to retrive all truck details');
  }
};

// @description  Get form for truck registration.
// @route        GET /newTruck
// @access       Private
exports.getNewTruck = (req, res, next) => {
  res.render('newTruck', { title: 'New Truck Registration' });
};

// @description  Registers new Truck.
// @route        POST /newTruck
// @access       Private
exports.postNewTruck = async (req, res, next) => {
  try {
    const newTruck = new AllTruck(req.body);
    await newTruck.save();
    res.redirect('/allTruck');
  } catch (err) {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  }
};

// @description  Get single truck details.
// @route        GET /truck/:Id
// @access       Private
exports.getTruck = (req, res, next) => {
  res.send('Single Truck.');
};

// @description  Update Single Truck Details.
// @route        PUT /truck/:Id
// @access       Private
exports.updateTruck = (req, res, next) => {
  res.send('Update single truck.');
};

// @description  Delete Single Truck Details.
// @route        DELETE /truck/:Id
// @access       Private
exports.deleteTruck = (req, res, next) => {
  res.send('Delete truck.');
};
