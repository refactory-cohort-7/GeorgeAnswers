const User = require('../models/User');
const passport = require('passport');
const { ensureLoggedOut } = require('connect-ensure-login');

// @description  Get Sign In form.
// @route        GET /
// @access       Private
exports.getSignIn = (req, res) => {
  res.render('index', { title: 'Sign In' });
};

// @description  Authent and Redirect to requests.
// @route        POST /
// @access       Private
exports.postSignIn = (req, res) => {
  req.session.user = req.user;
  res.redirect('/requests');
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
exports.getSignUp = (req, res) => {
  if (req.session.user) {
    res.render('signUp', { title: 'Sign Up' });
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
  } else {
    res.redirect('/');
  }
};
