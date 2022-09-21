import React from 'react'
import { Link } from 'react-router-dom'
import './BotonFinalizarCompra.css';

const BotonFinalizarCompra = () => {
  return (
    <>
        <div className='contenedorBotonFinalizarCompra'>
            <p>Se agregaron los items al carrito!</p>
            <button className='botonFinalizarCompra'><Link className='linkFinalizarCompra' to='/carrito'>Finalizar compra!</Link></button>
        </div>
        
    </>
  )
}

export default BotonFinalizarCompra
