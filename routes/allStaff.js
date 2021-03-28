const express = require('express');

const {
  getAllStaff,
  getNewStaff,
  postNewStaff,
  getStaff,
  updateStaff,
  deleteStaff,
  getDrivers,
  getAdministrators,
  getConductors,
  getDeskOfficers,
} = require('../controllers/allStaff');

const router = express.Router();

router.get('/allStaff', getAllStaff);
router.route('/newStaff').get(getNewStaff).post(postNewStaff);

router.route('/staff/:Id').get(getStaff).put(updateStaff).delete(deleteStaff);

router
  .route('/allStaff/:JobTitle')
  .get(getAdministrators)
  .get(getConductors)
  .get(getDeskOfficers)
  .get(getDrivers);

module.exports = router;
