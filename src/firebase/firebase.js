import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDctoctX2JJXTPV7vNICXQjtEuY-5FCFt0",
  authDomain: "nahueloterolorenza.firebaseapp.com",
  projectId: "nahueloterolorenza",
  storageBucket: "nahueloterolorenza.appspot.com",
  messagingSenderId: "1053195614747",
  appId: "1:1053195614747:web:2132d0763b7fc0483596be",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);