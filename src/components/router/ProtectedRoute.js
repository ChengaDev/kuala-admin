import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../auth/Auth';
import Layout from '../layout/Layout';
import routes from '../../appRoutes';

const ProtectedRoute = ({ component: Component, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={(props) => {
                debugger;
                if (auth.isAuthenticated()) {
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    );
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: routes.login,
                                state: { from: props.location }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default ProtectedRoute;
