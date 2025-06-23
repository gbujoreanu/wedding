# Custom Wedding Website

This project provides a simple starting point for building a customizable wedding website. It uses Node.js with Express and EJS templates so you can easily tweak the layout and pages.

## Setup

1. Install Node.js (already available in this environment).
2. Install dependencies (includes `express-ejs-layouts`):
   ```bash
   npm install
   ```
3. (Optional) Copy `.env.example` to `.env` if you want to change the server
   port:
   ```bash
   cp .env.example .env
   # edit the PORT value in .env if needed
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Visit `http://localhost:3000` in your browser (or the port you configured).

## Structure

- `app.js` – main Express server.
- `views/` – EJS templates for each page (home, events, travel, registry, RSVP).
- `public/` – static assets like CSS and JS. `registry.css` provides extra styles for the registry page.

## Customization

Edit the templates in `views/` to add content. Dedicated pages for travel details and the gift registry are available at `/travel` and `/registry`. Customize these by editing `views/travel.ejs` and `views/registry.ejs`. Update `public/style.css` (and `registry.css` for the registry page) to tweak fonts, colors, or layout.

Feel free to expand this project to include additional features like authentication, guestbook, or email notifications.

Undefined routes show a simple 404 page with a link back home.
