import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import NavbarItemsComponent from './NavbarItemsComponent/NavbarItemsComponent'
import './Navbar.css'
import Logo from'./z-logo-inicio.png'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes'


const Navbar = () => {
  // nombres de titulos en navbar
  const nameOptions = ["Agua","Tierra","Fuego"];

  return (
    <div className='Navbar'>
      <NavLink to={routes.index}>
        <img className='LogoInicio' src= {Logo} alt="logo"/>
      </NavLink>

      <NavbarItemsComponent nameOption={nameOptions}/>

      <Cartwidget/>

    </div>
  )
}

export default Navbar