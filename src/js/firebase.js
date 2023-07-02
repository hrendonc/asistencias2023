// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgxUcQUF5n_eP1qLPxYzpyZ9zEgMTLgSc",
  authDomain: "asistencias-57bf0.firebaseapp.com",
  projectId: "asistencias-57bf0",
  storageBucket: "asistencias-57bf0.appspot.com",
  messagingSenderId: "106386366625",
  appId: "1:106386366625:web:6a24cf419ba4854110d0e0"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
