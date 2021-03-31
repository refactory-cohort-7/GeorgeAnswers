const express = require('express');

const {
  getSignIn,
  getSignUp,
  postSignIn,
  postSignUp,
} = require('../controllers/user');

const router = express.Router();

router.route('/').get(getSignIn).post(postSignIn);

router.route('/signUp').get(getSignUp).post(postSignUp);

module.exports = router;
