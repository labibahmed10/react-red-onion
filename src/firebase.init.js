// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4_Fp5UCTBR_6LYovzoFOkxx7spWYq1ko",
  authDomain: "red-onion-d9754.firebaseapp.com",
  projectId: "red-onion-d9754",
  storageBucket: "red-onion-d9754.appspot.com",
  messagingSenderId: "1032463420341",
  appId: "1:1032463420341:web:32b6acb4083cb849f027fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
