const { contactHtml } = require('../data/pages/contact');
const consoleIdx = contactHtml.indexOf('id="console"');
console.log(contactHtml.substring(consoleIdx - 100, consoleIdx + 2500));

