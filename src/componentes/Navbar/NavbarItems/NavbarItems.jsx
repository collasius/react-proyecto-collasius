import './NavbarItems.css'
import React from 'react'

const NavbarItems = ({titulo}) => {

  return (
    <li className='items'> 
      <span >{titulo}</span>
    </li>
  )
}

export default NavbarItems