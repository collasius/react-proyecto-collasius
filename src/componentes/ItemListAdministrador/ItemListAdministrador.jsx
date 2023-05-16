import React, { useState, useContext } from 'react';
import "./ItemListAdministrador.css"

const ItemListAdministrador = (props) => {
    const {data} = props
    const { id, total, date, items} = data;
    console.log(data.items)

  return (
    <div className='ItemsListados'>
        <div className='ItemsListados2'>
            <div>Numero de pedido: {id}</div>
            <div>Fecha de Compra: {date}</div>
            <div>Total de Compra: ${total}</div>
        </div>
        <div>
            <p>Detalle del pedido:</p>
            <div className='detallelistadoordenes'>
                {items.map((item,key) => (
                    <div key={key} className='ItemsListados3'>
                        <div>Producto: {item.item.title}</div>
                        <div>Categoria: {item.item.category}</div>
                        <div>Precio: ${item.item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ItemListAdministrador