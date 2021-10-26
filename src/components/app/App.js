import React, {useEffect} from 'react';
import '../../components/app/App.css'
import Home from '../../viewPages/Home'
import Admin from '../../viewPages/Admin'
import Beneficios from '../BeneficiosCorporativos/BeneficiosCorp'
import SeguroComplementario from '../seguroComp/SeguroComplementario'
import PerfilEmpleado from '../../viewPages/PerfilEmpleado'
import { collection, getDocs, enableIndexedDbPersistence, initializeFirestore} from "firebase/firestore";
import db from '../../firebase/firebaseConfig'
import '../../components/header/Header.css'
import '../../components/options/Options.css'
import '../../components/footer/Footer.css'
import {AuthProvider, useFirebaseApp , StorageProvider, FirestoreProvider,  useInitFirestore,} from 'reactfire';
import { getAuth } from 'firebase/auth'; 
import { ref, uploadBytesResumable, getStorage } from 'firebase/storage';

import {
  Switch,
  Route,
  BrowserRouter as Router,
} 

from "react-router-dom";




function App() {
  
  const app = useFirebaseApp();

  const {status, data: firestoreInstance} = useInitFirestore(async (firebaseApp) => {
    const db = initializeFirestore(firebaseApp, {});
    return db;
  });

const auth = getAuth(app);
const storage = getStorage(app);

  useEffect(()=>{

     const obtenerDatos=async()=>{
      const datos=await getDocs(collection(db,'user'));
      console.log(datos.docs);
     }
    obtenerDatos();


  },[])

  if (status === 'loading') {
    return <div>cargando</div>
  }

  return (
    <AuthProvider sdk={auth}>
    <StorageProvider sdk={storage}>
    <FirestoreProvider sdk={firestoreInstance}>
<Router>
<Switch>
<Route exact path ="/" component={Home}/>
<Route exact path ="/Admin" component={Admin}/>
<Route exact path ="/Beneficios-Corporativos" component={Beneficios}/>
<Route exact path ="/Seguro-Complementario" component={SeguroComplementario}/>
<Route exact path ="/Creacion-perfil-empleado" component={PerfilEmpleado}/>
</Switch>
</Router>
</FirestoreProvider>
</StorageProvider>
</AuthProvider>
  );
}

export default App;
