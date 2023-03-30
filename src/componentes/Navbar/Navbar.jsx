import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import Items from './Items/Items'
import './Navbar.css'
import Logo from'./z-logo-inicio.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul>
        <li>
          <a href="">
            <img className='LogoInicio' src= {Logo} alt="logo"/>
          </a>
        </li>
        <Items titulo="Categorias"/>
        <Items titulo="Productos"/>
        <Items titulo="Servicios"/>
      </ul>

      <Cartwidget/>

    </div>
  )
}

export default Navbar