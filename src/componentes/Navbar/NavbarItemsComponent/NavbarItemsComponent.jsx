import React from 'react'
import NavbarItems from '../NavbarItems/NavbarItems'
import './NavbarItemsComponent.css'


const NavbarItemsComponent = (props) => {

    const {nameOption} = props;

  return (
    <ul >
        {nameOption.map((nameItem,index) => {
          return(<NavbarItems key={index} titulo = {nameItem} />)
        })}
    </ul>
  )
}

export default NavbarItemsComponent