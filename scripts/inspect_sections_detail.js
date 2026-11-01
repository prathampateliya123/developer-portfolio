const { homeHtml } = require('../data/pages/home');

function getSection(startId, endId) {
  const startIdx = homeHtml.indexOf(`id="${startId}"`);
  if (startIdx === -1) return `NOT FOUND: ${startId}`;
  let endIdx = endId ? homeHtml.indexOf(`id="${endId}"`) : homeHtml.length;
  if (endIdx === -1) endIdx = homeHtml.length;
  // backtrack a bit to find opening tag
  const tagStart = homeHtml.lastIndexOf('<', startIdx);
  return homeHtml.substring(tagStart, endIdx);
}

console.log('=== HERO SECTION (#two-sides) ===');
console.log(getSection('two-sides', 'the-street').slice(0, 1500));

console.log('\n=== UNDER THE HOOD / PLAYER CARD (#under-the-hood) ===');
console.log(getSection('under-the-hood', 'missions').slice(0, 2000));

console.log('\n=== MISSIONS (#missions) ===');
console.log(getSection('missions', 'both-sides').slice(0, 1500));

console.log('\n=== FINALE CTA (#both-sides) ===');
console.log(getSection('both-sides', null).slice(0, 1500));

