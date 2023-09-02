import 'dotenv/config';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

require('dotenv').config()

export const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  // measurementId: process.env.REACT_APP_MEASURMENTID,
  apiKey: "AIzaSyCqWuiUgPlpaXRLRKDcqJuCoawqnO-9hC0",
  authDomain: "codeblack-a757b.firebaseapp.com",
  projectId: "codeblack-a757b",
  storageBucket: "codeblack-a757b.appspot.com",
  messagingSenderId: "603771662146",
  appId: "1:603771662146:web:9403d6680ddc9eec8322db",
  measurementId: "G-F3Z6B9C0FS",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);