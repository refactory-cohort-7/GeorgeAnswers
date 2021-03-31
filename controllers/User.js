const User = require('../models/User');
const passport = require('passport');
const { ensureLoggedOut } = require('connect-ensure-login');

// @description  Get Sign In form.
// @route        GET /
// @access       Private
exports.getSignIn = (req, res, next) => {
  res.render('index', { title: 'Sign In' });
};

// @description  Authent and Redirect to requests.
// @route        POST /
// @access       Private
exports.postSignIn = async (req, res, next) => {
  req.session.User = req.User;
  res.redirect('/requests');
};

// @description  Get Sign out In form.
// @route        GET /signOut
// @access       Private
exports.getSignOut = (req, res, next) => {
  // if (req.session.User) {
  req.logout();
  res.redirect('/');
  // } else {
  //   res.redirect('/');
  // }
};

// @description  Get Sign Up In form.
// @route        GET /signUp
// @access       Private
exports.getSignUp = (req, res, next) => {
  // if (req.session.User) {
  res.render('signUp', { title: 'Sign Up' });
  // } else {
  //   res.redirect('/');
  // }
};

// @description  Register credentials and Redirect to signin.
// @route        POST /signUp
// @access       Private
exports.postSignUp = async (req, res, next) => {
  // if (req.session.User) {
  try {
    const newUser = new User(req.body);
    await User.register(newUser, req.body.password, err => {
      if (err) {
        throw err;
      }
      res.redirect('/');
    });
  } catch (err) {
    res.status(400).send('Sorry! Something went wrong.');
    console.log(err);
  }
  // } else {
  //   res.redirect('/');
  // }
};
