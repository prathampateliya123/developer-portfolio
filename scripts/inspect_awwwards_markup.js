const { homeHtml } = require('../data/pages/home');

const idx = homeHtml.indexOf('id="awwwards"');
console.log('--- Awwwards Tag in homeHtml ---');
console.log(homeHtml.substring(idx - 10, idx + 800));

