import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import VistaDeProductos from './views/VistaDeProductos';
import AcercaDe from './views/AcercaDe';
import DetalleDeProductos from './views/DetalleDeProductos';
import {routes} from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes className="seccion">

        <Route path={routes.index} element={<VistaDeProductos/>}/>
        <Route path={routes.AcercaDe} element={<AcercaDe/>}/>
        <Route path="/products/detail/:idProduct" element={<DetalleDeProductos/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
