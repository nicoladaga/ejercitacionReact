import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartContainer.css'
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const {productCartList, removeItem, clear} = useContext(CartContext);
    const [totalProducto, setTotalProducto] = useState('');
    const [carritoVacio, setCarritoVacio] = useState(false);

    useEffect(() => {
       
        const valoresCarrito = [];
        productCartList.forEach((producto) => {
            let valor = parseInt(producto.precio) * parseInt(producto.quantity)
            valoresCarrito.push(valor)
        })
        const total = valoresCarrito.reduce((acumulador, valor) => acumulador + valor, 0)
        total.toFixed(2)
        setTotalProducto(total)
       
    }, [productCartList])

    useEffect(()=>{
        productCartList.length > 0 ? setCarritoVacio(false) : setCarritoVacio(true)
    },[productCartList])
    

    if(!carritoVacio){

        return (
        
            <>
                <div className='contenedorCarrito'>
                    {productCartList.map(item=>(
                        <>
                            <div className='contenedorCarrito-items'>
                                <p>item: {item.nombre} cantidad: {item.quantity} precio: {item.precio}</p>
                                <button className='contenedorCarrito-botonRemover' onClick={()=>removeItem(item.id)}>x</button>
                            </div>
                            
                        </>
                    ))}
                    <p>total: ${totalProducto}</p>
                    <button className='contenedorCarrito-botonVaciar' onClick={()=>clear()}>Vaciar Carrito</button>
                </div>
            </>
        
        )

    }else{
        return (
            <>
            <p>El carrito se encuentra vacío, vuelve al Inicio para seguir comprando!</p>
            <button className='botonContinuarComprando'><Link className='botonContinuarComprando' to="/">Continuar Comprando!</Link></button>
            </>
        )
    }


    
}

export default CartContainer