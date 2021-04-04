const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

router.get('/requests', (req, res) => {
  if (req.session.user) {
    res.render('requests', { title: 'Requests' });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
