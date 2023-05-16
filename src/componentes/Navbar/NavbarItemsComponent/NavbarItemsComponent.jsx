import React from 'react'
import NavbarItems from '../NavbarItems/NavbarItems'
import './NavbarItemsComponent.css'


const NavbarItemsComponent = (props) => {

    const {nameOption} = props;

  return (
    <ul >
        {nameOption.map((item,index) => {
          return(<NavbarItems key={index} titleOption = {item} />)
        })}
    </ul>
  )
}

export default NavbarItemsComponent