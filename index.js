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

//Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Official Log-in.' });
});
app.post('/welcome', (req, res) => {
  console.log(req.body);
  res.render('welcome', { title: 'Welcome' });
});

app.get('/welcome', (req, res) => {
  res.render('welcome', { title: 'Welcome' });
});

app.get('/general', (req, res) => {
  res.render('general');
});

app.get('/registerEmployee', (req, res) => {
  res.render('registration', { title: 'Register New Employee.' });
});
app.post('/createEmployee', (req, res) => {
  console.log(req.body);
  res.send('Data successfully captured');
});

// Create a server at port 3000
app.listen(3000, (req, res) => {
  console.log('Started listening at port 3000!');
});
