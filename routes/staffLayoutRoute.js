const express = require('express');
const router = express.Router();

router.get('/staffLayout', (req, res) => {
  res.render('staffLayout');
});

module.exports = router;
