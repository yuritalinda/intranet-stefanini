import React, {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {useFirebaseApp} from 'reactfire';



export default (props) => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const firebase = useFirebaseApp();
    const auth = getAuth(firebase);
    console.log(auth)

    
    const submit = async () => {
       await createUserWithEmailAndPassword(auth, email, password);
    }
    return(
     <div>
         <div>
             <label htmlFor="email">correo electronico</label>
             <input type="email" id="email" onChange={ (ev)=> setEmail(ev.target.value)}/>
             <label htmlFor="password">contraseña</label>
             <input type="password" id="password" onChange={ (ev)=> setPassword(ev.target.value)}/>
             <button onClick={submit}>crear</button>

         </div>
     </div>   
    )
}