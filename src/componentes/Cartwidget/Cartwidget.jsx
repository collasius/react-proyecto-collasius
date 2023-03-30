import React, { useState } from 'react';
import './Cartwidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';



const Cartwidget = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  }

  return (
    <div className='Carrito'>
      <FontAwesomeIcon className='CarritoIcono' icon={faCartShopping}/>
      <div className='Contador'>{contador}</div>
    </div>
  )
}

export default Cartwidget