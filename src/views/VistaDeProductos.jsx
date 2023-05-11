import './VistaDeProductos.css'
import React , {Fragment, useState} from 'react'
import ItemComponent from '../componentes/ItemComponent/ItemComponent'
import useFirestore from "../utils/useFirestore";

const nameCollection ="items";



const VistaDeProductos = (props) => {

  const [count, setCount] = useState(0);
  const [data,loading] = useFirestore({nameCollection})

  const handleUpdateCount = () => {
    setCount(count + 1);
  };

  return (

    <Fragment>
      <div className='Contenido'>
        {loading? (<h1>Cargando...</h1>) : (data.map((item,index) => {
      return <ItemComponent mostrarBtnRemover={false} mostrarBtnAgregar={true} key={index} data={item} handlerUpdate={handleUpdateCount} />;}))
      }
      </div>
    </Fragment>
  )
}

export default VistaDeProductos
  