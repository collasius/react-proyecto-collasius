import React, { useState } from 'react'
import InputComponent from '../componentes/Navbar/InputComponent';

const ItemFormView = () => {
    const [data,setData] = useState({
        title: "soy un titulo",
        descripcion:"soy la descripcion",
    });

    const Cambiador = (evento) =>{
        const title = evento.target.value;
        setData({...data,title});
    };


    const Cambiador2 = (evento) =>{
        const descripcion = evento.target.value;
        setData({...data,descripcion});
    };

    const manejadorDeTecla = (evento) =>{
        console.log("soy tecla",evento.keyCode)
        if(evento.key === "a"){
            evento.preventDefault();
        }
    }
    


  return (
    <React.Fragment>
        <form>
            <div>
                <InputComponent
                data={data.title}
                manejadorDeTecla ={manejadorDeTecla}
                Cambiador={Cambiador}
                ></InputComponent>
            </div>
            <div>
                <div>
                    <label htmlFor=''>Descripcion: </label>
                    <input type='text' value={data.descripcion} onChange={Cambiador2}/>
                </div>
            </div>
        </form>
        <div>
            <div>
                <button>Registrar</button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ItemFormView