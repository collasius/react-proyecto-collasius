import React, { Fragment, useContext } from 'react'
import './DetalleDeCarrito.css'
import GeneralContext from '../context/GeneralContext'
import ItemComponent from '../componentes/ItemComponent/ItemComponent';

const DetalleDeCarrito = () => {
  const { car } = useContext(GeneralContext);

  // Cuenta la cantidad de productos iguales en el carrito y calcula el precio total por producto
  const contarProductos = (productos, producto) => {
    const index = productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      productos[index].cantidad += 1;
      productos[index].precioTotal = productos[index].cantidad * productos[index].price;
    } else {
      productos.push({ ...producto, cantidad: 1, precioTotal: producto.price });
    }
    return productos;
  }

  const productosConCantidad = car.reduce(contarProductos, []);

  // Calcula el precio total del carrito sumando el precio total por producto
  const precioTotalCarrito = productosConCantidad.reduce((total, producto) => total + producto.precioTotal, 0);

  return (
    <Fragment>
      <div className='seccionCarrito'>
        <h2>Detalle del Carrito:</h2>
        <div className='contenedorCarrito'>
          {car.length === 0 ? (
            <h2>Carrito Vacio</h2>
          ) : (
            <>
              {productosConCantidad.map((producto, index) => (
                <ItemComponent
                  mostrarBtnRemover={true}
                  mostrarBtnAgregar={false}
                  key={index}
                  data={producto}
                />
              ))}
              <div className="resumenCarrito">
                <p>Precio total del carrito: ${precioTotalCarrito}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default DetalleDeCarrito
