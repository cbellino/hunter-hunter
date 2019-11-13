importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js",
);

if (workbox) {
  const maxAgeInSeconds = 60 * 30;

  workbox.routing.registerRoute(
    new RegExp("/.*"),
    new workbox.strategies.CacheFirst(),
  );

  workbox.googleAnalytics.initialize();
}
