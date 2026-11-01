const fs = require('fs');

function inspectMatches(file, term) {
  const content = fs.readFileSync(file, 'utf8');
  let idx = 0;
  console.log(`=== Matches for "${term}" in ${file} ===`);
  while ((idx = content.indexOf(term, idx)) !== -1) {
    console.log(content.substring(Math.max(0, idx - 80), Math.min(content.length, idx + 120)).replace(/\n/g, ' '));
    console.log('---');
    idx += term.length;
  }
}

inspectMatches('data/pages/home.js', 'Jul6art');

