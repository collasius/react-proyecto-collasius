import './DetalleDeProductos.css'
import React, {Fragment} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'

const BASE_URL ="https://fakestoreapi.com/products"

const DetalleDeProductos = () => {
    const { idProduct } = useParams();
    const navigator = useNavigate();
  
    const [data] = useFetch(`${BASE_URL}/${idProduct}`);

    const addBtnAction = () => {
        navigator("/")
    }
  
    const { title, image, description, price, category } = data;

  return (
    <Fragment>
        <div className='seccionDetalle'>
                <div className='cardDetalle'>
                    <div className='contenedorImg'>
                        <img className='imagenDetalle' src={image} alt=""/>
                        <div className='categoriaDetalle'>{category}</div>
                    </div>
                    <div className='detalles-1'>
                        <p className='tituloDetalle'>{title}</p>
                        <p className='descripcionDetalle'>{description}</p>
                        <div className='precio-btn'>
                            <p className='precioDetalle'>Precio: ${price}</p>
                            <button className='btn-detalle-comprar' onClick={addBtnAction} >Comprar</button>
                        </div>
                    </div>
                </div>
        </div>

    </Fragment>
  )
}

export default DetalleDeProductos