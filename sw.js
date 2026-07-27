self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", (event) => {
  // Empty fetch handler
});
