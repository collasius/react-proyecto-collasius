import React , {Fragment, useState, useEffect} from 'react'
import './ItemListContainer.css'
import ItemComponent from '../ItemComponent/ItemComponent'

const ItemListContainer = () => {

  const [count, setCount] = useState(0);
  const [items,setItems] = useState([]);

  useEffect(() => {

      new Promise((resolve, reject) => {
      setTimeout (() => {
        resolve([
          {
          titulo:"Camiseta",
          descripcion: "Negra",
          precio:2500
        },
        {
          titulo:"Pantalon",
          descripcion: "Negra",
          precio:5000
        },
        {
          titulo:"Medias",
          descripcion: "Negra",
          precio:500
        },
      ]);
      }, 3000);
    })
      .then((result) => {
        setItems(result);
      })
      .catch((error) => {
        console.log("ups algo fallo");
      });

    },[]);

  const updateCount = () => {
    setCount (count +1);
  }

  return (

    <Fragment>
      <div className='Contenido'>
        <h1>Total: {count}</h1>
        {items.length === 0? (<h1>Cargando...</h1>) : (items.map((item,index) => {
          return <ItemComponent key={index} data={item} handlerUpdate={updateCount} />;}))
      }
      </div>
    </Fragment>
  )
}

export default ItemListContainer