// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_vp0GwrumX3qRRwMhaTrpyOqcNoo1hOY",
  authDomain: "daily-task-fc664.firebaseapp.com",
  projectId: "daily-task-fc664",
  storageBucket: "daily-task-fc664.appspot.com",
  messagingSenderId: "309108837637",
  appId: "1:309108837637:web:e44619eed0eec582227b6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
