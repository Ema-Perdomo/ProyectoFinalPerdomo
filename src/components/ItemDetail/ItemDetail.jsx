import React from 'react'

//Descripcion clickeable del producto

//OPCIONAL poner contador con boton
const ItemDetail = ({item}) => {
  return (
    <div className='row'>
      <div className='col-md-4 iifset-md-4'>
        
        <h3>{item.nombre}</h3>
        <img src={item.imagen} className='card-img' alt={item.nombre} />
        <p>{item.descripcion}</p>
        <p>$ {item.precio}</p>
        <p>Cantidad disponible: {item.stock}</p>
      </div>
    </div>
  )
}

export default ItemDetail
