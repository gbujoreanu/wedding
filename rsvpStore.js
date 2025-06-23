const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const FILE_PATH = path.join(DATA_DIR, 'rsvps.json');

function readRsvps() {
  try {
    const raw = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    // If file doesn't exist or can't be parsed, return empty array
    return [];
  }
}

function saveRsvps(rsvps) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(rsvps, null, 2));
}

function addRsvp(data) {
  const rsvps = readRsvps();
  rsvps.push({
    name: data.name,
    email: data.email,
    attending: data.attending,
  });
  saveRsvps(rsvps);
}

module.exports = {
  addRsvp,
  getAll: readRsvps,
};
