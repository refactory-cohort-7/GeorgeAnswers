const express = require('express');
const router = express.Router();

router.get('/garbageTrucks', (req, res) => {
  res.render('garbageTrucks', { title: "Garbage Trucks' List" });
});

module.exports = router;
