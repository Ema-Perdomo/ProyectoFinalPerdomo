import React from "react"
import { Link } from 'react-router-dom' 


//Card Producto
const Item = ({item}) => {
    return (
        
        <Link to={'/item/' + item.id} className='' > 
            <div className='container'>
                <img src={item.imagen} className='card-img-top' alt={item.nombre} />
                <div className='card-body text-center'>
                    <p children='card-text'>{item.nombre}</p>
                </div>
            </div>
        </Link>
)
};

export default Item
