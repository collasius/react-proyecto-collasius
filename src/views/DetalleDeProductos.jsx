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
        <div>
            <div>{title}</div>
            <div>
                <img src={image} alt=""/>
            </div>
            <div>{description}</div>
            <div>{category}</div>
            <div>{price}</div>
            <button onClick={addBtnAction} >Comprar</button>
        </div>
    </Fragment>
  )
}

export default DetalleDeProductos