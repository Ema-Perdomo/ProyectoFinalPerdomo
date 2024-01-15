import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import arrayProductos from '../Json/arrayProductos.json'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
  
  const [item, setItem] = useState([])
  //Usa id para enrutamiento y filtrado
  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const data = await new Promise((resolve)=>{
          setTimeout(()=>{
            //if ternario filtra segun categoria del json arrayProductos
            resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
          }, 2000);
        });
        //Renderizo los items en pantalla
        setItem(data);
    }catch(error){
      console.log('Error', error);
    }
  };
  fetchData();
  }, [id]) //id indica cuantas veces se ejecuta la logica dentro del componente
  
  return (
    <div>
      <h3 className='d-flex justify-content-center mt-2'>{greeting}</h3>
      <div>
        <ItemList item={item}/>
      </div>      
      <hr />
    </div>
  )
}

export default ItemListContainer
