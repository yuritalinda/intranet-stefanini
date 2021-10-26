import React from 'react'
import {collection, query, deleteDoc, doc} from 'firebase/firestore';
import {
    useFirestoreCollectionData,
    useFirestore,
  } from 'reactfire';
import '../viewPages/admin.css';

  import '../../src/index.css'
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
          
            <div className="contenedor">
              <ul>
                {benefits.map((benefit) => (
                  <li className="item-container" key={benefit.NO_ID_FIELD}>
                    <p>
                    {benefit.descripcion}
                    </p>
                    <div className="contenedor-img">
                    <img className="img-benef" src={benefit.url}/> 
                    </div>
                    <button className="button-delete" onClick={() => removeBenefit(benefit.NO_ID_FIELD)}>Eliminar</button>
                     
                  </li>
                ))}
              </ul>
            </div>
           
          </>
        );
      };


export default ShowBenefit;
