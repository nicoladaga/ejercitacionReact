import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ item }) => {
    const {productCartList, isInCart, addItem} = useContext(CartContext);
    
    const itemStock = ()=> {
        if(isInCart(item.id)){
            const productoExistente = productCartList.find(producto => producto.id === item.id)
            return item.stock - productoExistente.quantity
        }else{
            return item.stock
        }
    }
    
    
   
    const onAdd = (unidades) => {
        
        alert(`Se agregaron ${unidades} unidades de ${item.nombre} al carrito`)
        addItem(item, unidades)
    }

    return (
        <>

            <div className="item-detail">
            <img className="imagen-detail" src={item.imagen} alt={item.nombre} />
            <div className="detalle-detail">
                <h4>{item.nombre}</h4>
                <h5>{item.precio}</h5>
                <p className="descripcion-detail"> {item.descripcion}</p>
                <ItemCount stock={itemStock()} initial={1} onAdd={onAdd}/>
            </div>
            
            
        </div>
        </>
    )
}



export default ItemDetail