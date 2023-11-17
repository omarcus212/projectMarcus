import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdfR34_OUrKAN5xAtlvueeU7yhQyOEE04",
  authDomain: "solucao-it.firebaseapp.com",
  projectId: "solucao-it",
  storageBucket: "solucao-it.appspot.com",
  messagingSenderId: "806684023431",
  appId: "1:806684023431:web:edcc3631d8eb02724df622",
  measurementId: "G-MWY4RGX09H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default db;