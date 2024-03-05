// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCU8aP0nXrH-4f9e19MVnJjz5_UkovkvXc",
  authDomain: "piestoque-c3acf.firebaseapp.com",
  projectId: "piestoque-c3acf",
  storageBucket: "piestoque-c3acf.appspot.com",
  messagingSenderId: "248163103553",
  appId: "1:248163103553:web:2c5f28edf786ed98dee7c0",
  measurementId: "G-DSQEZB455R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializando Firestore
export const db = getFirestore(app);

