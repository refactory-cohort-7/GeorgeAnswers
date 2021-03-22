const express = require('express');
const router = express.Router();

router.get('/administrators', (req, res) => {
  res.render('administrators', { title: 'Administrative Staff' });
});

module.exports = router;
