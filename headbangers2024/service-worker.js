// Define the cache name and files to cache
const CACHE_NAME = 'headbangersboat_2024_v1';
const urlsToCache = [
    '/headbangers2024/',
    '/headbangers2024/style.css',
    '/headbangers2024/common.js',
    '/headbangers2024/index.html',
    '/headbangers2024/images/',
    '/headbangers2024/images/dog.png',
    '/headbangers2024/images/dude.png',
    '/headbangers2024/images/hands.png',
    '/headbangers2024/images/pinklady.png',
    '/headbangers2024/images/search.png'
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

self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);
      
      if (cachedResponse) {
        // Return the cached response if it's available.
        return cachedResponse;
      }

      // If cache miss, fetch from network
      return fetch(event.request).then(function(response) {
        // Cache the fetched response for future use
        cache.put(event.request.url, response.clone());
        return response;

      });
    })()
  );
});


