// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABk-QaVazvU1xVQ3v1Z8slp8qDdrVE_u8",
  authDomain: "mtievents-73b35.firebaseapp.com",
  projectId: "mtievents-73b35",
  storageBucket: "mtievents-73b35.appspot.com",
  messagingSenderId: "125045363397",
  appId: "1:125045363397:web:a26c3f3575cb06659c16ac",
  measurementId: "G-S0CZM9SX1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);