import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(()=>{

    // agrega el nuevo presupuesto
    if(crearGasto){
      setGastos([
        ...gastos,
        gasto

      ])

    // resta del presupuesto actual
    const presupuestoRestante = restante-gasto.cantidad;
    setRestante(presupuestoRestante);
  }
    setCrearGasto(false);
  },[crearGasto, gasto, gastos, restante])



  return (
   <div className="container">
     <header>
      <h1>Gasto Semanal</h1>
       <div className="contenido-principal">
         {mostrarPregunta ?
         (
          <Pregunta
          setPresupuesto={setPresupuesto}
          setRestante={setRestante}
          setMostrarPregunta={setMostrarPregunta}
          />
        )
        :
        (
          <div className="row">
          <div className="one-half column">
            <Formulario
              setGasto={setGasto}
              setCrearGasto={setCrearGasto}
            ></Formulario>
          </div>
          <div className="one-half column">
            <Listado
            gastos={gastos}
            ></Listado>
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
            >

            </ControlPresupuesto>
          </div>
        </div>
      )}
      </div>
     </header>
   </div>
  );
}

export default App;
