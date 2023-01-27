import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// import firebase from "";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv2D7Dr_zE3v0TCk-UqFMmRSX--ufyq-U",
  authDomain: "react-contact-738f6.firebaseapp.com",
  databaseURL: "https://react-contact-738f6-default-rtdb.firebaseio.com",
  projectId: "react-contact-738f6",
  storageBucket: "react-contact-738f6.appspot.com",
  messagingSenderId: "580115619284",
  appId: "1:580115619284:web:82cf38009f59aeabd70a41"
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig);

export const database = db.database();

export const dbRef = db.database().ref().push();