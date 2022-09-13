import './Item.css'
import {Link} from 'react-router-dom'


const Item = ({id, segmento, imagen, nombre, precio, descripcion}) => {
  
  return (

        <div className="item">
            <img className="imagen" src={imagen} alt={nombre} />
            <div className="detalle">
                <h4>{nombre}</h4>
                <h5>{precio}</h5>
                <p className="descripcion"> {descripcion}</p>
            </div>
            
            <Link to={`/detalle/${id}`}>
            <div className='item-button-area'><button className='item-button'>ver detalle..</button></div>
            </Link>
            
        </div>
   
  )
}

export default Item