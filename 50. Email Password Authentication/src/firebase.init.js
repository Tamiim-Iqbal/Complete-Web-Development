// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhoOA1wBkd11YcENqFAo9O3ggEAr2vC5I",
  authDomain: "email-password-auth-c4f1c.firebaseapp.com",
  projectId: "email-password-auth-c4f1c",
  storageBucket: "email-password-auth-c4f1c.firebasestorage.app",
  messagingSenderId: "437052496900",
  appId: "1:437052496900:web:1fa21a7a636f673c4a2951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
