// Define the cache name and files to cache
const CACHE_NAME = 'v2';
const urlsToCache = [
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

// Install the service worker
self.addEventListener('install', event => {
    console.log("aco install");
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
    console.log("aco fetch");
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If cached response is found, return it
        if (response) {
            console.log("aco sdaf");
          return response;
        }
        // If not, fetch from network and cache
        return fetch(event.request)
          .then(response => {
            console.log("aco response");
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            console.log("aco response2");
           
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
      .catch(() => {
        console.log("aco event.request " + event.request);
        console.log("aco catch()asf");
        return caches.match('/index.html');
      })
  );
});

// Remove outdated caches
self.addEventListener('activate', event => {
    console.log("aco activate");
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
