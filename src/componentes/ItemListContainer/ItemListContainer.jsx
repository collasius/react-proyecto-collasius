import React , {Fragment, useState} from 'react'
import './ItemListContainer.css'
import ItemComponent from '../ItemComponent/ItemComponent'

const ItemListContainer = () => {

  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount (count +1);
  }

  return (

    <Fragment>
      <div className='Contenido'>
        <h1>Total: {count}</h1>
        <ItemComponent titulo = "Remera" descripcion="Color Negro" precio={2500} handlerUpdate={updateCount}/>
        <ItemComponent titulo = "Pantalon" descripcion="Color Negro" precio={4500} handlerUpdate={updateCount}/>
        <ItemComponent titulo = "Medias" descripcion="Color Negro" precio={500} handlerUpdate={updateCount}/>
        <ItemComponent titulo = "Boxer" descripcion="Color Negro" precio={1500} handlerUpdate={updateCount}/>
      </div>
    </Fragment>
  )
}

export default ItemListContainer