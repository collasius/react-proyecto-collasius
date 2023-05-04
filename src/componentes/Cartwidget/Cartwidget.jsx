import React, {useContext } from 'react';
import './Cartwidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import GeneralContext from "../../context/GeneralContext"
import { routes } from '../../routes'
import { NavLink } from 'react-router-dom'



const Cartwidget = () => {
  const { car } = useContext(GeneralContext);

  return (
    <NavLink to={routes.Carrito}>
      <div className='Carrito'>
      <FontAwesomeIcon className='CarritoIcono' icon={faCartShopping}/>
      <div className='Contador'>{car.length}</div>
    </div>
  </NavLink>
  )
}

export default Cartwidget