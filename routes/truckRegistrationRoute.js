const express = require('express');
const router = express.Router();

router.get('/truckRegistration', (req, res) => {
  res.render('truckRegistration', { title: 'Truck Registration' });
});

module.exports = router;
