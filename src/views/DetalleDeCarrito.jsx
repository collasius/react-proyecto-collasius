import React, { Fragment, useContext } from 'react'
import './DetalleDeCarrito.css'
import GeneralContext from '../context/GeneralContext'
import ItemComponent from '../componentes/ItemComponent/ItemComponent';
import BuyComponent from '../componentes/BuyComponent/BuyComponent';

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

  return (
    <Fragment>
      <div className='seccionCarrito'>
        <div className='contenedorCarrito'>
          {car.length === 0 ? (
            <h2>Carrito Vacio</h2>
          ) : (
            <>
            <div className='contenedorItemsCarrito'>
              <div className='contenedorItemsCarritoProductos'>
              {productosConCantidad.map((producto, index) => (
                  <ItemComponent
                    mostrarBtnRemover={true}
                    mostrarBtnAgregar={false}
                    mostrarStock={false}
                    key={index}
                    data={producto}
                  />
                ))}
              </div>
              <div className='resumenContenedor'>
                  <BuyComponent></BuyComponent>
              </div>
            </div>
            </>
            
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default DetalleDeCarrito
