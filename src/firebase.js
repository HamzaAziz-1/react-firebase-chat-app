import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD84IDkcCoV1MlnhSxb3Azmg9Fd3HJJw28",
  authDomain: "unichat-b2c92.firebaseapp.com",
  projectId: "unichat-b2c92",
  storageBucket: "unichat-b2c92.appspot.com",
  messagingSenderId: "68062685031",
  appId: "1:68062685031:web:2be30fd22984a9deddb1c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
