import React from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from "../Pages/DefaultLayout";

const ThreadLayoutRoutes = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={ matchProps => (
            <DefaultLayout>
                <Component {...matchProps}/>
            </DefaultLayout>
        )
    }
    />
};

export default ThreadLayoutRoutes;