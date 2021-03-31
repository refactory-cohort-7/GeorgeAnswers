const AllStaff = require('../models/AllStaff');

// @description  Get all staff Information
// @route        GET /allStaff
// @access       Private
exports.getAllStaff = async (req, res, next) => {
  try {
    // find all staff in the AllStaff collection
    const staffDetails = await AllStaff.find();
    res.render('allStaff', { staffs: staffDetails });
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
    const newStaff = await AllStaff.create(req.body);
    res.redirect('/allStaff');
  } catch (err) {
    console.log(err);
    res.status(400).send('Sorry! Something went wrong.');
  }
};

// @description  Get single staff Information.
// @route        GET /:Id
// @access       Private
exports.getStaff = async (req, res, next) => {
  try {
    // Find staff in AllStaff collection by ID
    const staff = await AllStaff.findOne(req.params.id);

    // Catches requests with same id format that does not exit.
    if (!staff) {
      return res.status(400).send('Staff not found.');
    }
    res.render('staff', {
      staff: staff,
      title: 'Staff Details',
    });
  } catch (err) {
    res.status(400).send('Failed to retrive staff details');
  }
};

// @description  Update single staff Information.
// @route        POST /:Id
// @access       Private
exports.updateStaff = async (req, res, next) => {
  try {
    // Find staff with a given ID in AllStaff collection and Update it.
    const staff = await AllStaff.findOneAndUpdate(req.params.id);

    // Catches requests with same id format that does not exit.
    if (!staff) {
      return res.status(400).send('Staff not found.');
    }

    res.redirect('/allStaff');
  } catch {
    res.status(400).send('Staff Information NOT update!');
  }
};

// @description  Delete single staff Information.
// @route        DELETE /:Id
// @access       Private
exports.deleteStaff = async (req, res, next) => {
  try {
    const staffToDel = await AllStaff.findByIdAndRemove(req.params.id, {
      useFindAndModify: false,
      new: true,
      runValidators: true,
    });
    if (!staffToDel) {
      return res.status(400).send('Staff not found.');
    }

    res.redirect('/allStaff');
  } catch (err) {
    res.status(400).send('Staff Information NOT deleted!');
  }
};
