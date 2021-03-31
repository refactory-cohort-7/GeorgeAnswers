const express = require('express');
const connectEnsureLogin = require('connect-ensure-login');

const {
  getAllStaff,
  getNewStaff,
  postNewStaff,
  getStaff,
  updateStaff,
  deleteStaff,
} = require('../controllers/allStaff');

const router = express.Router();

router.route('/allStaff', connectEnsureLogin.ensureLoggedIn()).get(getAllStaff);

router
  .route('/newStaff', connectEnsureLogin.ensureLoggedIn())
  .get(getNewStaff)
  .post(postNewStaff);

router
  .route('/staff/:Id', connectEnsureLogin.ensureLoggedIn())
  .get(getStaff)
  .post(updateStaff);

router
  .route('/deleteStaff/:id', connectEnsureLogin.ensureLoggedIn())
  .delete(deleteStaff)
  .get(deleteStaff);

module.exports = router;
