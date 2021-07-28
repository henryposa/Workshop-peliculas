import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    // Todo el historial, todo el entutamiento, goBack...
    ...rest
}) => {

    return (
        <Route {...rest}
            component={(props) => (
                // si está autenticado manda los componentes
                // sino redirecciona a la ruta publica osea login
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/auth/login" />)
            )}
        />
    )
}
// Indica valida la informacion que llega
PrivateRoute.propTypes = {
    //bool es si o no
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

