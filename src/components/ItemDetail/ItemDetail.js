import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ item }) => {

    const onAdd = () => {
        alert("Se agregó al carrito")
    }

    return (
        <>

            <div className="item-detail">
            <img className="imagen-detail" src={item.imagen} alt={item.nombre} />
            <div className="detalle-detail">
                <h4>{item.nombre}</h4>
                <h5>{item.precio}</h5>
                <p className="descripcion-detail"> {item.descripcion}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
            
            
        </div>
        </>
    )
}



export default ItemDetail