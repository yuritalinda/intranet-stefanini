import React from 'react'
import {collection, query, deleteDoc, doc} from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';
import '../viewPages/admin.css';

const ShowBenefit = () => {

    const firestore = useFirestore();
    const benefitsCollection = collection(firestore, 'Benefits');
    const benefitsQuery = query(benefitsCollection);
    const { data: benefits } = useFirestoreCollectionData(benefitsQuery);

    const removeBenefit = (id) => deleteDoc(doc(benefitsCollection, id));

        if (!benefits) {
return <div>cargando</div>
        }

        console.log(benefits[0]);

        return (
          <>
          
            <div className="h-20 overflow-x-scroll shadow-inner m-2 border border-black">
              <ul>
                {benefits.map((benefit) => (
                  <li className="benefit-item" key={benefit.NO_ID_FIELD}>
                    {benefit.titulo} <img src={benefit.url}/> <button onClick={() => removeBenefit(benefit.NO_ID_FIELD)}>X</button>
                  </li>
                ))}
              </ul>
            </div>
           
          </>
        );
      };


export default ShowBenefit;
