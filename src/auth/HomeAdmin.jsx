import React, {useState} from "react";
import 'firebase/auth';
import { signOut, getAuth} from "@firebase/auth";
import {useFirebaseApp}  from 'reactfire';
import Benefit from "./CreateBenefit";
import ShowBenefit from "./ShowBenefit";
import MenuAdmin from "./MenuAdmin";
import "./MenuAdmin.css"
import { Container, Row, Col } from 'reactstrap';

 const HomeAdmin = () => {

  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  const firebase = useFirebaseApp();
  const auth = getAuth(firebase);
      const cerrarSesion = () => {
      signOut(auth);
      };

      return (
        <Container fluid={true}>
          <Row className="row">
        <Col className="col-auto">
        <MenuAdmin toggle={toggleSidebar} isOpen={sidebarIsOpen} /></Col>
        <Col> 

       
        <Col sm={{ size: 'auto', offset: 10}}>
        <button className="button-cerrar" onClick={cerrarSesion}>Cerrar Sesión</button>
        </Col>
  
        <h1 className="admin-title">Bienvenido al portal de Administrador</h1>
        <Benefit />
 
      
       
        <Row className="row">
        
        <ShowBenefit />
      </Row>
      </Col>
      
    
      </Row>
      
         
          

        </Container>
      );
    };
 
   export default HomeAdmin
   
