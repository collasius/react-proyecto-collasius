import React , {Fragment, useState, useEffect} from 'react'
import '../componentes/ItemListContainer/ItemListContainer'
import ItemComponent from '../componentes/ItemComponent/ItemComponent'
import useFetch from '../utils/useFetch'
const BASE_URL ="https://fakestoreapi.com/products"


const VistaDeProductos = (props) => {

  const [count, setCount] = useState(0);
  const [data,loading] = useFetch(BASE_URL);

  const updateCount = () => {
    setCount (count +1);
  }

  return (

    <Fragment>
      <div className='Contenido'>
        <h1>Total: {count}</h1>
        {loading? (<h1>Cargando...</h1>) : (data.map((item,index) => {
      return <ItemComponent key={index} data={item} handlerUpdate={updateCount} />;}))
      }
      </div>
    </Fragment>
  )
}

export default VistaDeProductos