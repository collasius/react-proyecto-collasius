import React, { useState, useContext } from 'react';
import './Cartwidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import GeneralContext from "../../context/GeneralContext"



const Cartwidget = () => {
  const { counter } = useContext(GeneralContext);

  return (
    <div className='Carrito'>
      <FontAwesomeIcon className='CarritoIcono' icon={faCartShopping}/>
      <div className='Contador'>{counter}</div>
    </div>
  )
}

export default Cartwidget