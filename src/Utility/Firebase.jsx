// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsfyNUospg6K5_tzN_KM8QeLKeJVH5-Mw",
  authDomain: "clone-2024-bed79.firebaseapp.com",
  projectId: "clone-2024-bed79",
  storageBucket: "clone-2024-bed79.appspot.com",
  messagingSenderId: "1022631374476",
  appId: "1:1022631374476:web:6bf30c6cd880995c3855a9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
