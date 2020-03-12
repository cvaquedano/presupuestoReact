import React from 'react';
import Gasto from './Gasto';

import PropTypes from 'prop-types';

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

 Listado.prototype ={
     gastos: PropTypes.array.isRequired
}
export default Listado;