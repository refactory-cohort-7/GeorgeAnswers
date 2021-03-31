const User = require('../models/User');
const passport = require('passport');

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
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/');
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/requests');
    });
  })(req, res, next);
};

// @description  Get Sign Up In form.
// @route        GET /signUp
// @access       Private
exports.getSignUp = (req, res, next) => {
  res.render('signUp', { title: 'Sign Up' });
};

// @description  Register credentials and Redirect to signin.
// @route        POST /signUp
// @access       Private
exports.postSignUp = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  }
};
