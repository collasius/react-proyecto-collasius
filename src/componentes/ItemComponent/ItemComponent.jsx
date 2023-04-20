import "./ItemComponent.css"
import React , {Fragment, useState} from 'react'
import { NavLink } from 'react-router-dom';

const ItemComponent = (props) => {

    const {data,handlerUpdate} = props;
    const { id: idProduct, title, image, description, price, stock, category } = data;
    const [_stock, _setStock] = useState(stock || 10);

    const handlerActionAdd = () => {
      if (_stock > 0) {
        _setStock(_stock - 1);
        handlerUpdate();
      }else{
        alert("Sin stock suficiente")
      }
    };
  
    const showShortValue = (value = "", lengthMax = 45) => {
      return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
    };

  return (
    <Fragment>
      <div className="cardProducto">
      <NavLink className="NavLink-custom" to={`/products/detail/${idProduct}`}>
        <div>
          <p className="titulo">{showShortValue(title)}</p>
        </div>
      </NavLink>
        <img className='imgProducto' src={image} alt={title}/>
        <div className="subCardProducto">
          <p className="precio">${price}</p>
          <p className="descripcion" >{showShortValue(description) }
            <NavLink to={`/products/detail/${idProduct}`}>
                <button className="btnInfo" onClick={handlerActionAdd}>
                    + info
                </button>
            </NavLink>
          </p>
          <button className="btnAgregar" onClick={handlerActionAdd}>Agregar al carrito</button>
        </div>
      </div>

    </Fragment>
)}

export default ItemComponent