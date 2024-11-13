// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiBIRseFAlmtUWyhrSLFm70x46msnigHI",
  authDomain: "fir-authentication-168ef.firebaseapp.com",
  projectId: "fir-authentication-168ef",
  storageBucket: "fir-authentication-168ef.firebasestorage.app",
  messagingSenderId: "113673006719",
  appId: "1:113673006719:web:943be2cf81febd5037d94a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;