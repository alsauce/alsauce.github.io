// Define the cache name and files to cache
const CACHE_NAME = '70k_2025_v1';
const urlsToCache = [
  '/70k2025/',
  '/70k2025/style.css',
  '/70k2025/common.js',
  '/70k2025/index.html',
  '/70k2025/manifest.webmanifest',
  '/70k2025/images/',
  '/70k2025/images/deathbot.png',
  '/70k2025/images/deathbotears.png',
  '/70k2025/images/deathbotearssmall.png',
  '/70k2025/images/deathbotsmall.png',
  '/70k2025/images/deathmetalsearch.png',
  '/70k2025/images/deathmetalsearch2.png',
  '/70k2025/images/dog.png',
  '/70k2025/images/dude.png',
  '/70k2025/images/hands.png',
  '/70k2025/images/pinklady.png',
  '/70k2025/images/search.png'
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

