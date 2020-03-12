import React from 'react';
import Gasto from './Gasto';

const Listado = ({gastos}) => (
    <div className="gastos-realizados">
        <h2>Gasto</h2>
        {gastos.map(gasto =>
            <Gasto
                key={gasto.id}
                gasto={gasto}
            ></Gasto>
        )}
    </div>

 );
export default Listado;