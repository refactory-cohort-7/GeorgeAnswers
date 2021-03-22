const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Official Log-in.' });
});

router.post('/requests', (req, res) => {
  console.log(req.body);
  res.render('requests', { title: 'Requests' });
});

module.exports = router;
