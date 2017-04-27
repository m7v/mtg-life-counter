self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('homepage').then((cache) => {
      return cache.addAll([
        '/',
        '/mtg-life-counter/img/*.jpg',
        '/mtg-life-counter/img/add-player.png',
        '/mtg-life-counter/img/arrow.svg',
        '/mtg-life-counter/img/Art_M15_Graphic1.png',
        '/mtg-life-counter/img/avatar_ajani.jpg',
        '/mtg-life-counter/img/avatar_chandra.jpg',
        '/mtg-life-counter/img/avatar_garruk.jpg',
        '/mtg-life-counter/img/avatar_gisa.jpg',
        '/mtg-life-counter/img/avatar_jace.jpg',
        '/mtg-life-counter/img/avatar_lilliana.jpg',
        '/mtg-life-counter/img/avatar_nahiri.jpg',
        '/mtg-life-counter/img/avatar_nissa.jpg',
        '/mtg-life-counter/img/background.jpg',
        '/mtg-life-counter/img/Logo_M15_EN.png',
        '/mtg-life-counter/img/Logo_M15_Supplemental_EN_blk.png',
        '/mtg-life-counter/img/remove-player.png',
        '/mtg-life-counter/img/sinchronize.png',
        '/mtg-life-counter/fonts/Beleren2016-Bold.woff',
        '/mtg-life-counter/css/main.css',
        '/mtg-life-counter/static/js/bundle.js',
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
