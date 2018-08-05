self.addEventListener('install', function(event) {
  console.log('[Service worker] Installing Service Worker...', event);
  event.waitUntil(
    caches.open('static')
      .then(function(cache) {
        console.log('[Service Worker] Pre-caching static assets')
        cache.addAll([
          '/',
          '/index.html',
          'https://fonts.googleapis.com/css?family=Rajdhani:300,600,700|Roboto+Mono:100,300',
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css'
        ])
      })
  )
})

self.addEventListener('activate', function(event) {
  console.log('[Service worker] Activating Service Worker...', event);
  return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
  // console.log('[Service Worker]', event);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response
        } else {
          return fetch(event.request)
            .then(function(res) {
              return caches.open('dynamic')
                .then(function(cache) {
                  cache.put(event.request.url, res.clone())
                  return res
                })
            })
        }
      })
  );
})
