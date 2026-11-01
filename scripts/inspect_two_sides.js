const { homeHtml } = require('../data/pages/home');

function printFullSection(id) {
  const idx = homeHtml.indexOf(`id="${id}"`);
  const tagStart = homeHtml.lastIndexOf('<', idx);
  const nextSection = homeHtml.indexOf('<section', idx + 10);
  const nextMain = homeHtml.indexOf('</main>', idx);
  const end = nextSection !== -1 ? nextSection : nextMain;
  console.log(`\n================= FULL SECTION ${id} =================`);
  console.log(homeHtml.slice(tagStart, end));
}

printFullSection('two-sides');
