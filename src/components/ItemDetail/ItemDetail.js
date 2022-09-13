import './ItemDetail.css'
const ItemDetail = ({ item }) => {


    return (
        <>

            <div className="item-detail">
            <img className="imagen-detail" src={item.imagen} alt={item.nombre} />
            <div className="detalle-detail">
                <h4>{item.nombre}</h4>
                <h5>{item.precio}</h5>
                <p className="descripcion-detail"> {item.descripcion}</p>
            </div>
            
            
        </div>
        </>
    )
}



export default ItemDetail