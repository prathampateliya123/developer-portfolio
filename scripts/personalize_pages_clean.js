const fs = require('fs');
const path = require('path');

// ==========================================
// 1. PERSONALIZE HOME PAGE (data/pages/home.js)
// ==========================================
console.log('--- Personalizing data/pages/home.js ---');
let { homeHtml } = require('../data/pages/home');

// Loader
homeHtml = homeHtml.replace(
  'DEV IN THE HOOD — Luxembourg',
  'PRATHAM PATELIYA — React Developer'
);

// Header Brand
homeHtml = homeHtml.replace(
  'alt="logo dev in the hood"',
  'alt="Pratham Pateliya — React Frontend Developer"'
);
homeHtml = homeHtml.replace(
  '<span>Luxembourg</span><span data-clock',
  '<span>Available for work</span><span data-clock'
);

// Menu Footer Links
homeHtml = homeHtml.replace(
  '<a class="text-mono" href="mailto:admin@devinthehood.com">admin@devinthehood.com</a><a class="text-mono" href="https://github.com/jul6art" target="_blank" rel="noopener">GitHub</a><a class="text-mono" href="https://www.linkedin.com/in/geoffrey-kratz-042b8380" target="_blank" rel="noopener">LinkedIn</a><a class="text-mono" href="https://stackexchange.com/users/9558682/jul6art" target="_blank" rel="noopener">Stack Exchange</a>',
  '<a class="text-mono" href="mailto:contact@prathampateliya.dev">contact@prathampateliya.dev</a><a class="text-mono" href="https://github.com/prathampateliya123" target="_blank" rel="noopener">GitHub</a><a class="text-mono" href="https://www.linkedin.com/in/prathampateliya" target="_blank" rel="noopener">LinkedIn</a>'
);

// Hero Titles & Captions
homeHtml = homeHtml.replace(
  '<h1 class="visually-hidden">DEV IN THE HOOD — Jul6art, Lead developer in Luxembourg</h1>',
  '<h1 class="visually-hidden">Pratham Pateliya — React Frontend Developer · Portfolio</h1>'
);
homeHtml = homeHtml.replace(
  '<p class="caption caption--front" data-cap="open"><span class="caption__line"><span>Every <em>product</em></span></span></p><p class="caption caption--front" data-cap="close"><span class="caption__line"><span>He builds</span></span></p>',
  '<p class="caption caption--front" data-cap="open"><span class="caption__line"><span>Building modern</span></span></p><p class="caption caption--front" data-cap="close"><span class="caption__line"><span>Web experiences</span></span></p>'
);
homeHtml = homeHtml.replace(
  '<p class="caption caption--back" data-cap="open"><span class="caption__line"><span>has two <em>sides…</em></span></span></p><p class="caption caption--back" data-cap="close"><span class="caption__line"><span><em>both</em> sides.</span></span></p>',
  '<p class="caption caption--back" data-cap="open"><span class="caption__line"><span>with <em>React.js…</em></span></span></p><p class="caption caption--back" data-cap="close"><span class="caption__line"><span><em>clean</em> code.</span></span></p>'
);
homeHtml = homeHtml.replace(
  '<p class="caption caption--center" data-cap="pick"><span class="caption__line"><span>Most developers <em>pick a side.</em></span></span></p><p class="caption caption--center" data-cap="hood"><span class="caption__line"><span>This one pulled up <em>his hood.</em></span></span></p>',
  '<p class="caption caption--center" data-cap="pick"><span class="caption__line"><span>Crafting interfaces that <em>feel alive.</em></span></span></p><p class="caption caption--center" data-cap="hood"><span class="caption__line"><span>Component architecture. <em>Seamless APIs.</em></span></span></p>'
);

// Split Name & Tagline
homeHtml = homeHtml.replace(
  '<span class="visually-hidden">Jul6art · Lead developer · Luxembourg · Since 2015</span><span class="split__name-text" data-name-text="" aria-hidden="true">Jul6art · Lead developer · Luxembourg · Since 2015</span>',
  '<span class="visually-hidden">Pratham Pateliya · React Frontend Developer · Building Modern Web Experiences</span><span class="split__name-text" data-name-text="" aria-hidden="true">Pratham Pateliya · React Frontend Developer · Building Modern Web Experiences</span>'
);

// Player Card (#under-the-hood)
homeHtml = homeHtml.replace(
  '<h3 class="player__name">Jul6art</h3><p class="player__class text-mono">Lead developer · Luxembourg</p>',
  '<h3 class="player__name">Pratham Pateliya</h3><p class="player__class text-mono">React Frontend Developer · IT Professional</p>'
);
homeHtml = homeHtml.replace(
  '<p class="player__lead" data-words="">Developer in Luxembourg, working from design to deployment: multi-tenant SaaS platforms, e-commerce, backoffices and API layers — plus the front-end craft that makes them worth using.</p>',
  '<p class="player__lead" data-words="">React Frontend Developer with ~6 months of professional IT experience, passionate about crafting responsive, component-driven web applications, REST API integrations, and dynamic dashboards.</p>'
);
homeHtml = homeHtml.replace(
  '<div class="player__body"><p>I work full-stack on Symfony and PHP, with API-first architectures, a strong bias for modular code and interfaces built to last.</p><p>Some of it ships for clients through agencies, some of it is built in-house from the first line to production.</p></div>',
  '<div class="player__body"><p>My primary expertise is centered around React.js, modern JavaScript (ES6+), HTML5, and CSS3. I build modular component architectures, integrate real-world RESTful APIs, and translate user requirements into responsive, high-performance dashboards.</p><p>Dedicated to writing clean, maintainable code with a strong focus on user experience. Currently pursuing an online MCA from Jain University (specializing in WOCS &amp; IT) and actively learning the MERN stack (Node.js, Express.js, MongoDB) to broaden my full-stack capabilities.</p></div>'
);
homeHtml = homeHtml.replace(
  '<dl class="player__stats text-mono"><div><dt>Selected projects</dt><dd data-fact="13">13</dd></div><div><dt>Shipping since</dt><dd>2015</dd></div><div><dt>Awwwards nominations</dt><dd data-fact="2">2</dd></div><div><dt>Based in</dt><dd>LU</dd></div></dl>',
  '<dl class="player__stats text-mono"><div><dt>Selected projects</dt><dd data-fact="13">13</dd></div><div><dt>Experience</dt><dd>~6 mos</dd></div><div><dt>Primary Stack</dt><dd>React</dd></div><div><dt>Education</dt><dd>MCA</dd></div></dl>'
);
homeHtml = homeHtml.replace(
  '<div class="player__balance text-mono" role="img" aria-label="Front and Back, in balance"><span>Front</span><span class="player__meter"><i data-balance=""></i></span><span>Back</span></div>',
  '<div class="player__balance text-mono" role="img" aria-label="React UI and API Data, in balance"><span>React UI</span><span class="player__meter"><i data-balance=""></i></span><span>API &amp; Data</span></div>'
);

// Missions Section
homeHtml = homeHtml.replace(
  '<p class="board__lead">Four kinds of jobs. Pick one: the contact page opens with it already written.</p>',
  '<p class="board__lead">Four core areas of development and collaboration. Pick one: the contact page opens with it pre-filled.</p>'
);
homeHtml = homeHtml.replace(
  '<span class="board__name">Web platforms</span>',
  '<span class="board__name">React Web Apps</span>'
);
homeHtml = homeHtml.replace(
  '<span class="board__name">APIs &amp; integrations</span>',
  '<span class="board__name">APIs &amp; Dashboards</span>'
);
homeHtml = homeHtml.replace(
  '<span class="board__name">E-commerce</span>',
  '<span class="board__name">Responsive UI / UX</span>'
);
homeHtml = homeHtml.replace(
  '<span class="board__name">Front-end &amp; motion</span>',
  '<span class="board__name">Full-Stack (MERN)</span>'
);

homeHtml = homeHtml.replace(
  '<h3 class="board__title">Web platforms</h3><p class="board__desc">Multi-tenant SaaS, ERP / CRM backoffices, roles and permissions, subscription-driven feature flags.</p>',
  '<h3 class="board__title">React Web Apps</h3><p class="board__desc">Component-based Single Page Applications, custom hooks, modular state management, and modern React architectures.</p>'
);
homeHtml = homeHtml.replace(
  '<h3 class="board__title">APIs &amp; integrations</h3><p class="board__desc">API Platform, REST and GraphQL, event-driven integrations, async webhooks, Mercure real-time hub.</p>',
  '<h3 class="board__title">APIs &amp; Dashboards</h3><p class="board__desc">Connecting RESTful endpoints, asynchronous data fetching, real-time analytics dashboards, and interactive data visualization.</p>'
);
homeHtml = homeHtml.replace(
  '<h3 class="board__title">E-commerce</h3><p class="board__desc">Sylius engines, custom checkouts, ERP bridges, payment gateways and catalog indexing.</p>',
  '<h3 class="board__title">Responsive UI / UX</h3><p class="board__desc">Pixel-perfect, mobile-first responsive interfaces across devices, accessibility standards, clean CSS, and user experience.</p>'
);
homeHtml = homeHtml.replace(
  '<h3 class="board__title">Front-end &amp; motion</h3><p class="board__desc">Design-system builds, micro-interactions, GSAP choreographies, Canvas shaders, WCAG AA compliance.</p>',
  '<h3 class="board__title">Full-Stack (MERN)</h3><p class="board__desc">Expanding frontend proficiency into full-stack development with Node.js, Express.js, and MongoDB (currently learning).</p>'
);

// Finale CTA
homeHtml = homeHtml.replace(
  '<h2 class="visually-hidden">Let\'s build the whole thing.</h2>',
  '<h2 class="visually-hidden">Let\'s build modern web experiences with React.</h2>'
);
homeHtml = homeHtml.replace(
  '<p class="caption caption--back" data-cap="open"><span class="caption__line"><span>the <em>whole</em> thing.</span></span></p>',
  '<p class="caption caption--back" data-cap="open"><span class="caption__line"><span>modern <em>React</em> apps.</span></span></p>'
);
homeHtml = homeHtml.replace(
  '<span>Start a project</span>',
  '<span>Start a conversation</span>'
);
homeHtml = homeHtml.replace(
  '<a class="split__mail text-mono" href="mailto:admin@devinthehood.com">admin@devinthehood.com</a>',
  '<a class="split__mail text-mono" href="mailto:contact@prathampateliya.dev">contact@prathampateliya.dev</a>'
);

// Footer
homeHtml = homeHtml.replace(
  '<a href="mailto:admin@devinthehood.com" data-hover>admin@devinthehood.com</a>',
  '<a href="mailto:contact@prathampateliya.dev" data-hover>contact@prathampateliya.dev</a>'
);
homeHtml = homeHtml.replace(
  '<a href="tel:+32497189998">0032497189998</a>',
  '<span>Available for opportunities</span>'
);
homeHtml = homeHtml.replace(
  '<div class="site-footer__socials"><a class="text-mono" href="https://github.com/jul6art" target="_blank" rel="noopener">GitHub.</a><a class="text-mono" href="https://www.linkedin.com/in/geoffrey-kratz-042b8380" target="_blank" rel="noopener">LinkedIn.</a><a class="text-mono" href="https://stackexchange.com/users/9558682/jul6art" target="_blank" rel="noopener">Stack Exchange.</a></div>',
  '<div class="site-footer__socials"><a class="text-mono" href="https://github.com/prathampateliya123" target="_blank" rel="noopener">GitHub.</a><a class="text-mono" href="https://www.linkedin.com/in/prathampateliya" target="_blank" rel="noopener">LinkedIn.</a></div>'
);
homeHtml = homeHtml.replace(
  '<p class="text-mono">Jul6art — Lead developer</p>',
  '<p class="text-mono">Pratham Pateliya — React Frontend Developer</p>'
);

// dith-data
homeHtml = homeHtml.replace(
  '"chrome/signature":{"email":"admin@devinthehood.com"}',
  '"chrome/signature":{"email":"contact@prathampateliya.dev"}'
);

fs.writeFileSync(path.join(__dirname, '..', 'data', 'pages', 'home.js'), `// Home page markup\nexport const homeHtml = ${JSON.stringify(homeHtml)};\n`);
console.log('✅ Home page updated and serialized successfully!');


// ==========================================
// 2. PERSONALIZE CONTACT PAGE (data/pages/contact.js)
// ==========================================
console.log('\n--- Personalizing data/pages/contact.js ---');
let { contactHtml } = require('../data/pages/contact');

contactHtml = contactHtml.replace(
  'DEV IN THE HOOD — Luxembourg',
  'PRATHAM PATELIYA — React Developer'
);
contactHtml = contactHtml.replace(
  'alt="logo dev in the hood"',
  'alt="Pratham Pateliya — React Frontend Developer"'
);
contactHtml = contactHtml.replace(
  '<span>Luxembourg</span><span data-clock',
  '<span>Available for work</span><span data-clock'
);
contactHtml = contactHtml.replace(
  '<a class="text-mono" href="mailto:admin@devinthehood.com">admin@devinthehood.com</a><a class="text-mono" href="https://github.com/jul6art" target="_blank" rel="noopener">GitHub</a><a class="text-mono" href="https://www.linkedin.com/in/geoffrey-kratz-042b8380" target="_blank" rel="noopener">LinkedIn</a><a class="text-mono" href="https://stackexchange.com/users/9558682/jul6art" target="_blank" rel="noopener">Stack Exchange</a>',
  '<a class="text-mono" href="mailto:contact@prathampateliya.dev">contact@prathampateliya.dev</a><a class="text-mono" href="https://github.com/prathampateliya123" target="_blank" rel="noopener">GitHub</a><a class="text-mono" href="https://www.linkedin.com/in/prathampateliya" target="_blank" rel="noopener">LinkedIn</a>'
);
contactHtml = contactHtml.replace(
  '<h1 class="visually-hidden">Contact Jul6art — DEV IN THE HOOD</h1>',
  '<h1 class="visually-hidden">Contact Pratham Pateliya — React Frontend Developer</h1>'
);
contactHtml = contactHtml.replace(
  '<span class="terminal__line terminal__line--cmd">$ whoami</span>\n<span class="terminal__line terminal__line--out">Jul6art — Lead developer</span>\n<span class="terminal__line terminal__line--cmd">$ cat status</span>\n<span class="terminal__line terminal__line--hi">Available for work</span>\n<span class="terminal__line terminal__line--cmd">$ cat base</span>\n<span class="terminal__line terminal__line--out">Luxembourg</span>',
  '<span class="terminal__line terminal__line--cmd">$ whoami</span>\n<span class="terminal__line terminal__line--out">Pratham Pateliya — React Frontend Developer</span>\n<span class="terminal__line terminal__line--cmd">$ cat status</span>\n<span class="terminal__line terminal__line--hi">Available for opportunities</span>\n<span class="terminal__line terminal__line--cmd">$ cat focus</span>\n<span class="terminal__line terminal__line--out">React.js · Dashboards · REST APIs</span>'
);
contactHtml = contactHtml.replace(
  '<p class="missions__intro">Pick the closest mission: it writes the first line of your message.</p>',
  '<p class="missions__intro">Select a development focus area to start a conversation or inquiry.</p>'
);
contactHtml = contactHtml.replace(
  'data-mission="Web platforms"',
  'data-mission="React Web Apps"'
);
contactHtml = contactHtml.replace(
  '<span class="mission__name">Web platforms</span><span class="mission__desc">Multi-tenant SaaS, ERP / CRM backoffices, roles and permissions, subscription-driven feature flags.</span>',
  '<span class="mission__name">React Web Apps</span><span class="mission__desc">Component-based Single Page Applications, custom hooks, modular state management, and modern React architectures.</span>'
);
contactHtml = contactHtml.replace(
  'data-mission="APIs &amp; integrations"',
  'data-mission="APIs &amp; Dashboards"'
);
contactHtml = contactHtml.replace(
  '<span class="mission__name">APIs &amp; integrations</span><span class="mission__desc">API Platform, REST and GraphQL, event-driven integrations, async webhooks, Mercure real-time hub.</span>',
  '<span class="mission__name">APIs &amp; Dashboards</span><span class="mission__desc">Connecting RESTful endpoints, asynchronous data fetching, real-time analytics dashboards, and data visualization.</span>'
);
contactHtml = contactHtml.replace(
  'data-mission="E-commerce"',
  'data-mission="Responsive UI / UX"'
);
contactHtml = contactHtml.replace(
  '<span class="mission__name">E-commerce</span><span class="mission__desc">Sylius engines, custom checkouts, ERP bridges, payment gateways and catalog indexing.</span>',
  '<span class="mission__name">Responsive UI / UX</span><span class="mission__desc">Pixel-perfect, mobile-first responsive interfaces across devices, accessibility standards, clean CSS, and user experience.</span>'
);
contactHtml = contactHtml.replace(
  'data-mission="Front-end &amp; motion"',
  'data-mission="Full-Stack (MERN)"'
);
contactHtml = contactHtml.replace(
  '<span class="mission__name">Front-end &amp; motion</span><span class="mission__desc">Design-system builds, micro-interactions, GSAP choreographies, Canvas shaders, WCAG AA compliance.</span>',
  '<span class="mission__name">Full-Stack (MERN)</span><span class="mission__desc">Expanding frontend proficiency into full-stack development with Node.js, Express.js, and MongoDB (currently learning).</span>'
);
contactHtml = contactHtml.replace(
  '<h2 class="chapter-title" data-chars>Tell me what <em>you are building.</em></h2>',
  '<h2 class="chapter-title" data-chars>Let&#039;s build something <em>great together.</em></h2>'
);
contactHtml = contactHtml.replace(
  '<a href="mailto:admin@devinthehood.com" data-hover>admin@devinthehood.com</a>',
  '<a href="mailto:contact@prathampateliya.dev" data-hover>contact@prathampateliya.dev</a>'
);
contactHtml = contactHtml.replace(
  '<a href="tel:+32497189998">0032497189998</a>',
  '<span>Available for opportunities</span>'
);
contactHtml = contactHtml.replace(
  '<div class="site-footer__socials"><a class="text-mono" href="https://github.com/jul6art" target="_blank" rel="noopener">GitHub.</a><a class="text-mono" href="https://www.linkedin.com/in/geoffrey-kratz-042b8380" target="_blank" rel="noopener">LinkedIn.</a><a class="text-mono" href="https://stackexchange.com/users/9558682/jul6art" target="_blank" rel="noopener">Stack Exchange.</a></div>',
  '<div class="site-footer__socials"><a class="text-mono" href="https://github.com/prathampateliya123" target="_blank" rel="noopener">GitHub.</a><a class="text-mono" href="https://www.linkedin.com/in/prathampateliya" target="_blank" rel="noopener">LinkedIn.</a></div>'
);
contactHtml = contactHtml.replace(
  '<p class="text-mono">Jul6art — Lead developer</p>',
  '<p class="text-mono">Pratham Pateliya — React Frontend Developer</p>'
);
contactHtml = contactHtml.replace(
  '"chrome/signature":{"email":"admin@devinthehood.com"}',
  '"chrome/signature":{"email":"contact@prathampateliya.dev"}'
);

fs.writeFileSync(path.join(__dirname, '..', 'data', 'pages', 'contact.js'), `// Contact console markup\nexport const contactHtml = ${JSON.stringify(contactHtml)};\n`);
console.log('✅ Contact page updated and serialized successfully!');


// ==========================================
// 3. PERSONALIZE WORK PAGE (data/pages/work.js)
// ==========================================
console.log('\n--- Personalizing data/pages/work.js ---');
let { workHtml } = require('../data/pages/work');

workHtml = workHtml.replace(
  'DEV IN THE HOOD — Luxembourg',
  'PRATHAM PATELIYA — React Developer'
);
workHtml = workHtml.replace(
  'alt="logo dev in the hood"',
  'alt="Pratham Pateliya — React Frontend Developer"'
);
workHtml = workHtml.replace(
  '<span>Luxembourg</span><span data-clock',
  '<span>Available for work</span><span data-clock'
);
workHtml = workHtml.replace(
  '<a class="text-mono" href="mailto:admin@devinthehood.com">admin@devinthehood.com</a><a class="text-mono" href="https://github.com/jul6art" target="_blank" rel="noopener">GitHub</a><a class="text-mono" href="https://www.linkedin.com/in/geoffrey-kratz-042b8380" target="_blank" rel="noopener">LinkedIn</a><a class="text-mono" href="https://stackexchange.com/users/9558682/jul6art" target="_blank" rel="noopener">Stack Exchange</a>',
  '<a class="text-mono" href="mailto:contact@prathampateliya.dev">contact@prathampateliya.dev</a><a class="text-mono" href="https://github.com/prathampateliya123" target="_blank" rel="noopener">GitHub</a><a class="text-mono" href="https://www.linkedin.com/in/prathampateliya" target="_blank" rel="noopener">LinkedIn</a>'
);
workHtml = workHtml.replace(
  '<h1 class="visually-hidden">Selected work — DEV IN THE HOOD</h1>',
  '<h1 class="visually-hidden">Selected Work — Pratham Pateliya, React Frontend Developer</h1>'
);
workHtml = workHtml.replace(
  '<a href="mailto:admin@devinthehood.com" data-hover>admin@devinthehood.com</a>',
  '<a href="mailto:contact@prathampateliya.dev" data-hover>contact@prathampateliya.dev</a>'
);
workHtml = workHtml.replace(
  '<a href="tel:+32497189998">0032497189998</a>',
  '<span>Available for opportunities</span>'
);
workHtml = workHtml.replace(
  '<div class="site-footer__socials"><a class="text-mono" href="https://github.com/jul6art" target="_blank" rel="noopener">GitHub.</a><a class="text-mono" href="https://www.linkedin.com/in/geoffrey-kratz-042b8380" target="_blank" rel="noopener">LinkedIn.</a><a class="text-mono" href="https://stackexchange.com/users/9558682/jul6art" target="_blank" rel="noopener">Stack Exchange.</a></div>',
  '<div class="site-footer__socials"><a class="text-mono" href="https://github.com/prathampateliya123" target="_blank" rel="noopener">GitHub.</a><a class="text-mono" href="https://www.linkedin.com/in/prathampateliya" target="_blank" rel="noopener">LinkedIn.</a></div>'
);
workHtml = workHtml.replace(
  '<p class="text-mono">Jul6art — Lead developer</p>',
  '<p class="text-mono">Pratham Pateliya — React Frontend Developer</p>'
);
workHtml = workHtml.replace(
  '"chrome/signature":{"email":"admin@devinthehood.com"}',
  '"chrome/signature":{"email":"contact@prathampateliya.dev"}'
);

fs.writeFileSync(path.join(__dirname, '..', 'data', 'pages', 'work.js'), `// Selected work directory markup\nexport const workHtml = ${JSON.stringify(workHtml)};\n`);
console.log('✅ Work page updated and serialized successfully!');


// ==========================================
// 4. PERSONALIZE LOGIN PAGE (data/pages/login.js)
// ==========================================
console.log('\n--- Personalizing data/pages/login.js ---');
let { loginHtml } = require('../data/pages/login');
loginHtml = loginHtml.replace(/Jul6art/g, 'Pratham Pateliya');
loginHtml = loginHtml.replace(/admin@devinthehood\.com/g, 'contact@prathampateliya.dev');

fs.writeFileSync(path.join(__dirname, '..', 'data', 'pages', 'login.js'), `// Back office login console markup\nexport const loginHtml = ${JSON.stringify(loginHtml)};\n`);
console.log('✅ Login page updated and serialized successfully!');

