// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjnr7jfYR4AVKt14PbB_EpiQUV2g-Gkuc",
  authDomain: "real-estate-ea21e.firebaseapp.com",
  projectId: "real-estate-ea21e",
  storageBucket: "real-estate-ea21e.appspot.com",
  messagingSenderId: "1034062317675",
  appId: "1:1034062317675:web:01d9639f99e0b93f18492e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;