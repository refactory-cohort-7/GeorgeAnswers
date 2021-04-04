// Importations
const express = require('express');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});
const flash = require('connect-flash');

// // Import Routes
const user = require('./routes/user');
const requests = require('./routes/requests');
const sales = require('./routes/sales');
const allStaff = require('./routes/allStaff');
const allTrucks = require('./routes/allTrucks');
const User = require('./models/User');

// Instantiations
const app = express();

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

// Load in env
dotenv.config({ path: './config/config.env' });
// connect mongoose database

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open'.cyan.bold);
  })
  .on('error', err => {
    console.log(`Connection error: ${err.message}`);
  });

mongoose.set('useCreateIndex', true);

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(expressSession);
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Passport configs
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes Middlewares
app.use('/', user);
app.use('/', requests);
app.use('/', sales);
app.use('/', allStaff);
app.use('/', allTrucks);

// cater for undefined routes
app.get('*', (req, res) => {
  res.send('The route specified does not exist!');
});

// Create a server at port 3000
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`App listening on port ${port}!`.yellow.bold)
);
