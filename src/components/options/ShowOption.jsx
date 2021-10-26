import React from 'react'
import {collection, query} from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';

const ShowOption = () => {

    const firestore = useFirestore();
    const benefitsCollection = collection(firestore, 'Benefits');
    const benefitsQuery = query(benefitsCollection);
    const { data: benefits } = useFirestoreCollectionData(benefitsQuery);

        if (!benefits) {
return <div>cargando</div>
        }

        console.log(benefits[0]);

        return (
         
<div className="grid-wrapper">    
         
                {benefits.map((benefit) => (
                    <div className= "btn-img" key={benefit.NO_ID_FIELD}>
                    <img src={benefit.url} alt="" />
                <a href={benefit.urlBeneficio} target="_blank" rel="noopener noreferrer" className="option-link">
                <h3 class="image__title">{benefit.titulo}</h3></a>	
                </div>
                ))}
            
            </div>
           
        );
      };


export default ShowOption;
