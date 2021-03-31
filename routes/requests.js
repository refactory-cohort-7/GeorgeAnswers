const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

router.get('/requests', (req, res) => {
  res.render('requests', { title: 'Requests' });
});

module.exports = router;
