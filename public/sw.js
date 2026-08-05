/**
 * CycleBees service worker.
 *
 * The previous version answered *every* request cache-first with no network
 * revalidation and pre-cached the HTML for `/`, `/about`, `/services`, … . Once
 * a visitor had loaded the site they kept seeing that exact HTML indefinitely:
 * new deploys never reached them because a cache hit short-circuited the
 * network, and the stale HTML kept requesting content-hashed JS chunks that no
 * longer existed.
 *
 * This version splits the two cases that genuinely need different behaviour:
 *   - navigations (HTML): network-first, cache only as an offline fallback, so
 *     a deploy is picked up on the very next visit;
 *   - static assets (content-hashed or versioned): cache-first with a
 *     background refresh.
 */

const VERSION = 'v2';
const RUNTIME_CACHE = `cyclebees-runtime-${VERSION}`;
const OFFLINE_CACHE = `cyclebees-offline-${VERSION}`;
const OFFLINE_URL = '/';

const CURRENT_CACHES = [RUNTIME_CACHE, OFFLINE_CACHE];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(OFFLINE_CACHE)
      .then((cache) => cache.addAll([OFFLINE_URL, '/favicon.svg', '/logo.webp']))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => !CURRENT_CACHES.includes(name))
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

/** Long-lived, content-addressed responses that are safe to serve from cache. */
const isStaticAsset = (url) =>
  url.pathname.startsWith('/_next/static/') ||
  url.pathname.startsWith('/_next/image') ||
  /\.(?:woff2?|ttf|otf|png|jpe?g|gif|webp|avif|svg|ico)$/.test(url.pathname);

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Never touch non-GET, cross-origin, or API traffic.
  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin ||
    url.pathname.startsWith('/api/')
  ) {
    return;
  }

  // HTML navigations: always try the network so deploys land immediately.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(OFFLINE_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  if (!isStaticAsset(url)) {
    return;
  }

  // Static assets: serve from cache, refresh in the background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || network;
    })
  );
});
