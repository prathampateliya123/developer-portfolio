const { contactHtml } = require('../data/pages/contact');
const mainIdx = contactHtml.indexOf('<main id="main">');
console.log(contactHtml.substring(mainIdx, mainIdx + 3000));

