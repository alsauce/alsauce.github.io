// Define the cache name and files to cache
const CACHE_NAME = 'v4';
const urlsToCache = [
    '/',
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

// Install the service worker
self.addEventListener('install', event => {
    console.log("aco install");
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    console.log("aco install done");
    
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
    console.log("aco fetch");
    // request.mode = navigate isn't supported in all browsers
    // so include a check for Accept: text/html header.
    console.log("aco event.request.mode " + event.request.mode);
    console.log("aco event.request.method " + event.request.method);
    console.log("aco event.request.headers " + event.request.headers);
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        console.log("aco in this if " + event.request.mode);
        event.respondWith(
            fetch(event.request.url).catch(error => {
                // Return the offline page
                console.log("aco ERROR Return the offline page " + event.request.url);
                return caches.match("/headbangers2024/index.html");
            })
        );
    }
    else {
        // Respond with everything else if we can
        console.log("aco Respond with everything else if we can ");
        console.log("aco Respond with everything else if we can event.request " + event.request);
        
        event.respondWith(caches.match(event.request)
            .then(function (response) {
                if (response)
                {
                    console.log("aco responding with response " + response);
                    return response;
                }
                else{
                    let fetchResult = fetch(event.request);
                    console.log("aco responding with fetch " + fetchResult);
                    return null;
                }
            })
        );
    }
});


