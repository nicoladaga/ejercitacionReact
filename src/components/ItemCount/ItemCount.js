import { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {
    //inicializo los estados del valor inicial
    const [valorInicial, setValorInicial] = useState(initial);
    

    //método que permite quitar un artículo de contador según definido el onAdd siempre que el valor no sea menor que 0
    const quitarArticulo = () => {
        if ((valorInicial - 1) >= 0) {
            setValorInicial(valorInicial - 1);
        } else {
            alert("No puede quitar más artículos")
        }
    }
    
    //Si el stock es suficiente se agregan articulos al contador según definido el onAdd
    const agregarArticulo = () => {
        if ((stock - 1 - valorInicial) >= 0) {
            setValorInicial(valorInicial + 1);
        } else {
            alert("No hay suficiente stock de dicho artículo")
        }
    }



    return (
        <>
        <div className='contenedorItemCount'>
            <h6 className='stockTitle'>Stock disponible: {stock} unidades</h6>
            <div className='contador'>
                <button disabled={stock === 0 || valorInicial === 0} className='elementoContador botonContador botonItemCount' onClick={quitarArticulo}>-</button>
                <p className='elementoContador'>{valorInicial}</p>
                <button disabled={stock === 0 || valorInicial >= stock} className='elementoContador botonContador botonItemCount' onClick={agregarArticulo}>+</button>
            </div>
            <button disabled={stock === 0 || valorInicial === 0} className='botonAgregar botonItemCount' onClick={()=>onAdd(valorInicial)}>Agregar al Carrito</button>
            
        </div>
            
        </>
    )
}

export default ItemCount
