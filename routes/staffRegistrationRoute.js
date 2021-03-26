const express = require('express');

const router = express.Router();
const allStaff = require('../models/allStaff');

router.get('/staffRegistration', (req, res) => {
  res.render('staffRegistration', { title: 'Staff Registration' });
});

router.post('/allStaff', async (req, res) => {
  console.log(req.body);
  try {
    const newStaff = new allStaff(req.body);
    await newStaff.save();
    res.redirect('/allStaff');
  } catch (err) {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  }

  // staff
  //   .save()
  //   .then(() => {
  //     res.send('Registration successful');
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.send('Sorry! Something went wrong.');
  //   }

  // const registerStaff = new staffRegistration({
  //   job: req.body.jobTitle,
  //   name: req.body.name,
  //   dateOfBirth: req.body.dateOfBirth,
  //   gender: req.body.gender,
  //   nin: req.body.nationalIdNumber,
  //   lisenceNum: req.body.driversLisenceNumber,
  //   residence: req.body.placeOfResidence,
  //   phoneNum: req.body.phoneNumber,
  //   pastIncidence: req.body.pastIncident,
  // });
  // try {
  //   const savedregisterStaff = await registerStaff.save();
  //   res.json(savedregisterStaff);
  // } catch (err) {
  //   res.json({ message: err });
  // }
});

module.exports = router;
