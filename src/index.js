import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCnbI-HYb50s1D51X6NpBmNaWjemBHAO9o",
    authDomain: "winkels-b4305.firebaseapp.com",
    projectId: "winkels-b4305",
    storageBucket: "winkels-b4305.appspot.com",
    messagingSenderId: "569926323162",
    appId: "1:569926323162:web:5f18c6153e201b40204ee3",
    measurementId: "G-YP3ZCK4KGL"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
