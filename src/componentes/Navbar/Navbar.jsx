import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import NavbarItemsComponent from './NavbarItemsComponent/NavbarItemsComponent'
import './Navbar.css'
import Logo from'./z-logo-inicio.png'


const Navbar = () => {
  // nombres de titulos en navbar
  const nameOptions = ["Agua","Tierra","Fuego"];

  return (
    <div className='Navbar'>
        <img className='LogoInicio' src= {Logo} alt="logo"/>
      <NavbarItemsComponent nameOption={nameOptions}/>

      <Cartwidget/>

    </div>
  )
}

export default Navbar