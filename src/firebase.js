// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxHy9q-OkstO5nzW_TdARXhNHICCUgE8c",
  authDomain: "e-commercecoderreact.firebaseapp.com",
  projectId: "e-commercecoderreact",
  storageBucket: "e-commercecoderreact.firebasestorage.app",
  messagingSenderId: "450298345862",
  appId: "1:450298345862:web:cade7321aa52bf5d239407",
  measurementId: "G-990H1V9BF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios necesarios
const db = getFirestore(app);

export default db