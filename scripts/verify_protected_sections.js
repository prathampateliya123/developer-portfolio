const { homeHtml } = require('../data/pages/home');

// Verify shops
const shopMatches = [...homeHtml.matchAll(/class="shop__name">([^<]+)<\/span>/g)].map(m => m[1]);
console.log('Shops count:', shopMatches.length);
console.log('First 5 shops:', shopMatches.slice(0, 5));
console.log('Last 3 shops:', shopMatches.slice(-3));

// Verify crates / bundles
const crateMatches = [...homeHtml.matchAll(/data-crate aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('\nFactory Crates count:', crateMatches.length);
console.log('First 3 crates:', crateMatches.slice(0, 3));
console.log('Last 3 crates:', crateMatches.slice(-3));

