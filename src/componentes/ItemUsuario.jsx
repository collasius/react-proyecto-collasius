
import React, {memo,useEffect} from 'react'

const ItemUsuario = ({usuario}) => {
    useEffect(() => {
        console.log("render", usuario.name);
    });

    return (
        <li>{usuario.name}</li>
    )
}

export default memo(ItemUsuario)