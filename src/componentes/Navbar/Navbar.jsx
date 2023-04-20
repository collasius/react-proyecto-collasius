import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import NavbarItems from './NavbarItems/NavbarItems'
import './Navbar.css'
import Logo from'./z-logo-inicio.png'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes'


const Navbar = () => {
  // nombres de titulos en navbar
  const nameOptions = [
    { titulo: "Inicio", ruta: `${routes.index}` },
    { titulo: "Ropa Hombres", ruta: `${routes.RopaParaHombres}` },
    { titulo: "Ropa Mujeres", ruta: `${routes.RopaParaMujeres}` },
    { titulo: "Electronica", ruta: `${routes.Electronica}` },
    { titulo: "Joyeria", ruta: `${routes.Joyeria}` }
  ];
  
  return (
    <div className='Navbar'>
      <NavLink to={routes.index}>
        <img className='LogoInicio' src= {Logo} alt="logo"/>
      </NavLink>

      <ul className='items-Navbar'>
        {nameOptions.map((option) => (
          <NavbarItems key={option.titulo} titulo={option.titulo} ruta={option.ruta} />
        ))}
      </ul>

      <Cartwidget/>

    </div>
  )
}

export default Navbar
