import React from "react";
import 'firebase/auth';
import { signOut, getAuth} from "@firebase/auth";
import {useFirebaseApp}  from 'reactfire';
import Benefit from "./CreateBenefit";
import ShowBenefit from "./ShowBenefit";

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
          <Benefit />
          <ShowBenefit />
        </div>
      );
    };
 
   export default HomeAdmin
   
