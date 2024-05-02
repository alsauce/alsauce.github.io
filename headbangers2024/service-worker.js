// Define the cache name and files to cache
const CACHE_NAME = 'headbangersboat_2024_v5';
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
    
    (async () => {
      const cache = caches.open(CACHE_NAME);
      cache.keys().then(keys => {
      keys.forEach(key => {
        console.log('activate Key ' + key + ' URL: ', key.url);
      });
    })
    });
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
    console.log("hbb CACHE_NAME " + CACHE_NAME);
      event.respondWith(caches.open(CACHE_NAME).then((cache) => {
        console.log("hbb event.request.url " + event.request.url);
        return cache.match(event.request).then((cachedResponse) => {
          const fetchedResponse = fetch(event.request).then((networkResponse) => {
            console.log("hbb cache put event.request.url " + event.request.url);
            console.log("hbb cache and return networkResponse " + networkResponse);
            cache.put(event.request, networkResponse.clone());
  
            return networkResponse;
          });
  
          console.log("hbb return cachedResponse" + cachedResponse);
          console.log("hbb return fetchedResponse" + fetchedResponse);
          return cachedResponse || fetchedResponse;
        });
      }));
    
  });

  /*
self.addEventListener('fetch', event => {

  //TODO the cache seems to work different when deployed or something, so I think some of this code isn't exactly how this should be done
  //if (event.request.url.)



  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log("cache version " + CACHE_NAME);

      cache.keys().then(keys => {
        keys.forEach(key => {
          console.log('Key ' + key + ' URL: ', key.url);
        });
      });
    
      //TODO putting http://127.0.0.1:5500/headbangers2024/manifest.webmanifest

      //console.log("event.request.url " + event.request.url);
      const cachedResponse = await cache.match(event.request.url);
      
      if (cachedResponse) {
        console.log("cachedResponse for " + event.request.url);
        // Return the cached response if it's available.
        return cachedResponse;
      }
      console.log("non cachedResponse for " + event.request.url);
        

      // If cache miss, fetch from network
      return fetch(event.request).then(function(response) {
        // Cache the fetched response for future use
        console.log("putting " + event.request.url);
        cache.put(event.request.url, response.clone());
        return response;

      });
    })()
  );
});
*/

