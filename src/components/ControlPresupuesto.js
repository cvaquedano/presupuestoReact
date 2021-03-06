import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {revisarPresupuesto} from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( <Fragment>
        <div className="alert alert-primary">
            Presupuesto: $ {presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante: $ {restante}
        </div>
    </Fragment> );
}
ControlPresupuesto.prototype ={
    presupuesto: PropTypes.object.isRequired,
    restante: PropTypes.object.isRequired
}
export default ControlPresupuesto;