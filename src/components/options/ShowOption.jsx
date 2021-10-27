import React from 'react'
import {collection, query} from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';

import '../options/Options.css'  

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
         
<div className="masonery">    

         
                {benefits.map((benefit) => (
                    <div className= "masonery-item" key={benefit.NO_ID_FIELD}>
                            <img src={benefit.url} alt={benefit.titulo} />
                            <a href={benefit.urlBeneficio} target="_blank" rel="noopener noreferrer" className="option-link">
                                <p class="title-img">{benefit.titulo}</p>
                            </a>	
                    </div>
                ))}
            
</div>
           
        );
      };


export default ShowOption;
