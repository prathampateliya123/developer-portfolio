const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const dataFile = path.join(__dirname, '..', 'data', 'pagesHtml.js');
const code = fs.readFileSync(dataFile, 'utf8');

const regex = /(?:\/assets|\/images|\/img|\/media|\/build|\/css|\/js)\/[a-zA-Z0-9_\-\./]+/g;
const matches = code.match(regex) || [];
const uniqueAssets = [...new Set(matches.map(m => m.replace(/[\\";'()<>].*$/, '')))];

console.log(`Found ${uniqueAssets.length} unique assets in pagesHtml.js`);

const missing = [];
for (const a of uniqueAssets) {
  const filePath = path.join(publicDir, a.replace(/^\//, ''));
  if (!fs.existsSync(filePath)) {
    missing.push(a);
  }
}

console.log(`Missing count: ${missing.length}`);
if (missing.length > 0) {
  console.log('Missing:', missing);
}
