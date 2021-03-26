const express = require('express');
const router = express.Router();

router.get('/allStaff', async (req, res) => {
  try {
    // find all the data in the Employee collection
    const staffDetails = await allStaff.find();
    res.render('allStaff', { allStaff: allStaff, title: 'Staff Information' });
  } catch (err) {
    res.send('Failed to retrive staff details');
  }
});

module.exports = router;
