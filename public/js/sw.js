var CACHE_NAME = 'poker-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/img/card0.png',
  '/img/nipo-logo48.png',
  '/img/nipo-logo96.png',
  '/img/nipo-logo192.png',
  '/img/nipo-logo512.png',
  '/js/main.js',
  '/css/style.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});