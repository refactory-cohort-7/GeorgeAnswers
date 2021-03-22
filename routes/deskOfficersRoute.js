const express = require('express');
const router = express.Router();

router.get('/deskOfficers', (req, res) => {
  res.render('deskOfficers', { title: "Desk Officers' Information" });
});

module.exports = router;
