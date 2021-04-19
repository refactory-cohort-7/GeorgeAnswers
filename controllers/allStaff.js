const AllStaff = require('../models/AllStaff');
const User = require('../models/User');

// @description  Get all staff Information
// @route        GET /allStaff
// @access       Private
exports.getAllStaff = async (req, res, next) => {
  if (req.session.user) {
    try {
      // find all staff in the AllStaff collection
      const staffDetails = await AllStaff.find();
      const userName = req.body.username;
      const users = await User.find(req.params.username);
      users.forEach(loggedIn => {
        if (loggedIn.username === userName) {
          res.render('allStaff', {
            staffs: staffDetails,
            title: 'Staff',
            loggedIn: loggedIn,
          });
        }
      });
    } catch (err) {
      res.send('Failed to retrive staff details');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Get form to register staff.
// @route        GET /addNewStaff
// @access       Private
exports.getNewStaff = async (req, res, next) => {
  if (req.session.user) {
    const userName = req.body.username;
    const users = await User.find(req.params.username);
    users.forEach(loggedIn => {
      if (loggedIn.username === userName) {
        res.render('newStaff', {
          title: 'Staff Registration',
          loggedIn: loggedIn,
        });
      }
    });
  } else {
    res.redirect('/');
  }
};

// @description  Registers new staff.
// @route        POST /newStaff
// @access       Private
exports.postNewStaff = async (req, res, next) => {
  if (req.session.user) {
    try {
      await AllStaff.create(req.body);
      const userName = req.body.username;
      const users = await User.find(req.params.username);
      users.forEach(loggedIn => {
        if (loggedIn.username === userName) {
          res.render('allStaff', { loggedIn: loggedIn });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(400).send('Sorry! Something went wrong.');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Get single staff Information.
// @route        GET /:Id
// @access       Private
exports.getStaff = async (req, res, next) => {
  if (req.session.user) {
    try {
      // Find staff in AllStaff collection by ID
      const staff = await AllStaff.findOne(req.params.id);

      // Catches requests with same id format that does not exit.
      if (!staff) {
        return res.status(400).send('Staff not found.');
      }
      // CONTINUE
      const userName = req.body.username;
      const users = await User.find(req.params.username);
      users.forEach(loggedIn => {
        if (loggedIn.username === userName) {
          res.render('sales', { loggedIn: loggedIn });
        }
      });
      res.render('staff', {
        staff: staff,
        title: 'Staff Details',
      });
    } catch (err) {
      res.status(400).send('Failed to retrive staff details');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Update single staff Information.
// @route        POST /:Id
// @access       Private
exports.updateStaff = async (req, res, next) => {
  if (req.session.user) {
    try {
      // Find staff with a given ID in AllStaff collection and Update it.
      const staff = await AllStaff.findOneAndUpdate(req.params.id);

      // Catches requests with same id format that does not exit.
      if (!staff) {
        return res.status(400).send('Staff not found.');
      }
      const userName = req.body.username;
      const users = await User.find(req.params.username);
      users.forEach(loggedIn => {
        if (loggedIn.username === userName) {
          res.render('allStaff', { loggedIn: loggedIn });
        }
      });
    } catch {
      res.status(400).send('Staff Information NOT update!');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Delete single staff Information.
// @route        DELETE /:Id
// @access       Private
exports.deleteStaff = async (req, res, next) => {
  if (req.session.user) {
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
  } else {
    res.redirect('/');
  }
};
