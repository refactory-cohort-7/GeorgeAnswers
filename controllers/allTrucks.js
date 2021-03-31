const AllTrucks = require('../models/AllTrucks');

// @description  Get all truck information
// @route        GET /alltrucks
// @access       Private
exports.getAllTrucks = async (req, res, next) => {
  try {
    // Find all the data in the  AllTrucks collection
    const trucks = await AllTrucks.find();
    res.render('allTrucks', {
      trucks: trucks,
      title: "All Trucks' Details",
    });
  } catch (err) {
    res.status(400).send('Failed to retrive all truck details');
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
    const newTruck = await AllTrucks.create(req.body);
    res.redirect('allTrucks');
  } catch (err) {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  }
};

// @description  Get single truck details.
// @route        GET /truck/:Id
// @access       Private
exports.getTruck = async (req, res, next) => {
  try {
    // Find all the data in the  AllTrucks collection
    const truck = await AllTrucks.findById(req.params.id);

    // Catches requests with same id format that does not exit.
    if (!truck) {
      return res.status(400).send('Truck not found.');
    }
    res.render('truck', {
      truck: truck,
      title: 'Truck Details',
    });
  } catch (err) {
    res.status(400).send('Failed to retrive truck details');
  }
};

// @description  Update Single Truck Details.
// @route        POST /truck/:Id
// @access       Private
exports.updateTruck = async (req, res, next) => {
  try {
    const truck = await AllTrucks.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
      new: true,
      runValidators: true,
    });
    console.log(truck);
    if (!truck) {
      return res.status(400).send('Truck not found.');
    }
    res.redirect('/allTrucks');
  } catch (err) {
    res.status(400).send('Truck Information NOT update!');
  }
};

// @description  Delete Single Truck Details.
// @route        DELETE /truck/:Id
// @access       Private
exports.deleteTruck = async (req, res, next) => {
  try {
    const truckToDel = await AllTrucks.findByIdAndRemove(req.params.id, {
      useFindAndModify: false,
      new: true,
      runValidators: true,
    });
    if (!truckToDel) {
      return res.status(400).send('Truck not found.');
    }

    res.redirect('/allTrucks');
  } catch (err) {
    res.status(400).send('Truck Information NOT deleted!');
  }
};
