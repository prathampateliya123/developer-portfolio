const fs = require('fs');
const { homeHtml } = require('../data/pages/home');

// Check the actual string (which is already unescaped when imported via require!)
console.log('homeHtml typeof:', typeof homeHtml, 'length:', homeHtml.length);

function findMatchesInObject(text, term) {
  let idx = 0;
  const list = [];
  while ((idx = text.indexOf(term, idx)) !== -1) {
    list.push(idx);
    idx += term.length;
  }
  return list;
}

const matches = findMatchesInObject(homeHtml, 'Jul6art');
console.log('Matches in parsed string:', matches.length);

const streetStart = homeHtml.indexOf('id="the-street"');
const factoryStart = homeHtml.indexOf('id="the-factory"');
const playerStart = homeHtml.indexOf('id="under-the-hood"');

matches.forEach((m, i) => {
  let section = 'UNKNOWN';
  if (m < streetStart) section = 'HERO / HEADER';
  else if (m < factoryStart) section = 'THE STREET (PROTECTED)';
  else if (m < playerStart) section = 'THE FACTORY (PROTECTED)';
  else section = 'PLAYER / MISSIONS / FOOTER';
  console.log(`Match ${i} in section [${section}]: ${homeHtml.substring(m - 30, m + 60).replace(/\n/g, ' ')}`);
});

