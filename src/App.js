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

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes className="seccion">

        <Route path={routes.index} element={<VistaDeProductos/>}/>
        <Route path="/products/detail/:idProduct" element={<DetalleDeProductos/>}/>
        <Route path={routes.RopaParaHombres} element={<RopaParaHombres/>}/>
        <Route path={routes.RopaParaMujeres} element={<RopaParaMujeres/>}/>
        <Route path={routes.Joyeria} element={<Joyeria/>}/>
        <Route path={routes.Electronica} element={<Electronica/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
