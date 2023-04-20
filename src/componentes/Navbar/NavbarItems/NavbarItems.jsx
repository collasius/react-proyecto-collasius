import './NavbarItems.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItems = (props) => {

  return (
    <NavLink className="NavLink-custom" to={props.ruta}>
    <li className='items'> 
        <span >{props.titulo}</span>
    </li>
    </NavLink>
  )
}

export default NavbarItems