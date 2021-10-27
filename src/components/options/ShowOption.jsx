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
        
        <div class="grid-wrapper">
        {
        benefits.map((benefit, index)=>{
            if (index > 1 && index % 3 === 0){
                return (
                    <div class="tall wrapper" key={benefit.NO_ID_FIELD}>
                        <img src={benefit.url} alt={benefit.titulo} />
                        <p class="text">
                            <a href={benefit.urlBeneficio} target="_blank" rel="noopener noreferrer" className="option-link">
                                {benefit.titulo}
                            </a>
                        </p>
                    </div>
                )
            }
            if (index > 1 &&  index % 4 === 0){
                return (
                    <div class="wide wrapper" key={benefit.NO_ID_FIELD}>
                        <img src={benefit.url} alt={benefit.titulo} />
                        <p class="text">
                            <a href={benefit.urlBeneficio} target="_blank" rel="noopener noreferrer" className="option-link">
                                {benefit.titulo}
                            </a>
                        </p>
                    </div>
                )
            }
            else{
                return (
                    <div class="wrapper" key={benefit.NO_ID_FIELD}>
                        <img src={benefit.url} alt={benefit.titulo} />
                        <p class="text">
                            <a href={benefit.urlBeneficio} target="_blank" rel="noopener noreferrer" className="option-link">
                                {benefit.titulo}
                            </a>
                        </p>
                    </div>
                )
            }            
        })
        }
        </div>
    )
    };
            
            
            export default ShowOption;
            