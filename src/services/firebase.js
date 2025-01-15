// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzTVtKncUtVqhE77TFfaATOuDjhZouP0A",
  authDomain: "my-team-5df87.firebaseapp.com",
  projectId: "my-team-5df87",
  storageBucket: "my-team-5df87.firebasestorage.app",
  messagingSenderId: "813414192294",
  appId: "1:813414192294:web:dc4747029616eea7645067",
  measurementId: "G-BMFFJD48FQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvidor = new GoogleAuthProvider();
export const db = getFirestore(app);
