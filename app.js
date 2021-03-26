// Importations
const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');

// Instantiations
const app = express();

// connect mongoose database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', err => {
    console.log(`Connection error: ${err.message}`);
  });

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import Routes
const logIn = require('./routes/loginRoute');
const requests = require('./routes/requestsRoute');
const administrators = require('./routes/administratorsRoute');
const allStaff = require('./routes/allStaffRoute');
const drivers = require('./routes/driversRoute');
const conductors = require('./routes/conductorsRoute');
const deskOfficers = require('./routes/deskOfficersRoute');
const garbageTrucks = require('./routes/garbageTrucksRoute');
const sales = require('./routes/salesRoute');
const sewageTrucks = require('./routes/sewageTrucksRoute');
const staffRegistration = require('./routes/staffRegistrationRoute');
const truckRegistration = require('./routes/truckRegistrationRoute');
const { config } = require('dotenv');

//Routes Middlewares
app.use('/', logIn);
app.use('/', requests);
app.use('/', allStaff);
app.use('/', administrators);
app.use('/', drivers);
app.use('/', conductors);
app.use('/', deskOfficers);
app.use('/', garbageTrucks);
app.use('/', sales);
app.use('/', sewageTrucks);
app.use('/', staffRegistration);
app.use('/', truckRegistration);

// cater for undefined routes
app.get('*', (req, res) => {
  res.send('The route specified does not exist!');
});

// Create a server at port 3000
app.listen(3000, (req, res) => {
  console.log('Started listening at port 3000!');
});
