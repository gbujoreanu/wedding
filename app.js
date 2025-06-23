const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rsvpStore = require('./rsvpStore');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(require('express-ejs-layouts'));
app.set('layout', 'layout');

// Static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/events', (req, res) => {
  res.render('events');
});

app.get('/rsvp', (req, res) => {
  res.render('rsvp');
});

app.post('/rsvp', (req, res) => {
  console.log('RSVP submission:', req.body);
  rsvpStore.addRsvp(req.body);
  res.render('rsvp-success', { data: req.body });
});

app.listen(PORT, () => {
  console.log(`Wedding website running at http://localhost:${PORT}`);
});
