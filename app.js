require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(require('express-ejs-layouts'));
app.set('layout', 'layout');

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/events', (req, res) => {
  res.render('events', { title: 'Events', extraCss: '/events.css' });
});

app.get('/travel', (req, res) => {
  res.render('travel', { title: 'Travel', extraCss: '/travel.css' });
});

app.get('/wedding-party', (req, res) => {
  res.render('wedding-party', { title: 'Wedding Party' });
});

app.get('/things-to-do', (req, res) => {
  res.render('things-to-do', { title: 'Things to Do' });
});

app.get('/registry', (req, res) => {
  res.render('registry', { title: 'Registry', extraCss: '/registry.css' });
});

app.get('/rsvp', (req, res) => {
  res.render('rsvp', { title: 'RSVP', extraCss: '/rsvp.css' });
});


// 404 handler
app.use((req, res) => res.status(404).render('404', { title: 'Not Found' }));

app.listen(PORT, () => {
  console.log(`Wedding website running at http://localhost:${PORT}`);
});
