import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASURMENTID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);