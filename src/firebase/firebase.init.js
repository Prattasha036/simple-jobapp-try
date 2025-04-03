// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_sdKH-eh5F3wk-Zi-vURpzFcHeHpRLcM",
  authDomain: "job-portal-app-65ab0.firebaseapp.com",
  projectId: "job-portal-app-65ab0",
  storageBucket: "job-portal-app-65ab0.firebasestorage.app",
  messagingSenderId: "376579889606",
  appId: "1:376579889606:web:a937ee2ce6e7b11fb13ac7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
