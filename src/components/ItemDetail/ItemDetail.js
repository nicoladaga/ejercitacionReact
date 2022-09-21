import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import BotonFinalizarCompra from '../BotonFinalizarCompra/BotonFinalizarCompra'


const ItemDetail = ({ item }) => {
    const {productCartList, isInCart, addItem} = useContext(CartContext);
    const [productosAgregados, setProductosAgregados] = useState(false);

    const itemStock = ()=> {
        if(isInCart(item.id)){
            const productoExistente = productCartList.find(producto => producto.id === item.id)
            return item.stock - productoExistente.quantity
        }else{
            return item.stock
        }
    }
    
    
    
   
    const onAdd = (unidades) => {
        
        addItem(item, unidades)
        setProductosAgregados(true)
    }



        return (
            <>
    
                <div className="item-detail">
                <img className="imagen-detail" src={item.imagen} alt={item.nombre} />
                <div className="detalle-detail">
                    <h4>{item.nombre}</h4>
                    <h5>{item.precio}</h5>
                    <p className="descripcion-detail"> {item.descripcion}</p>

                    { !productosAgregados ? <ItemCount stock={itemStock()} initial={1} onAdd={onAdd}/> : <BotonFinalizarCompra/>}

                    
                </div>
                
                
            </div>
            </>
        )


    
}



export default ItemDetail