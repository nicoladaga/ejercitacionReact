import Item from "../Item/Item"


const ItemList = ({ itemList }) => {

    return (
        <>
           { itemList?.map((producto) => {
            return (
                <Item 
                key={producto.id}
                segmento={producto.segmento} 
                imagen={producto.imagen} 
                nombre={producto.nombre} 
                precio={producto.precio} 
                />
            )
            })}
        </>
    )
}

export default ItemList