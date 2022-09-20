import Item from "../Item/Item"
import { CartContext } from "../../context/CartContext";
import {useContext} from 'react'

const ItemList = ({ itemList }) => {

    const {productCartList, isInCart} = useContext(CartContext);
    
    const itemStock = (item)=> {
        if(isInCart(item.id)){
            const productoExistente = productCartList.find(producto => producto.id === item.id)
            return item.stock - productoExistente.quantity
        }else{
            return item.stock
        }
    }

    return (
        <>
           { itemList?.map((producto) => {
            return (
                <Item 
                key={producto.id}
                id={producto.id}
                segmento={producto.segmento} 
                imagen={producto.imagen} 
                nombre={producto.nombre} 
                precio={producto.precio}
                stock={itemStock(producto)} 
                />
            )
            })}
        </>
    )
}

export default ItemList