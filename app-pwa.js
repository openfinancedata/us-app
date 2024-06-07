// Ctrl C + V > index.html

function rSW() {
  if ('serviceWorker' in navigator) {
    cl("Attempting to register service worker...");
    navigator.serviceWorker.register(URLtoSW).then(function (registration) {
      var serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
        cl("Installing Service Worker Ver " + sWTSV);
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        cl("Service Worker Ver " + sWTSV + " is waiting");
      } else if (registration.active) {
        serviceWorker = registration.active;
        cl("Service Worker Ver " + sWTSV + " is active");
      }
      if (serviceWorker) {
        // logState(serviceWorker.state);
        serviceWorker.addEventListener('statechange', function (e) {
          // logState(e.target.state);
        });
      }
    }).catch(function (err) {
      cl("FAIL: ", err);
    });
  } else {
    cl("This browser does not support Service Workers, you cannot install this on your device")
  }
};

// -------------------- Index End -------------------- 