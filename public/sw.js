self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('homepage').then((cache) => {
      return cache.addAll([
        '/',
        '/img/*.jpg',
        '/img/add-player.png',
        '/img/arrow.svg',
        '/img/Art_M15_Graphic1.png',
        '/img/avatar_ajani.jpg',
        '/img/avatar_chandra.jpg',
        '/img/avatar_garruk.jpg',
        '/img/avatar_gisa.jpg',
        '/img/avatar_jace.jpg',
        '/img/avatar_lilliana.jpg',
        '/img/avatar_nahiri.jpg',
        '/img/avatar_nissa.jpg',
        '/img/background.jpg',
        '/img/Logo_M15_EN.png',
        '/img/Logo_M15_Supplemental_EN_blk.png',
        '/img/remove-player.png',
        '/img/sinchronize.png',
        '/img/sprite.png',
        '/fonts/Beleren2016-Bold.woff',
        '/css/main.css',
        '/static/js/bundle.js',
        '/manifest.json',
      ]);
    }).then(() => {
      return self.skipWaiting();
    }).catch(err => {
      console.log(err);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
