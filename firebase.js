// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKrWIOZVTLGfyl5tb2NVzSUtbHk8iT_7A",
  authDomain: "capstone-invest-like-the-best.firebaseapp.com",
  projectId: "capstone-invest-like-the-best",
  storageBucket: "capstone-invest-like-the-best.appspot.com",
  messagingSenderId: "96850244016",
  appId: "1:96850244016:web:ddd9dad95b5f77941c2675",
  measurementId: "G-70EMZTW6PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);