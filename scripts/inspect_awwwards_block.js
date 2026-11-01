const { homeHtml } = require('../data/pages/home');

const idx = homeHtml.indexOf('id="awwwards"');
const startTag = homeHtml.lastIndexOf('<div', idx);
const endTag = homeHtml.indexOf('</div>', idx) + 6;
console.log('Whole Awwwards block:');
console.log(homeHtml.substring(startTag, endTag));

