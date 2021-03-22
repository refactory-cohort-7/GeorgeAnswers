const express = require('express');
const router = express.Router();

router.get('/sewageTrucks', (req, res) => {
  res.render('sewageTrucks', { title: "Sewage Trucks' List" });
});

module.exports = router;
