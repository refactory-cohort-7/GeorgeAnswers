const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('truckRegistration', { title: 'Truck Registration' });
});

router.get('/', (req, res) => {
  res.render('garbageTrucks', { title: "Garbage Trucks' List" });
});

router.get('/', (req, res) => {
  res.render('sewageTrucks', { title: "Sewage Trucks' List" });
});

module.exports = router;
