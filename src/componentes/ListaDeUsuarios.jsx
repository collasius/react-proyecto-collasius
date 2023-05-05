import React, {memo,useEffect} from 'react'
import ItemUsuario from "./ItemUsuario";

const ListaDeUsuarios = ({usuarios}) => {
    useEffect(() => {
        console.log("render")
    })

    return (
        <ul>
            {usuarios.map((usuario,index) => (
                <ItemUsuario key={index} usuario={usuario}/>
            ))}
        </ul>
    )
}

export default memo(ListaDeUsuarios)