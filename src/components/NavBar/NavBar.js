import logo from '../../logoSinTexto.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img src={logo} alt="logo" width={'100px'} />
            </div>
            <div>
                <ul className='navbar-list'>
                    <li className='navbar-list-element'><a href="#">Inicio</a></li>
                    <li className='navbar-list-element'><a href="#">Productos</a></li>
                    <li className='navbar-list-element'><a href="#"><CartWidget /></a></li>
                </ul>
            </div>
            <div className='navbar-login'><button>Login</button></div>
        </div>
    )
}

export default NavBar;