// Importations
const express = require('express');
const path = require('path');

// Instantiations
const app = express();

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import Routes
const logIn = require('./routes/loginRoute');
const requests = require('./routes/requestsRoute');
const generalLayout = require('./routes/generalLayoutRoute');
const administrators = require('./routes/administratorsRoute');
const allStaff = require('./routes/allStaffRoute');
const conductors = require('./routes/conductorsRoute');
const deskOfficers = require('./routes/deskOfficersRoute');
const garbageTrucks = require('./routes/garbageTrucksRoute');
const inventoryLayout = require('./routes/inventoryLayoutRoute');
const sales = require('./routes/salesRoute');
const sewageTrucks = require('./routes/sewageTrucksRoute');
const staffLayout = require('./routes/staffLayoutRoute');
const staffRegistration = require('./routes/staffRegistrationRoute');
const truckRegistration = require('./routes/truckRegistrationRoute');
const drivers = require('./routes/driversRoute');

//Routes Middlewares
app.use('/', logIn);
app.use('/', requests);
app.use('/', generalLayout);
app.use('/', administrators);
app.use('/', allStaff);
app.use('/', conductors);
app.use('/', deskOfficers);
app.use('/', garbageTrucks);
app.use('/', inventoryLayout);
app.use('/', sales);
app.use('/', sewageTrucks);
app.use('/', staffLayout);
app.use('/', staffRegistration);
app.use('/', truckRegistration);
app.use('/', drivers);

// cater for undefined routes
app.get('*', (req, res) => {
  res.send('The route specified does not exist!');
});

// Create a server at port 3000
app.listen(3000, (req, res) => {
  console.log('Started listening at port 3000!');
});
