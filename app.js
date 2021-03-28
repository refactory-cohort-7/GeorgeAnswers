// Importations
const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');

// // Import Routes
const logIn = require('./routes/login');
const requests = require('./routes/requests');
const sales = require('./routes/sales');
const allStaff = require('./routes/allStaff');
const trucks = require('./routes/trucks');
const { config } = require('dotenv');

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

//Routes Middlewares
app.use('/', logIn);
app.use('/', requests);
app.use('/', sales);
app.use('/', allStaff);
app.use('/', trucks);

// cater for undefined routes
app.get('*', (req, res) => {
  res.send('The route specified does not exist!');
});

// Create a server at port 3000
app.listen(3000, (req, res) => {
  console.log('Started listening at port 3000!');
});
