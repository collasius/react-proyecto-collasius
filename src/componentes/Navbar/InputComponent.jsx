import React from 'react'

const InputComponent = (props) => {
    const {manejadorDeTecla,value,Cambiador} = props;

  return (
    <div>
        <label htmlFor=''>Titulo: </label>
        <input type='text' value={value} onKeyDown={manejadorDeTecla} onChange={Cambiador}/>
    </div>
  )
}

export default InputComponent