const fs = require('fs');
const path = require('path');

const files = [
  'data/pages/home.js',
  'data/pages/work.js',
  'data/pages/contact.js',
  'data/pages/login.js'
];

// Also add all projects
const projDir = 'data/pages/projects';
fs.readdirSync(projDir).forEach(f => {
  if (f.endsWith('.js')) {
    files.push(path.join(projDir, f));
  }
});

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const count = (content.match(/id=\\?"awwwards\\?"/g) || []).length;
  console.log(`${file}: ${count} occurrence(s) of id="awwwards"`);
});

