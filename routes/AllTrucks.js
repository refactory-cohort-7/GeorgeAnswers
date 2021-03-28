const express = require('express');

const {
  getAllTrucks,
  getNewTruck,
  postNewTruck,
  getTruck,
  updateTruck,
  deleteTruck,
} = require('../controllers/allTrucks');
const router = express.Router();

router.route('allTrucks').get(getAllTrucks);

router.route('/newTruck').get(getNewTruck).post(postNewTruck);

router.route('/trucks').get(getTruck).put(updateTruck).delete(deleteTruck);

module.exports = router;
