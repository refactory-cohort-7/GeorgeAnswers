const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Official Log-in.' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/requests');
});

module.exports = router;
