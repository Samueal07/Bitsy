import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC9zka63Zha8nBvyyjoqp9PzScrMDyepQ",
  authDomain: "bitsy-a50a6.firebaseapp.com",
  projectId: "bitsy-a50a6",
  storageBucket: "bitsy-a50a6.appspot.com",
  messagingSenderId: "76627125462",
  appId: "1:76627125462:web:f8627f5ac3d5abd98dd577",
};

// Initialize Firebase
// making sure that we have only on instance
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// getting the data from Firebase database
const db = getFirestore(app);

export { db };
