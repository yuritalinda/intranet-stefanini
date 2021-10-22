import React, {useEffect} from 'react';
import './App.css';
import Home from './viewPages/Home';
import Admin from './viewPages/Admin';
import { collection, getDocs } from "firebase/firestore";
import db from './firebase/firebaseConfig';
import Auth from './components/Auth'
import CreateUser from './components/CreateUser';


import {
  Switch,
  Route,
  BrowserRouter as Router,
} 

from "react-router-dom";


function App() {
  
  useEffect(()=>{

     const obtenerDatos=async()=>{
      const datos=await getDocs(collection(db,'user'));
      console.log(datos.docs);
     }
    obtenerDatos();


  },[])
  return (
    
<Router>
<Switch>
<div className="App">
<p>Usuario:</p>
<CreateUser/>
<Auth/>
  </div>
<Route exact path ="/" component={Home}/>
<Route exact path ="/Admin" component={Admin}/>
</Switch>
</Router>
    
  );
}

export default App;
