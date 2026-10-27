import { useEffect } from 'react';
import { NOT_FOUND, OG_IMAGE, SITE_NAME, canonicalUrl, getPage } from '../seo/pages.js';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Keeps the tab title and search tags correct while navigating inside the app.
// The static build writes the same values into each page's HTML.
export default function usePageMeta(path) {
  useEffect(() => {
    const page = path ? getPage(path) : NOT_FOUND;
    const url = path ? canonicalUrl(path) : null;
    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('name', 'robots', path ? 'index, follow' : 'noindex, follow');
    setCanonical(url);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:image', OG_IMAGE);
    if (url) setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', OG_IMAGE);
  }, [path]);
}
