import React, { useEffect, useState, useMemo, useCallback} from 'react'
import ListaDeUsuarios from "../componentes/ListaDeUsuarios"
import './ItemFormView.css'

const estadoInicial = [
    {id: 1, name:"Pablo"},
    {id: 1, name:"Collasius"}
];

const ItemFormView = () => {
    const [usuarios,setUsuarios] = useState(estadoInicial);
    const [text, setText] = useState("");
    const [buscar, setBuscar] = useState("");

    const handleAdd = useCallback(() => {
        const usuarioNuevo = {id: Date.now(), name: text};
        const nuevosUsuarios = [...usuarios, usuarioNuevo];
        setUsuarios(nuevosUsuarios);
        const filtro = nuevosUsuarios.filter((usuario) => {
            return usuario.name.toLowerCase().includes(buscar.toLowerCase())
        });
        setUsuarios(filtro);
    }, [usuarios, text, buscar]);

    const handleBuscar = () => {
        setBuscar(text);
    } 

    useEffect(() => {
        console.log("render")
    });

    const filtroDeUsuarios = useMemo(() => {
        const filtro = usuarios.filter((usuario) => {
            return usuario.name.toLowerCase().includes(buscar.toLowerCase())
        });
        return filtro;
    },[buscar, usuarios]);

    return (
        <React.Fragment>
            <div>
                <div>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div>
                    <button onClick={handleBuscar}>
                        buscar
                    </button>
                    <button onClick={handleAdd}>
                        add
                    </button>
                </div>
            </div>
            <ListaDeUsuarios usuarios={filtroDeUsuarios}/>
        </React.Fragment>
    )
}

export default ItemFormView