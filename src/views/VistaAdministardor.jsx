import "./VistaAdministardor.css"
import ItemListAdministrador from '../componentes/ItemListAdministrador/ItemListAdministrador'
import React , {useMemo, useState} from 'react'
import useFirestore from "../utils/useFirestore";
import { useParams } from 'react-router-dom';

const nameCollection ="orders";


const VistaAdministardor = (props) => {
    const { category } = useParams();
  
    const options = useMemo(() => {
      const _optionwithFilters =  { nameCollection, filters: { where: ["category", "==", category] } };
      const _optionWithOutFilters = { nameCollection };
      return category ?_optionwithFilters : _optionWithOutFilters ;
    }, [category]);
  
    const [data, loading] = useFirestore(options);

  return (
    <div className='SeccionAdministrador'>
        <p className="titulolistadoordenes">Listado de Ordenes:</p>
        <div className="itemListAdm">
            {loading? (<h1>Cargando...</h1>) : (data.map((item,index) => {
        return <ItemListAdministrador key={index} data={item}/>;}))
        }
        </div>
    </div>

  )
}

export default VistaAdministardor
  