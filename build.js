require('dotenv').config();
const fs = require('fs/promises');
const path = require('path');
const ejs = require('ejs');

const BASE_URL = process.env.BASE_URL || '';

const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');
const outDir = path.join(__dirname, 'docs');

const pages = [
  { template: 'index', data: { title: 'Home', baseUrl: BASE_URL }, output: 'index.html' },
  { template: 'events', data: { title: 'Events', extraCss: `${BASE_URL}/events.css`, baseUrl: BASE_URL }, output: path.join('events', 'index.html') },
  { template: 'travel', data: { title: 'Travel', extraCss: `${BASE_URL}/travel.css`, baseUrl: BASE_URL }, output: path.join('travel', 'index.html') },
  { template: 'wedding-party', data: { title: 'Wedding Party', baseUrl: BASE_URL }, output: path.join('wedding-party', 'index.html') },
  { template: 'things-to-do', data: { title: 'Things to Do', baseUrl: BASE_URL }, output: path.join('things-to-do', 'index.html') },
  { template: 'registry', data: { title: 'Registry', extraCss: `${BASE_URL}/registry.css`, baseUrl: BASE_URL }, output: path.join('registry', 'index.html') },
  { template: 'rsvp', data: { title: 'RSVP', extraCss: `${BASE_URL}/rsvp.css`, baseUrl: BASE_URL }, output: path.join('rsvp', 'index.html') },
  { template: '404', data: { title: 'Not Found', baseUrl: BASE_URL }, output: '404.html' },
];

async function buildPage(page) {
  const body = await ejs.renderFile(path.join(viewsDir, `${page.template}.ejs`), page.data, { views: [viewsDir] });
  const html = await ejs.renderFile(path.join(viewsDir, 'layout.ejs'), { ...page.data, body }, { views: [viewsDir] });
  const dest = path.join(outDir, page.output);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, html);
}

async function copyAssets() {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });
  await fs.cp(publicDir, outDir, { recursive: true });
}

async function build() {
  await copyAssets();
  await Promise.all(pages.map(buildPage));
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
