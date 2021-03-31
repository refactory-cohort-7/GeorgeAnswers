const express = require('express');
// const connectEnsureLogin = require('connect-ensure-login');

const {
  getSignIn,
  getSignUp,
  postSignIn,
  postSignUp,
  getSignOut,
} = require('../controllers/user');

const router = express.Router();

router.route('/').get(getSignIn);
router.route('/').post(postSignIn);

router.route('/signUp').get(getSignUp).post(postSignUp);

router.route('/signOut').get(getSignOut);

module.exports = router;
