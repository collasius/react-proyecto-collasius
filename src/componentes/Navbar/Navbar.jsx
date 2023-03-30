import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import Items from './Items/Items'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="">
            <img src='/z-logo-inicio.png' alt="logo"/>
          </a>
        </li>
        <Items titulo="Inicio"/>
        <Items titulo="Productos"/>
        <Items titulo="Servicios"/>
      </ul>

      <Cartwidget/>

    </div>
  )
}

export default Navbar