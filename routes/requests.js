const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

router.get('/requests', (req, res) => {
  connectEnsureLogin.ensureLoggedIn(),
    res.render('requests', { title: 'Requests' });
});

module.exports = router;
