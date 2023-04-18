import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import NavbarItemsComponent from './NavbarItemsComponent/NavbarItemsComponent'
import './Navbar.css'
import Logo from'./z-logo-inicio.png'


const Navbar = (props) => {
  // nombres de titulos en navbar
  const nameOptions = ["Agua","Tierra","Fuego"];

  return (
    <div className='Navbar'>
      <li>
        <img className='LogoInicio' src= {Logo} alt="logo"/>
      </li>
      <NavbarItemsComponent nameOption={nameOptions}/>

      <Cartwidget/>

    </div>
  )
}

export default Navbar