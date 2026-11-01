const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '..', 'data', 'pagesHtml.js');
const pagesDir = path.join(__dirname, '..', 'data', 'pages');
const projectsDir = path.join(pagesDir, 'projects');

if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });

const { homeHtml, workHtml, contactHtml, loginHtml, projectsHtml } = require(sourceFile);

fs.writeFileSync(path.join(pagesDir, 'home.js'), `// Home page markup\nexport const homeHtml = ${JSON.stringify(homeHtml)};\n`);
console.log('Created data/pages/home.js');

fs.writeFileSync(path.join(pagesDir, 'work.js'), `// Selected work directory markup\nexport const workHtml = ${JSON.stringify(workHtml)};\n`);
console.log('Created data/pages/work.js');

fs.writeFileSync(path.join(pagesDir, 'contact.js'), `// Contact console markup\nexport const contactHtml = ${JSON.stringify(contactHtml)};\n`);
console.log('Created data/pages/contact.js');

fs.writeFileSync(path.join(pagesDir, 'login.js'), `// Back office login console markup\nexport const loginHtml = ${JSON.stringify(loginHtml)};\n`);
console.log('Created data/pages/login.js');

const projectSlugs = Object.keys(projectsHtml);
const indexImports = [];
const indexExports = [];

for (const slug of projectSlugs) {
  const safeVar = slug.replace(/[^a-zA-Z0-9]/g, '_');
  const filePath = path.join(projectsDir, `${slug}.js`);
  fs.writeFileSync(filePath, `// Case study markup for ${slug}\nexport const ${safeVar}Html = ${JSON.stringify(projectsHtml[slug])};\n`);
  indexImports.push(`import { ${safeVar}Html } from './${slug}';`);
  indexExports.push(`  '${slug}': ${safeVar}Html,`);
  console.log(`Created data/pages/projects/${slug}.js`);
}

const indexContent = `// All 13 case study project markups
${indexImports.join('\n')}

export const projectsHtml = {
${indexExports.join('\n')}
};
`;

fs.writeFileSync(path.join(projectsDir, 'index.js'), indexContent);
console.log('Created data/pages/projects/index.js');

// Create the clean re-export in data/pagesHtml.js
const reexportContent = `// Re-export hub for all modular page contents
export { homeHtml } from './pages/home';
export { workHtml } from './pages/work';
export { contactHtml } from './pages/contact';
export { loginHtml } from './pages/login';
export { projectsHtml } from './pages/projects';
`;

fs.writeFileSync(sourceFile, reexportContent);
console.log('Updated data/pagesHtml.js to modular re-exports!');

