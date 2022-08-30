import {useState} from 'react'
import './ItemListContainer.css'


const ItemListContainer = ({stock, initial, onAdd}) => {
  const [valorInicial, setValorInicial] = useState(initial);
  const [stockDisponible, setStockDisponible] = useState(stock);
  
  const quitarArticulo= () =>{
    if( (valorInicial - onAdd) >= 0 ){
      setValorInicial( valorInicial - onAdd);
      setStockDisponible( stockDisponible + onAdd);
    } else{
      alert("No puede quitar más artículos")
    }
  }

  const agregarArticulo = () => {
    if((stockDisponible - onAdd) >= 0 ){
      setValorInicial( valorInicial + onAdd);
      setStockDisponible( stockDisponible - onAdd);
    } else{
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

export default ItemListContainer
 