const { homeHtml } = require('../data/pages/home');
const matches = [...homeHtml.matchAll(/data-crate[^>]*aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('Crates count:', matches.length);
console.log('Sample crates:', matches.slice(0, 3));

