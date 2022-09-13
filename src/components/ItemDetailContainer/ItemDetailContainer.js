import data from '../ItemListContainer/mock-data'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {productId} = useParams();
    
  
    const getItem = new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve(data);
        }, 2000)

    })

    useEffect(()=> {
        getItem.then((listaDeItems) => {
           
            const elegido = listaDeItems.find(producto => producto.id === productId);
            setItem(elegido)

        })
    }, [productId])

    return (
    <>
        <div className='ItemDetail'>
            <ItemDetail item={item} />
        </div>
        
    </>
  )
}

export default ItemDetailContainer