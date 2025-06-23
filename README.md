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

### Running the server

Run the following from the project root whenever you want to start the site locally:

```bash
npm install    # only needed once to install dependencies
npm start
```

The server reloads on each start, so restart it after changing server code.

### Building static files

Generate a static version of the site by running:

```bash
npm run build
```

This renders the templates into the `docs/` folder and copies over the assets
from `public/`. When hosting with GitHub Pages, set the Pages source to the
`docs/` directory so the generated HTML is served.

### Editing templates

The page layouts live under `views/`. Update these `.ejs` files to change page
content or add new pages. The `layout.ejs` file holds the shared header and
footer markup.

## Structure

- `app.js` – main Express server.
- `views/` – EJS templates for each page (home, events, travel, registry, RSVP).
- `public/` – static assets like CSS and JS. `registry.css` provides extra styles for the registry page.

## Customization

Edit the templates in `views/` to add content. Dedicated pages for travel details
and the gift registry are available at `/travel` and `/registry`. Customize these
by editing `views/travel.ejs` and `views/registry.ejs`. Update `public/style.css`
(and `registry.css` for the registry page) or add your own CSS files to tweak
fonts, colors and layout. You can extend the base styles by defining additional
variables in `:root` or writing new classes under `public/`.

### Gift data

If you want to manage registry ideas in a structured way, create
`data/gifts.json` containing objects with `name` and `link` properties. The
default `registry.ejs` template includes three examples. Updating this JSON and
modifying the template or server to read from it lets you keep gift information
in a single place.

Feel free to expand this project to include additional features like authentication, guestbook, or email notifications.

Undefined routes show a simple 404 page with a link back home.
