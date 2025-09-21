// Define the cache name and files to cache
const CACHE_NAME = 'HBB_2025_v1';
const urlsToCache = [
  '/headbangers2025/',
  '/headbangers2025/style.css',
  '/headbangers2025/common.js',
  '/headbangers2025/index.html',
  '/headbangers2025/manifest.webmanifest',
  '/headbangers2025/images/',
  '/headbangers2025/images/deathbot.png',
  '/headbangers2025/images/deathbotears.png',
  '/headbangers2025/images/deathbotearssmall.png',
  '/headbangers2025/images/deathbotsmall.png',
  '/headbangers2025/images/deathmetalsearch.png',
  '/headbangers2025/images/deathmetalsearch2.png',
  '/headbangers2025/images/dog.png',
  '/headbangers2025/images/dude.png',
  '/headbangers2025/images/hands.png',
  '/headbangers2025/images/pinklady.png',
  '/headbangers2025/images/search.png'
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

