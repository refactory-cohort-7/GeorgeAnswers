const express = require('express');
const router = express.Router();

router.get('/drivers', (req, res) => {
  res.render('drivers', { title: "Drivers' Information" });
});

module.exports = router;
