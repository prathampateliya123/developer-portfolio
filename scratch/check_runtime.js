const fs = require('fs');
const code = fs.readFileSync('public/build/runtime.98187d6b.js', 'utf8');
const pMatches = code.match(/t\.p\s*=\s*"[^"]*"/g);
console.log('p matches:', pMatches);
