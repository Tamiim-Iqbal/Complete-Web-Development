// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB031efBVb8soBCxhYbHnM512kNbIi1S3s",
  authDomain: "private-route-1.firebaseapp.com",
  projectId: "private-route-1",
  storageBucket: "private-route-1.firebasestorage.app",
  messagingSenderId: "942206215216",
  appId: "1:942206215216:web:fa81169c0f4a4218a5b9f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);