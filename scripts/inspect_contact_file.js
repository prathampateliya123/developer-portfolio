const { contactHtml } = require('../data/pages/contact');

console.log('Context in contact.js:');
const matches = contactHtml.match(/.{0,50}(React|Developer|Pratham).{0,50}/gi) || [];
matches.slice(0, 10).forEach(m => console.log(' - ' + m.trim().replace(/\s+/g, ' ')));
