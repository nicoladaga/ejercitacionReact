import logo from '../../logoSinTexto.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {

    const {productCartList} = useContext(CartContext)

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
                    
                </ul>
            </div>
            <div className='navbar-list-element'>
                <NavLink className={({isActive})=> isActive? "linkActivo" : "linkInactivo"} to="/carrito">
                    {productCartList.length > 0 ? <CartWidget /> : null}
                </NavLink>
                {productCartList.length < 1 ? <CartWidget /> : null}
            </div>
        </div>
    )
}

export default NavBar;