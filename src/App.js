import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import VistaDeProductos from './views/VistaDeProductos';
import DetalleDeProductos from './views/DetalleDeProductos';
import RopaParaHombres from './views/RopaParaHombres';
import RopaParaMujeres from './views/RopaParaMujeres'
import Joyeria from './views/Joyeria'
import Electronica from './views/Electronica'
import {routes} from "./routes";
import GeneralContext from "./context/GeneralContext";
import ItemFormView from './views/ItemFormView';
import DetalleDeCarrito from './views/DetalleDeCarrito';

function App() {
  const [car, setCar] = useState([]);

  const addToCar = (item) => {
    setCar([...car,item]);
  };

  const removeToCar = (item) => {
    const newArray = car.filter(_item => _item.id !== item.id);
    setCar(newArray)
  };


  return (
  <GeneralContext.Provider value={{addToCar, car, removeToCar}}>
    <BrowserRouter>
      <Navbar />

      <Routes className="seccion">

        <Route path={routes.index} element={<VistaDeProductos/>}/>
        <Route path="/products/detail/:idProduct" element={<DetalleDeProductos/>}/>
        <Route path={routes.RopaParaHombres} element={<RopaParaHombres/>}/>
        <Route path={routes.RopaParaMujeres} element={<RopaParaMujeres/>}/>
        <Route path={routes.Joyeria} element={<Joyeria/>}/>
        <Route path={routes.Electronica} element={<Electronica/>}/>

        <Route path='/eventos'element={<ItemFormView/>}></Route>
        <Route path={routes.Carrito}element={<DetalleDeCarrito/>}></Route>
      </Routes>
    </BrowserRouter>
  </GeneralContext.Provider>

  );
}

export default App;
