import React, {useState} from "react";
import app from '../firebase/firebaseConfig';
import 'firebase/auth';
import { FirebaseAppProvider } from "reactfire";
import { signOut, getAuth} from "@firebase/auth";
import {useFirebaseApp, useUser}  from 'reactfire';

 const HomeAdmin = () => {

  const firebase = useFirebaseApp();
  const auth = getAuth(firebase);

      const cerrarSesion = () => {
      signOut(auth);
      };
    

      return (
        <div>
          <h1>Bienvenidas, sesión iniciada, laboratoria.</h1>
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
      );
    };
 
   export default HomeAdmin
   
