import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import data from './mock-data'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([]);

  const getData = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(data);
    }, 2000)

  })

  useEffect(() => {
    getData.then((result) => {
      setItems(result)
    })
  }, [])

  return (
    <>
      <h2>{greeting}</h2>
      <ItemCount stock={5} initial={0} onAdd={1}/>
      <div className="itemlist">
        <ItemList itemList={items} />
      </div>
    </>


  )
}

export default ItemListContainer
