import './VistaDeProductos.css'
import React , {Fragment, useMemo, useState} from 'react'
import ItemComponent from '../componentes/ItemComponent/ItemComponent'
import useFirestore from "../utils/useFirestore";
import { useParams } from 'react-router-dom';

const nameCollection ="items";


const VistaDeProductos = (props) => {
    const { category } = useParams();
  
    const options = useMemo(() => {
      const _optionwithFilters =  { nameCollection, filters: { where: ["category", "==", category] } };
      const _optionWithOutFilters = { nameCollection };
      return category ?_optionwithFilters : _optionWithOutFilters ;
    }, [category]);
  
    const [data, loading] = useFirestore(options);
  
  const [count, setCount] = useState(0);

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
  