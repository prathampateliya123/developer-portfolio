const { homeHtml } = require('../data/pages/home');

function printSection(id) {
  const idx = homeHtml.indexOf(`id="${id}"`);
  if (idx === -1) {
    console.log(`Section ${id} NOT found`);
    return;
  }
  const tagStart = homeHtml.lastIndexOf('<', idx);
  // find closing tag
  const nextSection = homeHtml.indexOf('<section', idx + 10);
  const nextMain = homeHtml.indexOf('</main>', idx);
  const end = nextSection !== -1 ? nextSection : nextMain;
  console.log(`\n================= SECTION ${id} =================`);
  console.log(homeHtml.slice(tagStart, end).slice(0, 1500));
}

printSection('two-sides');
printSection('under-the-hood');
printSection('missions');
printSection('both-sides');
