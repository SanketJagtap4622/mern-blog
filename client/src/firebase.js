// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c3129.firebaseapp.com",
  projectId: "mern-blog-c3129",
  storageBucket: "mern-blog-c3129.appspot.com",
  messagingSenderId: "1020781255452",
  appId: "1:1020781255452:web:aa883508a3d6d1d5d8b8d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);