import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {productId} = useParams();
    
    useEffect(()=> {
        const getItem = new Promise((resolve, reject)=>{

            const query = doc(db,"productos",productId)
            const data = getDoc(query)
            resolve(data);
            

        })

    
        getItem.then((result) => {
            
            const elegido = {
                ...result.data(),
                id: result.id
            }
            
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