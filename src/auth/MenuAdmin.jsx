import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { deleteField } from "@firebase/firestore";
import '../auth/MenuAdmin.css'


const MenuAdmin = ({ isOpen, toggle }) => (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="header-banner">
        <h3>Menu</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="secction-options">
          <div className="options">
            <a href="">Crear beneficio</a> 

            <a href="">Cumpleaños</a>
            <a href="">Archivos</a>
            <a href="">Notificaciones</a>
            <a href="">Empleados</a>
            <a href="">Reciclaje</a>
          </div>
        </Nav>
      </div>
    </div>
  );



export default MenuAdmin;
