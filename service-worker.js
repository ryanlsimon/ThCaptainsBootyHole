
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('booty-hole-v2').then(function(cache) {
    return cache.addAll(['index.html', 'data.json', 'manifest.json', 'icon-192.png', 'icon-512.png']);
  }));
});
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(response) {
    return response || fetch(e.request);
  }));
});
