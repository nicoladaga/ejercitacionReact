import './Item.css'
const Item = ({id, segmento, imagen, nombre, precio}) => {
  return (

        <div className="item">
            <img className="imagen" src={imagen} alt={nombre} />
            <div className="detalle">
                <h1 >{segmento}</h1>
                <p >{nombre}</p>
                <p >{precio}</p>
            </div>
        </div>
   
  )
}

export default Item