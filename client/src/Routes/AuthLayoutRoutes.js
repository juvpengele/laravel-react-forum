import React from 'react';
import { Route } from 'react-router-dom';
import EmptyLayout from "../Pages/EmptyLayout";

const AuthLayoutRoutes = ({ component: Component,  ...rest }) => {

    return <Route {...rest} render={ matchProps => (
            <EmptyLayout>
                <Component {...matchProps} Middleware={ rest.middleware }/>
            </EmptyLayout>
        ) }
    />
};

export default AuthLayoutRoutes;
