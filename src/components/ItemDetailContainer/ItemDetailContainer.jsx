import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import arrayProductos from '../Json/arrayProductos.json'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    //Usa id para enrutamiento y filtrado
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(arrayProductos.find(item=>item.id === parseInt(id))) //Si es txt lo pasa a int
            }, 1500)
        });
        promesa.then((data)=>{
            setItem(data)
        })
    }, [id]) //id indica cuantas veces se ejecutas la logica dentro del componente

    return (
        <div>
            <div>
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer
