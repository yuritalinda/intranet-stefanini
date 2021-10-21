import React, {useEffect} from 'react';
import '../../components/app/App.css'
import Home from '../../viewPages/Home'
import Admin from '../../viewPages/Admin'
import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase/firebaseConfig'



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
<Route exact path ="/" component={Home}/>
<Route exact path ="/Admin" component={Admin}/>
</Switch>
</Router>
    
  );
}

export default App;
