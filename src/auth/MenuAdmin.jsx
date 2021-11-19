import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFolder,
    faBirthdayCake,
    faBell,
    faUsers,
    faTrashAlt,
    faFileMedical,
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
            <a href=""><span> <FontAwesomeIcon icon={faFileMedical} className="mr-2"/> Crear beneficio</span></a>
            <a href=""><span> <FontAwesomeIcon icon={faBirthdayCake} className="mr-2"/> Cumpleaños</span></a>
            <a href=""><span> <FontAwesomeIcon icon={faFolder} className="mr-2"/> Archivos</span></a>
            <a href=""><span> <FontAwesomeIcon icon={faBell} className="mr-2"/> Notificaciones</span></a>
            <a href=""><span> <FontAwesomeIcon icon={faUsers} className="mr-2"/> Empleados</span></a>
            <a href=""><span> <FontAwesomeIcon icon={faTrashAlt} className="mr-2"/> Reciclaje</span></a>
          </div>
        </Nav>
      </div>
    </div>
  );



export default MenuAdmin;
