// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2Z82tKP2taHAv4vK0FMmqQOqhy9ge_c",
  authDomain: "chatisp20.firebaseapp.com",
  databaseURL: "https://chatisp20-default-rtdb.firebaseio.com",
  projectId: "chatisp20",
  storageBucket: "chatisp20.appspot.com",
  messagingSenderId: "63135188518",
  appId: "1:63135188518:web:af2e4a38499aef45de48e7",
  measurementId: "G-NW0BHDTS3T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);