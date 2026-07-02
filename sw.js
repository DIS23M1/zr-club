const CACHE = 'zrclub-v3';
const ASSETS = ['.', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  const isPage = req.mode === 'navigate' || req.url.endsWith('/') || req.url.endsWith('index.html');
  if (isPage) {
    e.respondWith(
      fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put('index.html', c)); return r; })
        .catch(() => caches.match(req).then(r => r || caches.match('index.html')))
    );
  } else {
    e.respondWith(caches.match(req).then(r => r || fetch(req)));
  }
});
