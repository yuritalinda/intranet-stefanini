



function Header () {
    return(
    <div className="header-container">
        <div className="logo-container">
                <img className="logo-stefanini" src="https://i.postimg.cc/mZ3wNtyp/stefanini-png.png" alt="stefanini-png"/>
        </div>
        <div className="btns-container">
                <button className="btn-header">Inicio</button>{' '}
                <button className="btn-header">Beneficios</button>{' '}
                <button className="btn-header">Contacto</button>{' '}
        </div>
               
        <div className="login-btn-container">
        <a href="/Admin" target="_blank"><img className="user-admin" src="https://i.postimg.cc/2yx7zK5N/user.png" alt="user"/></a>
        </div>    
    </div>
           
    )
}
export default Header