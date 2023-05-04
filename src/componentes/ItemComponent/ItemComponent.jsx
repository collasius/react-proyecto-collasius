import "./ItemComponent.css"
import React, { Fragment, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GeneralContext from "../../context/GeneralContext";

const ItemComponent = (props) => {
  const { data } = props;
  const { id: idProduct, title, image, description, price, stock } = data;
  const [_stock, _setStock] = useState(stock || 10);
  const { addToCar, removeToCar } = useContext(GeneralContext);

  const handlerActionAdd = () => {
    if (_stock > 0) {
      _setStock(_stock - 1);
      addToCar(data);
    }else{
        alert("Sin stock suficiente")
      }
    };
  
    const showShortValue = (value = "", lengthMax = 45) => {
      return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
    };

    const removerItem = () => {
      removeToCar(data);
    }

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
          <button className="btnAgregar" onClick={removerItem}>Remover</button>
        </div>
      </div>

    </Fragment>
)}

export default ItemComponent