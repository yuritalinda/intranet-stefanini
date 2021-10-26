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
          <Row>
        <Col className="col-auto"><button className="button-cerrar" onClick={cerrarSesion}>Cerrar Sesión</button>
        <MenuAdmin toggle={toggleSidebar} isOpen={sidebarIsOpen} /></Col>
        <Col> <Benefit />
        <Row>
        
        <ShowBenefit />
      </Row>
      </Col>
      
    
      </Row>
      
         
          

        </Container>
      );
    };
 
   export default HomeAdmin
   
