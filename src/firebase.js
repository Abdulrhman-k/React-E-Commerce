// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADl84jQVwjrYAmVLFDLqKUCBq2-0HYgYc",
  authDomain: "ec-react-15404.firebaseapp.com",
  projectId: "ec-react-15404",
  storageBucket: "ec-react-15404.appspot.com",
  messagingSenderId: "797216788174",
  appId: "1:797216788174:web:8d14d7e8ca408bdb4f8a9f",
  measurementId: "G-8FXTHCF0Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
