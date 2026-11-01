const fs = require('fs');
const path = require('path');

const contactFile = path.join(__dirname, '..', 'data', 'pages', 'contact.js');
let content = fs.readFileSync(contactFile, 'utf8');

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

// 4. Terminal Header
content = content.replace(
  '<h1 class="visually-hidden">Contact Jul6art — DEV IN THE HOOD</h1>',
  '<h1 class="visually-hidden">Contact Pratham Pateliya — React Frontend Developer</h1>'
);
content = content.replace(
  '<span class="terminal__line terminal__line--cmd">$ whoami</span>\n<span class="terminal__line terminal__line--out">Jul6art — Lead developer</span>\n<span class="terminal__line terminal__line--cmd">$ cat status</span>\n<span class="terminal__line terminal__line--hi">Available for work</span>\n<span class="terminal__line terminal__line--cmd">$ cat base</span>\n<span class="terminal__line terminal__line--out">Luxembourg</span>',
  '<span class="terminal__line terminal__line--cmd">$ whoami</span>\n<span class="terminal__line terminal__line--out">Pratham Pateliya — React Frontend Developer</span>\n<span class="terminal__line terminal__line--cmd">$ cat status</span>\n<span class="terminal__line terminal__line--hi">Available for opportunities</span>\n<span class="terminal__line terminal__line--cmd">$ cat focus</span>\n<span class="terminal__line terminal__line--out">React.js · Dashboards · REST APIs</span>'
);

// 5. Missions on Contact Page
content = content.replace(
  '<p class="missions__intro">Pick the closest mission: it writes the first line of your message.</p>',
  '<p class="missions__intro">Select a development focus area to start a conversation or inquiry.</p>'
);
content = content.replace(
  'data-mission="Web platforms"',
  'data-mission="React Web Apps"'
);
content = content.replace(
  '<span class="mission__name">Web platforms</span><span class="mission__desc">Multi-tenant SaaS, ERP / CRM backoffices, roles and permissions, subscription-driven feature flags.</span>',
  '<span class="mission__name">React Web Apps</span><span class="mission__desc">Component-based Single Page Applications, custom hooks, modular state management, and modern React architectures.</span>'
);
content = content.replace(
  'data-mission="APIs &amp; integrations"',
  'data-mission="APIs &amp; Dashboards"'
);
content = content.replace(
  '<span class="mission__name">APIs &amp; integrations</span><span class="mission__desc">API Platform, REST and GraphQL, event-driven integrations, async webhooks, Mercure real-time hub.</span>',
  '<span class="mission__name">APIs &amp; Dashboards</span><span class="mission__desc">Connecting RESTful endpoints, asynchronous data fetching, real-time analytics dashboards, and data visualization.</span>'
);
content = content.replace(
  'data-mission="E-commerce"',
  'data-mission="Responsive UI / UX"'
);
content = content.replace(
  '<span class="mission__name">E-commerce</span><span class="mission__desc">Sylius engines, custom checkouts, ERP bridges, payment gateways and catalog indexing.</span>',
  '<span class="mission__name">Responsive UI / UX</span><span class="mission__desc">Pixel-perfect, mobile-first responsive interfaces across devices, accessibility standards, clean CSS, and user experience.</span>'
);
content = content.replace(
  'data-mission="Front-end &amp; motion"',
  'data-mission="Full-Stack (MERN)"'
);
content = content.replace(
  '<span class="mission__name">Front-end &amp; motion</span><span class="mission__desc">Design-system builds, micro-interactions, GSAP choreographies, Canvas shaders, WCAG AA compliance.</span>',
  '<span class="mission__name">Full-Stack (MERN)</span><span class="mission__desc">Expanding frontend proficiency into full-stack development with Node.js, Express.js, and MongoDB (currently learning).</span>'
);

// 6. Contact Form Heading
content = content.replace(
  '<h2 class="chapter-title" data-chars>Tell me what <em>you are building.</em></h2>',
  '<h2 class="chapter-title" data-chars>Let&#039;s build something <em>great together.</em></h2>'
);

// 7. Footer
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

// 8. dith-data email
content = content.replace(
  '"chrome/signature":{"email":"admin@devinthehood.com"}',
  '"chrome/signature":{"email":"contact@prathampateliya.dev"}'
);

fs.writeFileSync(contactFile, content);
console.log('✅ data/pages/contact.js personalized successfully!');

