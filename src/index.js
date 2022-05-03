import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCbkN8fGTrgaJtxTQTx21sZP0K-Mo53vYY",
    authDomain: "testing-app-2bb14.firebaseapp.com",
    projectId: "testing-app-2bb14",
    storageBucket: "testing-app-2bb14.appspot.com",
    messagingSenderId: "27292219187",
    appId: "1:27292219187:web:8739059cd70c3c7a897046"
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
