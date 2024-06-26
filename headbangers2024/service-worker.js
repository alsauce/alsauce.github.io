// Define the cache name and files to cache
const CACHE_NAME = 'headbangersboat_2024_v6';
const urlsToCache = [
  '/headbangers2024/',
  '/headbangers2024/style.css',
  '/headbangers2024/common.js',
  '/headbangers2024/index.html',
  '/headbangers2024/manifest.webmanifest',
  '/headbangers2024/images/',
  '/headbangers2024/images/dog.png',
  '/headbangers2024/images/dude.png',
  '/headbangers2024/images/hands.png',
  '/headbangers2024/images/pinklady.png',
  '/headbangers2024/images/deathbotsmall.png',
  '/headbangers2024/images/deathbotearssmall.png'
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
  event.respondWith(caches.open(CACHE_NAME).then((cache) => {
    return cache.match(event.request).then((cachedResponse) => {
      if (cachedResponse && event.request.url.endsWith("png")) {
        // Don't need to fetch again
        return cachedResponse;
      }
      const fetchedResponse = fetch(event.request).then((networkResponse) => {
        cache.put(event.request, networkResponse.clone());

        return networkResponse;
      });
      return cachedResponse || fetchedResponse;
    });
  }));

});

