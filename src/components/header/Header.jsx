import { Button } from 'reactstrap';



function Header () {
    return(
    <div className="header-container">
        <div className="logo-container">
                <img className="logo-stefanini" src="https://i.postimg.cc/mZ3wNtyp/stefanini-png.png" alt="stefanini-png"/>
        </div>
        <div className="btns-container">
                <Button className="btn-header" color="primary">Inicio</Button>{' '}
                <Button className="btn-header" color="primary">Beneficios</Button>{' '}
                <Button className="btn-header" color="primary">Contacto</Button>{' '}
        </div>
               
        <div className="login-btn-container">
        <a href=""  target="_blank"><img className="user-admin" src="https://i.postimg.cc/2yx7zK5N/user.png" alt="user"/></a>
        </div>    
    </div>
           
    )
}
export default Header