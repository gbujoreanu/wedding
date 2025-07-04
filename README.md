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
`docs/` directory so the generated HTML is served. The workflow defined in
`.github/workflows/gh-pages.yml` builds the site and publishes the `docs/`
folder to GitHub Pages whenever changes are pushed to the `main` branch.

When deploying to `https://<user>.github.io/<repo>/`, set `BASE_URL` to the
repository name (for example `BASE_URL=/wedding`) so that asset paths resolve
correctly. You can add this variable to a `.env` file or export it in your shell
before running `npm run build`.

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

### RSVP

The site no longer accepts form submissions. The `/rsvp` page displays a link
to send an email instead. Update `views/rsvp.ejs` with your own email address
or replace the link with an external service such as Google Forms if you prefer
collecting responses elsewhere.

Undefined routes show a simple 404 page with a link back home.
