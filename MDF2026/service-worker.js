// Define the cache name and files to cache
const CACHE_NAME = 'MDF_2026_v1';
const urlsToCache = [
  '/MDF2026/',
  '/MDF2026/style.css',
  '/MDF2026/common.js',
  '/MDF2026/index.html',
  '/MDF2026/manifest.webmanifest',
  '/MDF2026/images/',
  '/MDF2026/images/deathbot.png',
  '/MDF2026/images/deathbotears.png',
  '/MDF2026/images/deathbotearssmall.png',
  '/MDF2026/images/deathbotsmall.png',
  '/MDF2026/images/deathmetalsearch.png',
  '/MDF2026/images/deathmetalsearch2.png',
  '/MDF2026/images/dog.png',
  '/MDF2026/images/dude.png',
  '/MDF2026/images/hands.png',
  '/MDF2026/images/pinklady.png',
  '/MDF2026/images/search.png'
];


// On install, cache the static resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(urlsToCache);
    })()
  );
});

// delete old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
      await clients.claim();
    })()
  );

});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.hostname === 'www.googletagmanager.com' || url.hostname === 'www.google-analytics.com') {
    return;
  }

  event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse && event.request.url.endsWith("png")) {
      // Don't need to fetch again
      return cachedResponse;
    }
    let fetchedResponse;
    try {
        fetchedResponse = await fetch(event.request, { signal: AbortSignal.timeout(2000) }).then((networkResponse) => {
        if (networkResponse.ok) {
          cache.put(event.request, networkResponse.clone());
        }
        else {
          console.error('fetch networkResponse not ok ' + event.request.url);
        }
        return networkResponse;
      });
    } catch (err) {
      console.error("fetch error name: " + err.name);
      console.error("fetch error message: " + err.message);
    }
    return cachedResponse || fetchedResponse;
  }));
});

