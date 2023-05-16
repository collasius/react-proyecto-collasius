import React, { useMemo} from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import NavbarItems from './NavbarItems/NavbarItems'
import './Navbar.css'
import Logo from'./z-logo-inicio.png'
import { NavLink } from 'react-router-dom'
import useFirestore from '../../utils/useFirestore'
import NavbarItemsComponent from './NavbarItemsComponent/NavbarItemsComponent'
const nameCollection = "categorias";



const Navbar = () => {
  // nombres de titulos en navbar
  const [data] = useFirestore({ nameCollection });

  const dataProcess = useMemo(() => {
    const categoriesObject = data.length !== 0 ? data[0] : [];
    return "category" in categoriesObject ? categoriesObject.category : [];
  }, [data]);


  
  return (
    <div className='Navbar'>
      <NavLink to="/">
        <img className='LogoInicio' src= {Logo} alt="logo"/>
      </NavLink>

      <ul className='items-Navbar'>
          <NavbarItemsComponent nameOption={dataProcess}></NavbarItemsComponent>
      </ul>

      <Cartwidget/>

    </div>
  )
}

export default Navbar
