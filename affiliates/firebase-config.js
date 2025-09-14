// Import Firebase App & Auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration (remplace par tes infos)
const firebaseConfig = {
  apiKey: "AIzaSyDglecP8nta6SdYcPyw-W7zNLXWNSBJeUE",
  authDomain: "collabify-auth-d8d6b.firebaseapp.com",
  projectId: "collabify-auth-d8d6b",
  storageBucket: "collabify-auth-d8d6b.appspot.com",
  messagingSenderId: "961892589399",
  appId: "1:961892589399:web:5c27628458f0cc78886812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
