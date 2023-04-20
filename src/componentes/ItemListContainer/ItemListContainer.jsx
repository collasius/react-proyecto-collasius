import React , {Fragment, useState, useEffect} from 'react'
import './ItemListContainer.css'
import ItemComponent from '../ItemComponent/ItemComponent'
import useFetch from '../../utils/useFetch'
const BASE_URL ="https://jsonplaceholder.typicode.com/albums/1/photos"


const ItemListContainer = (props) => {

  const [count, setCount] = useState(0);
  const {data,loading} = useFetch(BASE_URL);

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

export default ItemListContainer