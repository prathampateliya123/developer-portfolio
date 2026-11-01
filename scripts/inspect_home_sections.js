const fs = require('fs');
const { homeHtml } = require('../data/pages/home');

// Find all main sections/containers
const tags = [...homeHtml.matchAll(/<(?:section|header|footer|div)[^>]*(?:id="([^"]+)"|class="([^"]+)")/g)];
const seen = new Set();
tags.forEach(t => {
  const id = t[1];
  const cls = t[2];
  if (id && !seen.has('id:' + id)) {
    seen.add('id:' + id);
    console.log(`ID: #${id}`);
  }
});

