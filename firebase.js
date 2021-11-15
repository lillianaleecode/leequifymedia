// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi9Ckg3yqNvkgA--XdI0VUhEin86bXV2w",
  authDomain: "leequify-4a54d.firebaseapp.com",
  databaseURL: "https://leequify-4a54d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "leequify-4a54d",
  storageBucket: "leequify-4a54d.appspot.com",
  messagingSenderId: "423255527681",
  appId: "1:423255527681:web:2d9c851770264a93b70b00",
  measurementId: "G-9YLXWGMH23"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const analytics = getAnalytics(app);
const storage = getStorage();

export { app, db, storage };