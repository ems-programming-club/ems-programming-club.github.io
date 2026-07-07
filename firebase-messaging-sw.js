// Firebase Cloud Messaging service worker
// Handles push notifications when the site tab is closed or in the background
importScripts("https://www.gstatic.com/firebasejs/12.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.15.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDbV6TuYqSLBxt4mI2Zzus3onvnXaXhGoI",
  authDomain: "ems-programming-club.firebaseapp.com",
  projectId: "ems-programming-club",
  storageBucket: "ems-programming-club.firebasestorage.app",
  messagingSenderId: "203984483228",
  appId: "1:203984483228:web:4c21045fd2567149c78e59"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "EMS CS Club";
  const options = {
    body: payload.notification?.body || "",
    icon: "icons/icon-192.png",
    badge: "icons/favicon-32.png"
  };
  self.registration.showNotification(title, options);
});
