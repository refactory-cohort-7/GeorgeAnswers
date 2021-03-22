const express = require('express');
const router = express.Router();

router.get('/conductors', (req, res) => {
  res.render('conductors', { title: "Conductors' Information" });
});

module.exports = router;
