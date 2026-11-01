const fs = require('fs');
const path = require('path');

const workFile = path.join(__dirname, '..', 'data', 'pages', 'work.js');
let content = fs.readFileSync(workFile, 'utf8');

// 1. Loader text
content = content.replace(
  'DEV IN THE HOOD — Luxembourg',
  'PRATHAM PATELIYA — React Developer'
);

// 2. Header & Brand alt
content = content.replace(
  'alt="logo dev in the hood"',
  'alt="Pratham Pateliya — React Frontend Developer"'
);
content = content.replace(
  '<span>Luxembourg</span><span data-clock',
  '<span>Available for work</span><span data-clock'
);

// 3. Site Menu Footer
content = content.replace(
  '<a class="text-mono" href="mailto:admin@devinthehood.com">admin@devinthehood.com</a><a class="text-mono" href="https://github.com/jul6art" target="_blank" rel="noopener">GitHub</a><a class="text-mono" href="https://www.linkedin.com/in/geoffrey-kratz-042b8380" target="_blank" rel="noopener">LinkedIn</a><a class="text-mono" href="https://stackexchange.com/users/9558682/jul6art" target="_blank" rel="noopener">Stack Exchange</a>',
  '<a class="text-mono" href="mailto:contact@prathampateliya.dev">contact@prathampateliya.dev</a><a class="text-mono" href="https://github.com/prathampateliya123" target="_blank" rel="noopener">GitHub</a><a class="text-mono" href="https://www.linkedin.com/in/prathampateliya" target="_blank" rel="noopener">LinkedIn</a>'
);

// 4. Page Header
content = content.replace(
  '<h1 class="visually-hidden">Selected work — DEV IN THE HOOD</h1>',
  '<h1 class="visually-hidden">Selected Work — Pratham Pateliya, React Frontend Developer</h1>'
);

// 5. Footer
content = content.replace(
  '<a href="mailto:admin@devinthehood.com" data-hover>admin@devinthehood.com</a>',
  '<a href="mailto:contact@prathampateliya.dev" data-hover>contact@prathampateliya.dev</a>'
);
content = content.replace(
  '<a href="tel:+32497189998">0032497189998</a>',
  '<span>Available for opportunities</span>'
);
content = content.replace(
  '<div class="site-footer__socials"><a class="text-mono" href="https://github.com/jul6art" target="_blank" rel="noopener">GitHub.</a><a class="text-mono" href="https://www.linkedin.com/in/geoffrey-kratz-042b8380" target="_blank" rel="noopener">LinkedIn.</a><a class="text-mono" href="https://stackexchange.com/users/9558682/jul6art" target="_blank" rel="noopener">Stack Exchange.</a></div>',
  '<div class="site-footer__socials"><a class="text-mono" href="https://github.com/prathampateliya123" target="_blank" rel="noopener">GitHub.</a><a class="text-mono" href="https://www.linkedin.com/in/prathampateliya" target="_blank" rel="noopener">LinkedIn.</a></div>'
);
content = content.replace(
  '<p class="text-mono">Jul6art — Lead developer</p>',
  '<p class="text-mono">Pratham Pateliya — React Frontend Developer</p>'
);

// 6. dith-data email
content = content.replace(
  '"chrome/signature":{"email":"admin@devinthehood.com"}',
  '"chrome/signature":{"email":"contact@prathampateliya.dev"}'
);

fs.writeFileSync(workFile, content);
console.log('✅ data/pages/work.js personalized successfully while keeping projects untouched!');

