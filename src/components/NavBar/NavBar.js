import logo from '../../logoSinTexto.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <Link to="/"><img className='logo' src={logo} alt="logo" width={'100px'} /></Link>
                
            </div>
            <div>
                <ul className='navbar-list'>
                    <li className='navbar-list-element'>
                        <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/">Inicio</NavLink>
                    </li>
                    <li className='navbar-list-element'>
                        <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="productos/Alimentos">Alimentos</NavLink>
                    </li>
                    <li className='navbar-list-element'>
                        <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="productos/Juguetes">Juguetes</NavLink>
                    </li>
                    <li className='navbar-list-element'>
                        <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/carrito"><CartWidget /></NavLink>
                    </li>
                    
                </ul>
            </div>
            <div className='navbar-login'><button>Login</button></div>
        </div>
    )
}

export default NavBar;