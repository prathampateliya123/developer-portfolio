const fs = require('fs');
const path = require('path');

const homeFile = path.join(__dirname, '..', 'data', 'pages', 'home.js');
let content = fs.readFileSync(homeFile, 'utf8');

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

// 4. Hero Section
content = content.replace(
  '<h1 class="visually-hidden">DEV IN THE HOOD — Jul6art, Lead developer in Luxembourg</h1>',
  '<h1 class="visually-hidden">Pratham Pateliya — React Frontend Developer · Portfolio</h1>'
);
content = content.replace(
  '<p class="caption caption--front" data-cap="open"><span class="caption__line"><span>Every <em>product</em></span></span></p><p class="caption caption--front" data-cap="close"><span class="caption__line"><span>He builds</span></span></p>',
  '<p class="caption caption--front" data-cap="open"><span class="caption__line"><span>Building modern</span></span></p><p class="caption caption--front" data-cap="close"><span class="caption__line"><span>Web experiences</span></span></p>'
);
content = content.replace(
  '<p class="caption caption--back" data-cap="open"><span class="caption__line"><span>has two <em>sides…</em></span></span></p><p class="caption caption--back" data-cap="close"><span class="caption__line"><span><em>both</em> sides.</span></span></p>',
  '<p class="caption caption--back" data-cap="open"><span class="caption__line"><span>with <em>React.js…</em></span></span></p><p class="caption caption--back" data-cap="close"><span class="caption__line"><span><em>clean</em> code.</span></span></p>'
);
content = content.replace(
  '<p class="caption caption--center" data-cap="pick"><span class="caption__line"><span>Most developers <em>pick a side.</em></span></span></p><p class="caption caption--center" data-cap="hood"><span class="caption__line"><span>This one pulled up <em>his hood.</em></span></span></p>',
  '<p class="caption caption--center" data-cap="pick"><span class="caption__line"><span>Crafting interfaces that <em>feel alive.</em></span></span></p><p class="caption caption--center" data-cap="hood"><span class="caption__line"><span>Component architecture. <em>Seamless APIs.</em></span></span></p>'
);
content = content.replace(
  '<span class="visually-hidden">Jul6art · Lead developer · Luxembourg · Since 2015</span><span class="split__name-text" data-name-text="" aria-hidden="true">Jul6art · Lead developer · Luxembourg · Since 2015</span>',
  '<span class="visually-hidden">Pratham Pateliya · React Frontend Developer · Building Modern Web Experiences</span><span class="split__name-text" data-name-text="" aria-hidden="true">Pratham Pateliya · React Frontend Developer · Building Modern Web Experiences</span>'
);

// 5. Player Card (Under the Hood)
content = content.replace(
  '<h3 class="player__name">Jul6art</h3><p class="player__class text-mono">Lead developer · Luxembourg</p>',
  '<h3 class="player__name">Pratham Pateliya</h3><p class="player__class text-mono">React Frontend Developer · IT Professional</p>'
);
content = content.replace(
  '<p class="player__lead" data-words="">Developer in Luxembourg, working from design to deployment: multi-tenant SaaS platforms, e-commerce, backoffices and API layers — plus the front-end craft that makes them worth using.</p>',
  '<p class="player__lead" data-words="">React Frontend Developer with ~6 months of professional IT experience, passionate about crafting responsive, component-driven web applications, REST API integrations, and dynamic dashboards.</p>'
);
content = content.replace(
  '<div class="player__body"><p>I work full-stack on Symfony and PHP, with API-first architectures, a strong bias for modular code and interfaces built to last.</p><p>Some of it ships for clients through agencies, some of it is built in-house from the first line to production.</p></div>',
  '<div class="player__body"><p>My primary expertise is centered around React.js, modern JavaScript (ES6+), HTML5, and CSS3. I build modular component architectures, integrate real-world RESTful APIs, and translate user requirements into responsive, high-performance dashboards.</p><p>Dedicated to writing clean, maintainable code with a strong focus on user experience. Currently pursuing an online MCA from Jain University (specializing in WOCS &amp; IT) and actively learning the MERN stack (Node.js, Express.js, MongoDB) to broaden my full-stack capabilities.</p></div>'
);
content = content.replace(
  '<dl class="player__stats text-mono"><div><dt>Selected projects</dt><dd data-fact="13">13</dd></div><div><dt>Shipping since</dt><dd>2015</dd></div><div><dt>Awwwards nominations</dt><dd data-fact="2">2</dd></div><div><dt>Based in</dt><dd>LU</dd></div></dl>',
  '<dl class="player__stats text-mono"><div><dt>Selected projects</dt><dd data-fact="13">13</dd></div><div><dt>Experience</dt><dd>~6 mos</dd></div><div><dt>Primary Stack</dt><dd>React</dd></div><div><dt>Education</dt><dd>MCA</dd></div></dl>'
);
content = content.replace(
  '<div class="player__balance text-mono" role="img" aria-label="Front and Back, in balance"><span>Front</span><span class="player__meter"><i data-balance=""></i></span><span>Back</span></div>',
  '<div class="player__balance text-mono" role="img" aria-label="React UI and API Data, in balance"><span>React UI</span><span class="player__meter"><i data-balance=""></i></span><span>API &amp; Data</span></div>'
);

// 6. Missions Section Headers & Descriptions
content = content.replace(
  '<p class="board__lead">Four kinds of jobs. Pick one: the contact page opens with it already written.</p>',
  '<p class="board__lead">Four core areas of development and collaboration. Pick one: the contact page opens with it pre-filled.</p>'
);
content = content.replace(
  '<span class="board__name">Web platforms</span>',
  '<span class="board__name">React Web Apps</span>'
);
content = content.replace(
  '<span class="board__name">APIs &amp; integrations</span>',
  '<span class="board__name">APIs &amp; Dashboards</span>'
);
content = content.replace(
  '<span class="board__name">E-commerce</span>',
  '<span class="board__name">Responsive UI / UX</span>'
);
content = content.replace(
  '<span class="board__name">Front-end &amp; motion</span>',
  '<span class="board__name">Full-Stack (MERN)</span>'
);

// Mission Panels
content = content.replace(
  '<h3 class="board__title">Web platforms</h3><p class="board__desc">Multi-tenant SaaS, ERP / CRM backoffices, roles and permissions, subscription-driven feature flags.</p>',
  '<h3 class="board__title">React Web Apps</h3><p class="board__desc">Component-based Single Page Applications, state management, modern React hooks, and scalable frontend architecture.</p>'
);
content = content.replace(
  '<h3 class="board__title">APIs &amp; integrations</h3><p class="board__desc">API Platform, REST and GraphQL, event-driven integrations, async webhooks, Mercure real-time hub.</p>',
  '<h3 class="board__title">APIs &amp; Dashboards</h3><p class="board__desc">Connecting RESTful endpoints, asynchronous data fetching, real-time analytics dashboards, and interactive data visualization.</p>'
);
content = content.replace(
  '<h3 class="board__title">E-commerce</h3><p class="board__desc">Sylius engines, custom checkouts, ERP bridges, payment gateways and catalog indexing.</p>',
  '<h3 class="board__title">Responsive UI / UX</h3><p class="board__desc">Pixel-perfect, mobile-first responsive interfaces across devices, accessibility standards, clean CSS, and user experience.</p>'
);
content = content.replace(
  '<h3 class="board__title">Front-end &amp; motion</h3><p class="board__desc">Design-system builds, micro-interactions, GSAP choreographies, Canvas shaders, WCAG AA compliance.</p>',
  '<h3 class="board__title">Full-Stack (MERN)</h3><p class="board__desc">Expanding frontend proficiency into full-stack development with Node.js, Express.js, and MongoDB (currently learning).</p>'
);

// 7. Finale CTA
content = content.replace(
  '<h2 class="visually-hidden">Let\'s build the whole thing.</h2>',
  '<h2 class="visually-hidden">Let\'s build modern web experiences with React.</h2>'
);
content = content.replace(
  '<p class="caption caption--front" data-cap="open"><span class="caption__line"><span>Let\'s build</span></span></p>',
  '<p class="caption caption--front" data-cap="open"><span class="caption__line"><span>Let\'s build</span></span></p>'
);
content = content.replace(
  '<p class="caption caption--back" data-cap="open"><span class="caption__line"><span>the <em>whole</em> thing.</span></span></p>',
  '<p class="caption caption--back" data-cap="open"><span class="caption__line"><span>modern <em>React</em> apps.</span></span></p>'
);
content = content.replace(
  '<span>Start a project</span>',
  '<span>Start a conversation</span>'
);
content = content.replace(
  '<a class="split__mail text-mono" href="mailto:admin@devinthehood.com">admin@devinthehood.com</a>',
  '<a class="split__mail text-mono" href="mailto:contact@prathampateliya.dev">contact@prathampateliya.dev</a>'
);

// 8. Footer
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

// 9. dith-data email
content = content.replace(
  '"chrome/signature":{"email":"admin@devinthehood.com"}',
  '"chrome/signature":{"email":"contact@prathampateliya.dev"}'
);

fs.writeFileSync(homeFile, content);
console.log('✅ data/pages/home.js personalized successfully!');

