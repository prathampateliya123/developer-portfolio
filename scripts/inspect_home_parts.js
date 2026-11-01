const { homeHtml } = require('../data/pages/home');

function printRange(fromText, toText) {
  const i1 = homeHtml.indexOf(fromText);
  const i2 = homeHtml.indexOf(toText, i1);
  console.log(homeHtml.substring(i1, i2));
}

console.log('--- Split Hero Rest of Code ---');
printRange('<p class="split__name text-mono"', '<section class="street"');

console.log('\n--- Player Card Complete Code ---');
printRange('<section class="player"', '<section class="board"');

console.log('\n--- Missions Panels Complete Code ---');
printRange('<div class="board__half board__half--back"', '<section class="split split--finale"');

