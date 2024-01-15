//contador (Componentes II)
import {useState} from 'react'

const Cont = () => {
    const [ItemCount, setItemCount] = useState(0)

    console.log(`El contador va por: ${ItemCount}`);
    console.log(`El contador se renderizo`);

    return (
        <div>
            <button onClick={()=>setItemCount (ItemCount +1)}>  +</button>
            <h3>{ItemCount}</h3>
            <button onClick={()=>setItemCount (ItemCount -1)}>  -</button>
            <h3>{ItemCount}</h3>
            <button>Agregar al carrito</button>
        </div>
    )
    
}

export default Cont