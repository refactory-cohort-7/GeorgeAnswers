const AllStaff = require('../models/AllStaff');
const User = require('../models/User');
const passport = require('passport');

// @description  Get Sign In form.
// @route        GET /
// @access       Private
exports.getSignIn = (req, res) => {
  res.render('index', { title: 'Sign In' });
};

// @description  Authent and Redirect to requests.
// @route        POST /
// @access       Private
exports.postSignIn = async (req, res) => {
  req.session.user = req.user;
  const userName = req.body.username;
  const users = await User.find(req.params.username);
  users.forEach(loggedIn => {
    if (loggedIn.username === userName) {
      res.render('sales', { loggedIn: loggedIn });
    }
  });
};

// @description  Get Sign out In form.
// @route        POST /signOut
// @access       Private
exports.postSignOut = (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.log(err);
      } else {
        return res.redirect('/');
      }
    });
  }
};

// @description  Get Sign out In form.
// @route        get /signOut
// @access       Private
exports.getSignOut = (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.log(err);
      } else {
        return res.redirect('/');
      }
    });
  }
};

// @description  Get Sign Up In form.
// @route        GET /signUp
// @access       Private
exports.getSignUp = async (req, res) => {
  if (req.session.user) {
    // Finds all staff with jobtitle of front-desk-officer.
    const deskOfficer = await AllStaff.find({
      jobTitle: 'front-desk-officer',
    });
    // Finds all staff with jobtitle of system-admin.
    const admin = await AllStaff.find({
      jobTitle: 'system-admin',
    });

    // Renders signUp page with arrays: deskOfficers and admins available for use in the pug file.
    res.render('signUp', {
      title: 'Sign Up',
      deskOfficers: deskOfficer,
      admins: admin,
    });
  } else {
    res.redirect('/');
  }
};

// @description  Register credentials and Redirect to signin.
// @route        POST /signUp
// @access       Private
exports.postSignUp = async (req, res) => {
  if (req.session.user) {
    try {
      const newUser = await new User(req.body);
      await User.register(newUser, req.body.password, err => {
        if (err) {
          throw err;
        }
        res.render('sales');
      });
    } catch (err) {
      res.status(400).send('Sorry! Something went wrong.');
      console.log(err);
    }
  } else {
    res.redirect('/');
  }
};
