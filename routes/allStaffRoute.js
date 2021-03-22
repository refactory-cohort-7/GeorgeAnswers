const express = require('express');
const router = express.Router();

router.get('/allStaff', (req, res) => {
  res.render('allStaff', { title: 'Staff Information' });
});

module.exports = router;
