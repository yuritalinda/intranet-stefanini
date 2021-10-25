import React, {useEffect} from 'react';
import '../../components/app/App.css'
import Home from '../../viewPages/Home'
import Admin from '../../viewPages/Admin'
import Beneficios from '../../viewPages/Beneficios'
import PerfilEmpleado from '../../viewPages/PerfilEmpleado'
import SeguroComplementario from '../../viewPages/SeguroComplementario';
import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase/firebaseConfig'
import '../../components/header/Header.css'
import '../../components/options/Options.css'
import '../../components/footer/Footer.css'
import Auth from '../../auth/Auth.jsx'
import {AuthProvider, useFirebaseApp } from 'reactfire';
import { getAuth } from 'firebase/auth'; 


import {
  Switch,
  Route,
  BrowserRouter as Router,
} 

from "react-router-dom";




function App() {
  
  const app = useFirebaseApp();


const auth = getAuth(app);

  useEffect(()=>{

     const obtenerDatos=async()=>{
      const datos=await getDocs(collection(db,'user'));
      console.log(datos.docs);
     }
    obtenerDatos();


  },[])
  return (
    <AuthProvider sdk={auth}>
<Router>
<Switch>
<Route exact path ="/" component={Home}/>
<Route exact path ="/Admin" component={Admin}/>
<Route exact path ="/Beneficios-Corporativos" component={Beneficios}/>
<Route exact path ="/Seguro-Complementario" component={SeguroComplementario}/>
<Route exact path ="/Creacion-perfil-empleado" component={PerfilEmpleado}/>
</Switch>
</Router>
</AuthProvider>
  );
}

export default App;
