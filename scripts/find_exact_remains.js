const { homeHtml } = require('../data/pages/home');
const { contactHtml } = require('../data/pages/contact');

function find(html, label, term) {
  let idx = 0;
  console.log(`\n=== ${label}: "${term}" ===`);
  while ((idx = html.indexOf(term, idx)) !== -1) {
    console.log(html.substring(Math.max(0, idx - 60), Math.min(html.length, idx + 100)).replace(/\n/g, ' '));
    idx += term.length;
  }
}

find(homeHtml, 'homeHtml', 'Jul6art');
find(homeHtml, 'homeHtml', 'admin@devinthehood.com');
find(contactHtml, 'contactHtml', 'Jul6art');
find(contactHtml, 'contactHtml', 'Geoffrey');
find(contactHtml, 'contactHtml', 'admin@devinthehood.com');
find(contactHtml, 'contactHtml', '0032497189998');

