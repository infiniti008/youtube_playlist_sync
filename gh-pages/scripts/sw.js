importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
    '../styles/style.css',
    'index.js',
    '../favicon.ico',
    '../index.html',
]);

workbox.routing.registerRoute(
    /.*\.js'/,
    () => {
      console.log('JSSSSS')
    }
);

workbox.routing.registerRoute(
  /index\.html/,
  // https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.strategies
  workbox.strategies.networkFirst({
    cacheName: 'workbox:html',
  })
);

workbox.routing.registerRoute(
    // Cache image files
    /.*\.ico/,
    // Use the cache if it's available
    () => {console.log('ICO')}
  );