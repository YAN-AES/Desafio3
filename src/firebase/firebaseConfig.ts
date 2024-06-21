// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA4qqbAeDut12NN4kEc7lOReXG_dBfiQk",
  authDomain: "desafio-3-a8c46.firebaseapp.com",
  projectId: "desafio-3-a8c46",
  storageBucket: "desafio-3-a8c46.appspot.com",
  messagingSenderId: "181296797725",
  appId: "1:181296797725:web:97ff582de751f279d54ef4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
