import data from '../ItemListContainer/mock-data'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'

const ItemDetailContainer = () => {
  
    const [item, setItem] = useState([]);
  
    const getItem = new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve(data);
        }, 2000)

    })

    useEffect(()=> {
        getItem.then((listaDeItems) => {
           
            setItem(listaDeItems[0])

        })
    }, [])

    return (
    <>
        <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer