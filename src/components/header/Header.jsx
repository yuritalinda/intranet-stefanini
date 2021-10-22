import { Button } from 'reactstrap';

function Header () {
    return(
        <div className="header">
            <div>
                <a href="" target="_blank"><img className="logo-stefanini" src="https://i.postimg.cc/mZ3wNtyp/stefanini-png.png" alt="stefanini-png"/></a>
            </div>
                <Button className="button" color="primary">INICIO</Button>{' '}
                <Button className="button" color="primary">MENU</Button>{' '}
                <Button className="button" color="primary">CONTACTO</Button>{' '}
            <div>
            <a href=""  target="_blank"><img className="user-admin" src="https://i.postimg.cc/2yx7zK5N/user.png" alt="user"/></a>
            </div>
           </div>
    )
}
export default Header