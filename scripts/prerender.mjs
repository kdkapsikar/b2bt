// Turns the built single-page app into real HTML files, one per page.
// Every page then returns HTTP 200 with its content, title, description,
// canonical link, and structured data already in the HTML that search
// engines receive. Unknown addresses get a genuine 404 page.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { NOT_FOUND, OG_IMAGE, SITE_NAME, SITE_URL, canonicalUrl, pages } from '../src/seo/pages.js';
import { jsonLdFor } from '../src/seo/jsonld.js';

const dist = path.resolve('dist');
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const safeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

function headTags({ title, description, url, robots, jsonLd }) {
  const lines = [
    `<meta name="description" content="${esc(description)}">`,
    `<meta name="robots" content="${robots}">`,
    url ? `<link rel="canonical" href="${url}">` : '',
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    url ? `<meta property="og:url" content="${url}">` : '',
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Bring2Better Tech: software, data engineering, AI, and QA.">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${OG_IMAGE}">`,
    jsonLd ? `<script type="application/ld+json">${safeJson(jsonLd)}</script>` : '',
  ];
  return lines.filter(Boolean).join('\n');
}

function build({ location, title, description, url, robots, jsonLd }) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace('<!--seo-head-->', headTags({ title, description, url, robots, jsonLd }))
    .replace('<div id="root"></div>', `<div id="root">${render(location)}</div>`);
}

for (const page of pages) {
  const html = build({
    location: page.path,
    title: page.title,
    description: page.description,
    url: canonicalUrl(page.path),
    robots: 'index, follow',
    jsonLd: jsonLdFor(page.path),
  });
  const dir = page.path === '/' ? dist : path.join(dist, page.path);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, 'index.html'), html);
}

// A real 404 page: GitHub Pages serves this file, with a 404 status, for unknown addresses.
await fs.writeFile(
  path.join(dist, '404.html'),
  build({ location: '/page-not-found', title: NOT_FOUND.title, description: NOT_FOUND.description, url: null, robots: 'noindex, follow', jsonLd: null })
);

await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${canonicalUrl(p.path)}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);

await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Prerendered ${pages.length} pages, 404.html, sitemap.xml, and robots.txt`);
