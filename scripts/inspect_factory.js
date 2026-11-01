const { homeHtml } = require('../data/pages/home');
const factoryIdx = homeHtml.indexOf('id="the-factory"');
console.log(homeHtml.substring(factoryIdx, factoryIdx + 800));

