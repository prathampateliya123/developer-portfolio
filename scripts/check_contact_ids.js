const { contactHtml } = require('../data/pages/contact');
const matches = [...contactHtml.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
console.log('Contact IDs:', matches);

const messageIdx = contactHtml.indexOf('id="message"');
if (messageIdx !== -1) {
  console.log('--- Message Form area ---');
  console.log(contactHtml.substring(messageIdx - 300, messageIdx + 1500));
}

