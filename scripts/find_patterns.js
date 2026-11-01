const fs = require('fs');

function searchInFile(file, patterns) {
  const content = fs.readFileSync(file, 'utf8');
  patterns.forEach(p => {
    const matches = [...content.matchAll(new RegExp(p, 'gi'))];
    if (matches.length > 0) {
      console.log(`Found ${matches.length} matches of '${p}' in ${file}`);
    }
  });
}

const files = [
  'data/siteConfig.js',
  'app/layout.jsx',
  'app/page.jsx',
  'app/contact/page.jsx',
  'app/login/page.jsx',
  'app/work/page.jsx',
  'data/pages/home.js',
  'data/pages/contact.js',
  'data/pages/login.js',
  'data/pages/work.js'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    searchInFile(f, ['Jul6art', 'Geoffrey', 'admin@devinthehood.com', 'Lead developer', '0032497189998', 'Symfony platforms']);
  }
});

