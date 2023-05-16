import React from 'react'
import "./FooterComponent.css"
import { NavLink } from 'react-router-dom'

const FooterComponent = () => {
  return (
    <div className='Footer'>
        <NavLink className="customLink" to="/administrador">
            <span className='administrador'>Acceso Administrador</span>
        </NavLink>
    </div>
  )
}

export default FooterComponent