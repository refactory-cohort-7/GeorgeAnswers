const express = require('express');
const connectEnsureLogin = require('connect-ensure-login');

const {
  getAllTrucks,
  getNewTruck,
  postNewTruck,
  getTruck,
  updateTruck,
  deleteTruck,
} = require('../controllers/allTrucks');

const router = express.Router();

router.route('/allTrucks').get(getAllTrucks);

router.route('/newTruck').get(getNewTruck).post(postNewTruck);

router.route('/truck/:id').get(getTruck).post(updateTruck);

router.route('/delTruck/:id').delete(deleteTruck).get(deleteTruck);

module.exports = router;
