import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8TwtI94nb3mgp7KnsHdTEph5c1HSdEO4",
  authDomain: "chatter-965ef.firebaseapp.com",
  projectId: "chatter-965ef",
  storageBucket: "chatter-965ef.appspot.com",
  messagingSenderId: "106283438249",
  appId: "1:106283438249:web:bc99d87ba0aab31de0d9b8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);