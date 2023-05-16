import './NavbarItems.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItems = (props) => {
  const { titleOption } = props;
  return (
    <NavLink className="NavLink-custom link-link span-link "  to={`/category/${titleOption}`}>
      {titleOption}
    </NavLink>
  )
}

export default NavbarItems