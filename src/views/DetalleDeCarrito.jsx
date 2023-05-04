import React, { Fragment, useContext } from 'react'
import './DetalleDeCarrito.css'
import GeneralContext from '../context/GeneralContext'
import ItemComponent from '../componentes/ItemComponent/ItemComponent';

const DetalleDeCarrito = () => {
    const {car} = useContext(GeneralContext);
  return (
    <Fragment>
        <div className='seccionCarrito'>

        <h2>Detalle del Carrito:</h2>
        <div className='contenedorCarrito'>
        {car.map((item,index) => (
            <ItemComponent key={index}data={item}/>
        ))}
        </div>
    </div>
    </Fragment>


  )
}

export default DetalleDeCarrito