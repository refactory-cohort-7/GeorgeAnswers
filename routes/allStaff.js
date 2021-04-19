const express = require('express');

const {
  getAllStaff,
  getNewStaff,
  postNewStaff,
  getStaff,
  updateStaff,
  deleteStaff,
} = require('../controllers/allStaff');

const router = express.Router();

router.route('/allStaff').get(getAllStaff);

router.route('/newStaff').get(getNewStaff).post(postNewStaff);

router.route('/staff/:Id').get(getStaff).post(updateStaff);

router.route('/deleteStaff/:id').delete(deleteStaff).get(deleteStaff);

module.exports = router;
