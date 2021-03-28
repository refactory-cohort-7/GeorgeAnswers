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

router.get('/allTrucks', getAllTrucks);

router.route('/newTruck').get(getNewTruck).post(postNewTruck);

router.route('/truck/:id').get(getTruck).put(updateTruck).delete(deleteTruck);

module.exports = router;
