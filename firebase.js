import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDo6CuuNGNnW4j08Hx9oMHUfgaHwHAkihM",
    authDomain: "jinrogame.firebaseapp.com",
    projectId: "jinrogame",
    storageBucket: "jinrogame.firebasestorage.app",
    messagingSenderId: "760019067196",
    appId: "1:760019067196:web:244a48e35d36371ee07e39",
    measurementId: "G-ZVD17L5MM8"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);