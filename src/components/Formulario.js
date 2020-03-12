import React,{useState} from 'react';
import Error from './Error';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({setGasto,setCrearGasto}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e =>{
        e.preventDefault();
        if(cantidad<1 || isNaN(cantidad)||nombre.trim()===''){
            setError(true);
            return;
        }
        setError(false);
        const gasto= {
            nombre,
            cantidad,
            id: uuidv4()
        }

        setGasto(gasto);
        setCrearGasto(true);
        setCantidad(0);
        setNombre('');

    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            {error && <Error mensaje="Ambos campos son obligatorio o presupuesto incorrecto"></Error>}
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre Gastos</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e=> setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value,10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>

     );
}

export default Formulario;