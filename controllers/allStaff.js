const AllStaff = require('../models/AllStaff');

// @description  Get all staff Information
// @route        GET /allStaff
// @access       Private
exports.getAllStaff = async (req, res, next) => {
  try {
    // find all the data in the Employee collection
    const staffDetails = await AllStaff.find();
    res.render('allStaff', { employees: staffDetails });
  } catch (err) {
    res.send('Failed to retrive staff details');
  }
};

// @description  Get form to register staff.
// @route        GET /addNewStaff
// @access       Private
exports.getNewStaff = (req, res, next) => {
  res.render('newStaff', { title: 'Staff Registration' });
};

// @description  Registers new staff.
// @route        POST /newStaff
// @access       Private
exports.postNewStaff = async (req, res, next) => {
  try {
    const newStaff = new AllStaff(req.body);
    await newStaff.save();
    res.redirect('/allStaff');
  } catch (err) {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  }
};

// @description  Get single staff Information.
// @route        GET /:Id
// @access       Private
exports.getStaff = (req, res, next) => {};

// @description  Update single staff Information.
// @route        PUT /:Id
// @access       Private
exports.updateStaff = (req, res, next) => {};

// @description  Delete single staff Information.
// @route        DELETE /:Id
// @access       Private
exports.deleteStaff = (req, res, next) => {};

// @description  Get all drivers Information
// @route        GET /drivers
// @access       Private
exports.getDrivers = async (req, res, next) => {
  try {
    // find all the data in the Employee collection
    const DriversDetails = await AllStaff.find();
    res.render('administrators', {
      employees: DriversDetails,
      title: 'Drivers',
    });
  } catch (err) {
    res.send('Failed to retrive Driver List!');
  }
};

// @description  Get all conductors Information
// @route        GET /conductors
// @access       Private
exports.getConductors = async (req, res, next) => {
  try {
    // find all the data in the Employee collection
    const conductorsDetails = await AllStaff.find();
    res.render('conductors', {
      employees: conductorsDetails,
      title: 'Conductors',
    });
  } catch (err) {
    res.send('Failed to retrive conductor List!');
  }
};

// @description  Get all deskOfficers Information
// @route        GET /deskOfficers
// @access       Private
exports.getDeskOfficers = async (req, res, next) => {
  try {
    // find all the data in the Employee collection
    const deskOfficersDetails = await AllStaff.find();
    res.render('deskOfficers', {
      employees: deskOfficersDetails,
      title: 'Desk Officers',
    });
  } catch (err) {
    res.send("Failed to retrive deskOfficers' List!");
  }
};

// @description  Get all administrators Information
// @route        GET /administrators
// @access       Private
exports.getAdministrators = async (req, res, next) => {
  try {
    // find all the data in the Employee collection
    const administratorsDetails = await AllStaff.find();
    res.render('administrators', {
      employees: administratorsDetails,
      title: 'Administrative Staff',
    });
  } catch (err) {
    res.send('Failed to retrive Administrator List!');
  }
};
