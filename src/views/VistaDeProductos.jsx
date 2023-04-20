import './VistaDeProductos.css'
import React , {Fragment, useState} from 'react'
import ItemComponent from '../componentes/ItemComponent/ItemComponent'
import useFetch from '../utils/useFetch'
const BASE_URL ="https://fakestoreapi.com/products"



const VistaDeProductos = (props) => {

  const [count, setCount] = useState(0);
  const [data,loading] = useFetch(BASE_URL);

  const handleUpdateCount = () => {
    setCount(count + 1);
  };

  return (

    <Fragment>
      <div className='Contenido'>
        {loading? (<h1>Cargando...</h1>) : (data.map((item,index) => {
      return <ItemComponent key={index} data={item} handlerUpdate={handleUpdateCount} />;}))
      }
      </div>
    </Fragment>
  )
}

export default VistaDeProductos