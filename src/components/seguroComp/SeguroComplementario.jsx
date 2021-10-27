import React from 'react'
import {collection, query, orderBy} from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';
import { Container, Row } from 'reactstrap';
import '../seguroComp/SeguroComplementario.css';

const SeguroComplementario = () => {
   


    const firestore = useFirestore();
    const segurosComplCollection = collection(firestore, 'Seguro Complementario');
    const segurosComplQuery = query(segurosComplCollection, orderBy('id', 'asc'));
    const { data: segurosCompl } = useFirestoreCollectionData(segurosComplQuery);

        if (!segurosCompl) {
return <div>cargando</div>
        }

        console.log(segurosCompl[0]);

        return (
         
            <Container> 
         
                {segurosCompl.map((benefit) => (
                    <Row key={benefit.NO_ID_FIELD} >
                      
                    <img src={benefit.url} alt="" className="seguro"  />
                    </Row>
               
                
                ))}
            
            </Container> 
           
        );
      };


export default SeguroComplementario;
