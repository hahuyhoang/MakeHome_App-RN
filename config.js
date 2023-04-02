// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3aXuGW3JPJoN93O0XVYz7wDnjzZ1jpWg",
  authDomain: "makehome-bee90.firebaseapp.com",
  projectId: "makehome-bee90",
  storageBucket: "makehome-bee90.appspot.com",
  messagingSenderId: "867749196731",
  appId: "1:867749196731:web:d349b647f095efa92b0a9e",
  measurementId: "G-PDWZF3WXRV",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // const auth = getAuth(firebaseConfig);
}

export { firebase };
