const fs = require('fs');
const path = require('path');

const loginFile = path.join(__dirname, '..', 'data', 'pages', 'login.js');
let content = fs.readFileSync(loginFile, 'utf8');

// Replace any occurrence of Jul6art or old info
content = content.replace(/Jul6art/g, 'Pratham Pateliya');
content = content.replace(/admin@devinthehood\.com/g, 'contact@prathampateliya.dev');

fs.writeFileSync(loginFile, content);
console.log('✅ data/pages/login.js personalized successfully!');

