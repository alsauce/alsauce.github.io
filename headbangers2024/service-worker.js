// Define the cache name and files to cache
const CACHE_NAME = 'v7';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([
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
    ])),
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

// Serve cached content when offline
self.addEventListener('fetch', event => {

event.respondWith(
  (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);

      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(function(response) {
        
        cache.put(event.request.url, response.clone());
        return response;

      });
    })()
  );
});
