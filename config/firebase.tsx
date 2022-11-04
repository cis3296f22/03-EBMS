// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO1oMRX3gLwkZ0WOEJ40Qb10ef35olw9M",
  authDomain: "billboard-755fe.firebaseapp.com",
  projectId: "billboard-755fe",
  storageBucket: "billboard-755fe.appspot.com",
  messagingSenderId: "567493408957",
  appId: "1:567493408957:web:40b9dff7bbdb90ba229fd4"
}; 

// Initialize Firebase
let app: FirebaseApp | undefined;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}
export { getAuth }
export { createUserWithEmailAndPassword }
export { signInWithEmailAndPassword }
export { app }