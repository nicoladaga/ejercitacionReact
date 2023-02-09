import logo from '../../logoSinTexto.png';
import '../../css/estilo.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {

    const { productCartList } = useContext(CartContext)

    return (
        <div className='navbar-container'>
            <div>
                <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>

            </div>
            <div>
                <ul className='navbar-list'>
                    <li className='navbar-list-element'>
                        <NavLink className={({ isActive }) => isActive ? "linkActivo" : "linkInactivo"} to="/">
                            <h5>Inicio</h5> </NavLink>
                    </li>
                    <li className='navbar-list-element'>
                        <div className="dropdown">
                            <h5 className="dropbtn">Productos</h5>
                            <div className="dropdown-content">
                                <NavLink className={({ isActive }) => isActive ? "linkActivo" : "linkInactivo"} to="productos/Alimentos">Alimentos</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "linkActivo" : "linkInactivo"} to="productos/Juguetes">Juguetes</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "linkActivo" : "linkInactivo"} to="productos/Camas">Camas</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "linkActivo" : "linkInactivo"} to="productos/Higiene">Higiene</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "linkActivo" : "linkInactivo"} to="productos/CollaresYPretales">Collares y Pretales</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "linkActivo" : "linkInactivo"} to="productos/TranspYJaulas">Trasportadoras y Jaulas</NavLink>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
            <div className='navbar-cart'>
                <NavLink className={({ isActive }) => isActive ? "linkActivo" : "linkInactivo"} to="/carrito">
                    {productCartList.length > 0 ? <CartWidget /> : null}
                </NavLink>
                {productCartList.length < 1 ? <CartWidget /> : null}
            </div>
        </div>
    )
}

export default NavBar;