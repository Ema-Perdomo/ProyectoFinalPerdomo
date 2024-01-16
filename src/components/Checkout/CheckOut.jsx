import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

export const CheckOut = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [confEmail, setConfEmail] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const { cart, totalPrice, removeProduct } = useCartContext();

    const manejadorFormulario = (event) => {
        event.preventDefault();
    }
    if (!nombre || !apellido || !telefono || !email || !confEmail) {
        setError('Por favor complete todos los campos.');
        return;
    }

    if (email !== confEmail) {
        setError('Los email no coinciden.')
        return;
    }


    const total = totalPrice();
    const orden = {
        items: cart.map((producto) => ({
            id: producto.id,
            nombre: producto.nombre,
            cantidad: producto.quantity
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
    };

    Promise.all(
        orden.items.map(async (productoOrden) => {
            const db = getFirestore();
            const productoRef = doc(db, 'item', productoOrden.id); 

            const productoDoc = await getDoc(productoRef);
            const stockActual = productoDoc.data().stock;
            await updateDoc( productoRef, {
                stock: stockActual - productoOrden.cantidad,
            }),
    })
    )
    .then(()=> {
        

    })



    return (
        <div>
            <h2>Complete los datos para confirmar la compra:</h2>
            <form >

                <div>
                    <label className='lab-check'>Nombre</label>
                    <input className='input-check' type="text" value={nombre} onChange={(evento) => setNombre(evento.target.value)}
                    />
                </div>
                <div>
                    <label className='lab-check'>Apellido</label>
                    <input className='input-check' type="text" value={apellido} onChange={(evento) => setApellido(evento.target.value)}
                    />
                </div>
                <div>
                    <label className='lab-check'>Telefono</label>
                    <input className='input-check' type="number" value={telefono} onChange={(evento) => setTelefono(evento.target.value)}
                    />
                </div>
                <div>
                    <label className='lab-check'>Email</label>
                    <input className='input-check' type="email" value={email} onChange={(evento) => setEmail(evento.target.value)}
                    />
                </div>
                <div>
                    <label className='lab-check'>Confirme su email</label>
                    <input className='input-check' type="email" value={confEmail} onChange={(evento) => setConfEmail(evento.target.value)}
                    />
                </div>

                {error && <p>{error}</p>}
                {ordenId && (
                    <p>Gracias por tu compra. El num. de seguimiento es: <br> {ordenId} </br></p>
                )}
                <div>
                    <button type="submit">ENVIAR</button>
                </div>

            </form>
        </div>
    )
}

export default CheckOut