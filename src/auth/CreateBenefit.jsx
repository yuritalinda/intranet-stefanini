import React from "react";
import { Container, Form, Button, FormGroup, Label, Input } from "reactstrap";
import {
  useFirestore,
  useStorage,
} from 'reactfire';

import { collection, addDoc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";



const CreateBenefit = () => {

  let urlDescarga;

  const firestore = useFirestore();

  const storage = useStorage();

  const benefitsCollection = collection(firestore, 'Benefits');

  async function addBenefit(e) {
    e.preventDefault();
    
    const descripcion = e.target.formDescripcion.value;
    const urlBeneficio = e.target.urlBeneficio.value;
    const titulo = e.target.titulo.value;

  addDoc(benefitsCollection, {titulo, descripcion, urlBeneficio, url: urlDescarga});
  }

  async function fileHandler(e) {

    // detectar archivo
    const archivoLocal = e.target.files[0];

    // cargarlo a firebase storage
    const archivoRef = ref(storage, `documentos/${archivoLocal.name}`);
    await uploadBytes(archivoRef, archivoLocal);
    
    // obtener url de descarga
    urlDescarga = await getDownloadURL(archivoRef);

  }


  return (
    <Container>
      <Form  onSubmit={addBenefit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="titulo" className="mr-sm-2">Titulo</Label>
        <Input type="text" id="titulo" placeholder="Agrega un titulo" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="formDescripcion" className="mr-sm-2">Descripción</Label>
        <Input type="text" id="formDescripcion" placeholder="Agrega una descripción" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="urlBeneficio" className="mr-sm-2">Url</Label>
        <Input type="text" id="urlBeneficio" placeholder="Agrega una url" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="file" className="mr-sm-2">Selecciona Archivo</Label>
        <Input type="file" id="file" placeholder="Añade archivo"  onChange={fileHandler} />
      </FormGroup>
      <Button>Enviar</Button>
    </Form>
    </Container>
  );
};

export default CreateBenefit;