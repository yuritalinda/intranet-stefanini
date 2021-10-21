import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ6PjzeqlYnrycJnjbENSJOdtlb5VixuQ",
  authDomain: "intranetstefanini-1cdf1.firebaseapp.com",
  projectId: "intranetstefanini-1cdf1",
  storageBucket: "intranetstefanini-1cdf1.appspot.com",
  messagingSenderId: "853178510503",
  appId: "1:853178510503:web:429bd7a88811278ae33f82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
console.log(app);

export default db;
