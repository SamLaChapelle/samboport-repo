// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO7XAgYAf41sL9q1vwXpXKja7PDSqhFPU",
  authDomain: "sambosauce-37311.firebaseapp.com",
  projectId: "sambosauce-37311",
  storageBucket: "sambosauce-37311.appspot.com",
  messagingSenderId: "101949976466",
  appId: "1:101949976466:web:c55312399dba7afb539b4b",
  measurementId: "G-3MG26ZM1KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);