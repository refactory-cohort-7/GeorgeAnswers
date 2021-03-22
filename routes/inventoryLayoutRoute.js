const express = require('express');
const router = express.Router();

router.get('/inventoryLayout', (req, res) => {
  res.render('inventoryLayout');
});

module.exports = router;
