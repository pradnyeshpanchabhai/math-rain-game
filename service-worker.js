document.getElementById("startBtn").onclick = () => {
  document.getElementById("correctSound").play();
  document.getElementById("wrongSound").play();
  document.getElementById("tapSound").play();

  document.getElementById("startBtn").style.display="none";
};

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("math-rain-cache").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
