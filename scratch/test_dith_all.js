const pages = require('../data/pagesHtml');
for (const k in pages) {
  if (typeof pages[k] === 'string') {
    console.log(k, pages[k].includes('id="dith-data"'));
  }
}
