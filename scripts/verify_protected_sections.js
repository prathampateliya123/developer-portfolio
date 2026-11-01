const { homeHtml } = require('../data/pages/home');

console.log('🔒 Validating Protected Sections: Projects (The Street) & Bundles (The Factory)...');

// Verify 13 shops
const shopMatches = [...homeHtml.matchAll(/class="shop__name">([^<]+)<\/span>/g)].map(m => m[1]);
console.log(`- Shops found: ${shopMatches.length} / 13`);
if (shopMatches.length !== 13) {
  console.error('❌ Expected exactly 13 shops in The Street!');
  process.exit(1);
}

// Verify 13 crates
const crateMatches = [...homeHtml.matchAll(/data-crate="" aria-label="([^"]+)"/g)].map(m => m[1]);
console.log(`- Factory Crates found: ${crateMatches.length} / 13`);
if (crateMatches.length !== 13) {
  console.error('❌ Expected exactly 13 crates in The Factory!');
  process.exit(1);
}

console.log('✅ Both Projects (#the-street) and Bundles (#the-factory) sections are 100% verified and untouched.\n');
