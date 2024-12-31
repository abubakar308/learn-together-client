// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjGv2Qh7IPvT4q0roSnPu1fCxxt7fqTvk",
  authDomain: "online-tutor-booking-pla-5a98e.firebaseapp.com",
  projectId: "online-tutor-booking-pla-5a98e",
  storageBucket: "online-tutor-booking-pla-5a98e.firebasestorage.app",
  messagingSenderId: "718892576845",
  appId: "1:718892576845:web:00324417028da6c0e8ac04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);