import React , {Fragment, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const ItemComponent = (props) => {

    const {data,handlerUpdate} = props;
    const { id: idProduct, title, image, description, price, stock, category } = data;
    const [_stock, _setStock] = useState(stock || 0);

    const handlerActionAdd = () => {
      if (_stock > 0) {
        _setStock(_stock - 1);
        handlerUpdate();
      }
    };
  
    const showShortValue = (value = "", lengthMax = 45) => {
      return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
    };

  return (
    <Fragment>
        <p>{showShortValue(title)}</p>
        <img src={image} alt=""/>
        <p>{showShortValue(description)}</p>
        <NavLink to={`/products/detail/${idProduct}`}>
            <button onClick={handlerActionAdd}>
                + info
            </button>
        </NavLink>
        <p>${price}</p>
        <p>{category}</p>
        <button onClick={handlerActionAdd}>Agregar</button>
    </Fragment>
)}

export default ItemComponent