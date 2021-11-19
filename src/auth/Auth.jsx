import React, {useState} from "react";
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {useFirebaseApp, useUser}  from 'reactfire';
import Home from "./HomeAdmin";
import '../viewPages/admin.css';

export default (props) => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const { status, data: user } = useUser();
    console.log(user)
    const firebase = useFirebaseApp();
    const auth = getAuth(firebase);
    console.log(auth)

    const login = async () => {
        await signInWithEmailAndPassword(auth,email, password);
    }
  
    if (user) {
      return <Home/>;
    }
  
    return(
    
         <div className="login-container">
             <label htmlFor="email">Correo Electrónico</label>
             <input type="email" id="email" onChange={ (ev)=> setEmail(ev.target.value)}/>
             <label htmlFor="password">Contraseña</label>
             <input type="password" id="password" onChange={ (ev)=> setPassword(ev.target.value)}/>
             <button onClick={login}>Ingresar</button>
        </div>
       
    )
}