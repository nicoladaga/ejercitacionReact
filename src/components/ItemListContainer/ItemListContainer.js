import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import data from './mock-data'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([]);
  const {segmentoId} = useParams();
  const getData = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(data);
    }, 2000)

  })

  useEffect(() => {
    getData.then((result) => {

      if(segmentoId){
        const listaProductos = result.filter(item => item.segmento === segmentoId)
        setItems(listaProductos)
      }else{
        setItems(result)
      }
      
    })
  }, [segmentoId])

  return (
    <>
      <h2>{greeting}</h2>
      <div className="itemlist">
        <ItemList itemList={items} />
      </div>
    </>


  )
}

export default ItemListContainer
