// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2q3jMX8peyLuyHM439FdrCs-p93b7GIQ",
  authDomain: "authentication-c4cdd.firebaseapp.com",
  projectId: "authentication-c4cdd",
  storageBucket: "authentication-c4cdd.appspot.com",
  messagingSenderId: "603201281026",
  appId: "1:603201281026:web:8a77fef266c0deaa469b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;