import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App'
import reportWebVitals from './reportWebVitals';
import {FirebaseAppProvider} from 'reactfire';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyBJ6PjzeqlYnrycJnjbENSJOdtlb5VixuQ",
  authDomain: "intranetstefanini-1cdf1.firebaseapp.com",
  projectId: "intranetstefanini-1cdf1",
  storageBucket: "intranetstefanini-1cdf1.appspot.com",
  messagingSenderId: "853178510503",
  appId: "1:853178510503:web:429bd7a88811278ae33f82"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
