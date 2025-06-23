# Custom Wedding Website

This project provides a simple starting point for building a customizable wedding website. It uses Node.js with Express and EJS templates so you can easily tweak the layout and pages.

## Setup

1. Install Node.js (already available in this environment).
2. Install dependencies (includes `express-ejs-layouts`):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   node app.js
   ```
4. Visit `http://localhost:3000` in your browser.

## Structure

- `app.js` – main Express server.
- `views/` – EJS templates for each page (home, events, travel, registry, RSVP).
- `public/` – static assets like CSS and JS.

## Customization

Edit the templates in `views/` to add content. Dedicated pages for travel details and the gift registry are available at `/travel` and `/registry`. Customize these by editing `views/travel.ejs` and `views/registry.ejs`. Update `public/style.css` for your own styles.

Feel free to expand this project to include additional features like authentication, guestbook, or email notifications.

Undefined routes show a simple 404 page with a link back home.
