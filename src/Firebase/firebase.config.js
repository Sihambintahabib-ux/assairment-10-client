// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL7wBvH-kVvagEjJRMF08WqElmj6g9PC0",
  authDomain: "assairment-10.firebaseapp.com",
  projectId: "assairment-10",
  storageBucket: "assairment-10.firebasestorage.app",
  messagingSenderId: "1061163552428",
  appId: "1:1061163552428:web:bad71d5ef8210394bd5909",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
