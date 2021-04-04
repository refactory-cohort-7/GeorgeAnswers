const express = require('express');
const passport = require('passport');

const {
  getSignIn,
  getSignUp,
  postSignIn,
  postSignUp,
  postSignOut,
  getSignOut,
} = require('../controllers/user');

const router = express.Router();

router.route('/').get(getSignIn);
router.post(
  '/',

  passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true,
  }),
  postSignIn
);

router.route('/signUp').get(getSignUp).post(postSignUp);

router.route('/signOut').post(postSignOut).get(getSignOut);

module.exports = router;
