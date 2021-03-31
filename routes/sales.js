const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

router.get('/sales', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render('sales', { title: 'Sales' });
});

module.exports = router;
