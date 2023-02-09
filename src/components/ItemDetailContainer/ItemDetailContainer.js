import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
//import './ItemDetailContainer.css'
import '../../css/estilo.css'
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore"
import Item from '../Item/Item'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [buscado, setBuscado] = useState(false);
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
            setBuscado(true);
            
        })
    }, [productId])


    if(item.nombre){
        return (
            <>
                <div className='ItemDetail'>
                    <ItemDetail item={item} />
                </div>
                
            </>
          )
    }else if (buscado){
        return(<h3>no se encontró el item elegido</h3>)
        
    } else{
        return(
        <h4>Cargando...</h4>
        )
    }
    
}

export default ItemDetailContainer