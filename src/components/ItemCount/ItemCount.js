import { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {
    //inicializo los estados del valor inicial
    const [valorInicial, setValorInicial] = useState(initial);
    

    //método que permite quitar un artículo de contador según definido el onAdd siempre que el valor no sea menor que 0
    const quitarArticulo = () => {
        if ((valorInicial - onAdd) >= 0) {
            setValorInicial(valorInicial - onAdd);
        } else {
            alert("No puede quitar más artículos")
        }
    }
    
    //Si el stock es suficiente se agregan articulos al contador según definido el onAdd
    const agregarArticulo = () => {
        if ((stock - onAdd - valorInicial) >= 0) {
            setValorInicial(valorInicial + onAdd);
        } else {
            alert("No hay suficiente stock de dicho artículo")
        }
    }


    return (
        <>
            <div className='contador'>
                <div className='elemento' onClick={quitarArticulo}>-</div>
                <div className='elemento'>{valorInicial}</div>
                <div className='elemento' onClick={agregarArticulo}>+</div>
            </div>
        </>
    )
}

export default ItemCount
