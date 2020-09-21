import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBlZqp2tCool5SFafHAizHodgYT72H3kn0",
  authDomain: "take-notes-cf817.firebaseapp.com",
  databaseURL: "https://take-notes-cf817.firebaseio.com",
  projectId: "take-notes-cf817",
  storageBucket: "take-notes-cf817.appspot.com",
  messagingSenderId: "709425181459",
  appId: "1:709425181459:web:f12bd0ba3b03d18ec120e6",
  measurementId: "G-QB53ELK34Q"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
