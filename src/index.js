import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import 'semantic-ui-css/semantic.min.css'

import './index.css';

import App from './components/jsx/App';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_HOSTING_API_KEY,
  authDomain: "resume-website-7eca7.firebaseapp.com",
  projectId: "resume-website-7eca7",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
