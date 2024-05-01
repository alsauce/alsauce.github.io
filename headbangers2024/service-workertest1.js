// Define the cache name and files to cache
const CACHE_NAME = 'v6';
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
    console.log("aco install");
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

// Serve cached content when offline
self.addEventListener('fetch', event => {
    console.log("aco fetch");

    // As a single page app, direct app to always go to cached home page.
    /*if (event.request.mode === "navigate") {
        event.respondWith(caches.match("/"));
        console.log("aco fetch2 wonder if that should have h");
        return;
    }*/

    // request.mode = navigate isn't supported in all browsers
    // so include a check for Accept: text/html header.
    // For all other requests, go to the cache first, and then the network.
  event.respondWith(
    (async () => {
        
      const cache = await caches.open(CACHE_NAME);

      console.log("aco cache name " + CACHE_NAME);
      cache.keys().then(keys => {
        keys.forEach(request => {
          console.log('Cached URL:', request.url);
        });
      });

      console.log ("aco looking for " + event.request.url);
    //   cache.keys().forEach(element => {
    //     console.log("aco keys " + element); 
    //  });

      const cachedResponse = await cache.match(event.request.url);
      console.log("aco fetch3 " + cachedResponse);
      
      if (cachedResponse) {
        console.log("aco returning result");
        // Return the cached response if it's available.
        return cachedResponse;
      }
      console.log("aco returning 404");
      // If resource isn't in the cache, return a 404.
      return new Response(null, { status: 404 });
    })()
  );
});


