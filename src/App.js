import './App.css';
import { Fragment } from 'react'
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
  return (
    <Fragment>

      <Navbar/>

      <ItemListContainer/>

    </Fragment>
  );
}

export default App;
