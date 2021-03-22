const express = require('express');
const router = express.Router();

router.get('/staffRegistration', (req, res) => {
  res.render('staffRegistration', { title: 'Staff Registration' });
});

module.exports = router;
