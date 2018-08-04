self.addEventListener('install', function(event) {
  console.log('[Service worker] Installing Service Worker...', event);
})

self.addEventListener('activate', function(event) {
  console.log('[Service worker] Activating Service Worker...', event);
  return self.clients.claim();
})
