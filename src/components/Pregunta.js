import React, { Fragment, useState } from 'react';
import Error from "./error"

const Pregunta = ({setPresupuesto,setRestante,setMostrarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, setError] = useState(false)

    const definirPresupuesto = e =>{
       guardarCantidad(parseInt(e.target.value, 10))

    }

    const agregarPresupuesto = e =>{
        e.preventDefault();
        if(cantidad<1 || isNaN(cantidad)){
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);

    }
    return ( <Fragment>
        <h2>Coloca tu presupuesto</h2>
        {error && <Error mensaje="El presupuesto es incorrecto"></Error>}
        <form
            onSubmit={agregarPresupuesto}
        >
            <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            ></input>
        </form>
    </Fragment> );
}

export default Pregunta;