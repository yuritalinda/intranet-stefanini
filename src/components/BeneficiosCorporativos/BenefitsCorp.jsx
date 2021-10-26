import React from 'react'
import {collection, query, orderBy} from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';
  import { Container, Row} from 'reactstrap';

import '../BeneficiosCorporativos/BeneficiosCorp.css'
const BenefitsCorp = () => {


    const firestore = useFirestore();
    const beneficiosEmpleadosCollection = collection(firestore, 'BeneficiosEmpleados');
    const benefitsEmployQuery = query(beneficiosEmpleadosCollection, orderBy('id', 'asc'));
    const { data: benefitEmploy} = useFirestoreCollectionData(benefitsEmployQuery);    

        if (!benefitEmploy) {
return <div>cargando</div>
        }

        console.log(benefitEmploy[0]);

        return (
         
            <Container>   
         
                {benefitEmploy.map((benefit) => (
                     <Row key={benefit.NO_ID_FIELD}>
                    <img src={benefit.url} alt="" className="beneficios"/> 
                     </Row>
                                
                ))}
            
            </Container>
           
        );
      };


export default BenefitsCorp;
  