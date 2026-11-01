const fs = require('fs');
['package.json', 'next.config.mjs', 'tailwind.config.js', 'jsconfig.json'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(f, 'has root css:', content.includes('css/'), 'has root js:', content.includes('js/'));
});

