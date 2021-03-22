const express = require('express');
const router = express.Router();

router.get('/generalLayout', (req, res) => {
  res.render('generalLayout');
});

module.exports = router;
