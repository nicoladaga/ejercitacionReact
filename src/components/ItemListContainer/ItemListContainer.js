import { useState, useEffect } from 'react'
//import './ItemListContainer.css'
import '../../css/estilo.css'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import {db} from "../../utils/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([]);
  const {segmentoId} = useParams();
  
  
  
  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      let queryRef;
      if(segmentoId){
        queryRef = query(collection(db,"productos"), where("segmento", "==", segmentoId))
      }else{
        queryRef = collection(db, "productos")
      }
      
      const data = getDocs(queryRef)
      resolve(data)

    })

    getData.then((result) => {
      
      const productos = result.docs.map(doc =>{

        const newProduct = {
          ...doc.data(),
          id: doc.id
        }
        return newProduct
      })

      setItems(productos)
     
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
