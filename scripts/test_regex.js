const fs = require('fs');
const files = [
  'data/pages/home.js',
  'data/pages/work.js',
  'data/pages/contact.js',
  'data/pages/login.js',
  'data/pages/projects/cegeta.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<div id=\\"awwwards\\"[^>]*>([\s\S]*?)<\/div>/i);
  if (match) {
    console.log(`Matched in ${f}: length = ${match[0].length}`);
  } else {
    console.log(`No match in ${f}`);
  }
});

