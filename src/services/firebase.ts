// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyB1UjjpCUMGQ8k94DjMM2NUnnUutGs7rAE",
  authDomain: "web-71e13.firebaseapp.com",
  databaseURL: "https://web-71e13-default-rtdb.firebaseio.com",
  projectId: "web-71e13",
  storageBucket: "web-71e13.appspot.com",
  messagingSenderId: "67801173829",
  appId: "1:67801173829:web:b9c08fc8a490b0c1cc382c",
  measurementId: "G-BRNLDC7LJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);