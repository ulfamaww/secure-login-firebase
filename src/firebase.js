// Import fungsi yang dibutuhkan dari Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyBcy7I4BGNZr6RXIqY5brekgkpHHy6jRSI",
  authDomain: "login-app-ad3c7.firebaseapp.com",
  projectId: "login-app-ad3c7",
  storageBucket: "login-app-ad3c7.firebasestorage.app",
  messagingSenderId: "550311675823",
  appId: "1:550311675823:web:313011110613d2165a915a",
  measurementId: "G-HF6R1Q1XNB"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi layanan Auth dan Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);