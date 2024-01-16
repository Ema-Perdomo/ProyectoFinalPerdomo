import React from 'react';
import { useCartContext } from '../context/CartContext';



const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={item.imagen} alt={item.nombre} />
            <div>
                <p>Título: {item.nombre}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio por unidad: {item.precio}</p>
                <p>Subtotal: U$D {item.cantidad * item.precio}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default ItemCart;