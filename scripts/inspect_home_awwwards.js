const fs = require('fs');

const content = fs.readFileSync('data/pages/home.js', 'utf8');
const start = content.indexOf('<div id=\\"awwwards\\"');
const end = content.indexOf('</div>', start) + 6;
console.log('Block in home.js:');
console.log(content.slice(start, end));
console.log('Next 50 chars after block:');
console.log(content.slice(end, end + 50));
