import React , {Fragment, useState} from 'react'

const ItemComponent = (props) => {

    const {data,handlerUpdate} = props;
    const {titulo,urlImage,descripcion,precio} = data;
    const [stock, setStock] = useState(10);

    const handlerActionAdd = () => {
        if(stock > 0){
            setStock(stock-1);
            handlerUpdate();
        }else{
            alert("no")
        }
    }

  return (
    <Fragment>
        <p>{titulo}</p>
        <img src={urlImage} alt=""/>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <p>{stock}</p>
        <button onClick={handlerActionAdd}>Agregar</button>
    </Fragment>
)}

export default ItemComponent