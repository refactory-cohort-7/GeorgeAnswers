const express = require('express');
const router = express.Router();

router.get('/sales', (req, res) => {
  res.render('sales', { title: 'Sales' });
});

module.exports = router;
