import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../auth/Auth';
// import Layout from '../layout/Layout';
import routes from '../../appRoutes';
const Layout = lazy(() =>
    import(/* webpackChunkName: "layout" */ '../layout/Layout')
);

const ProtectedRoute = ({ component: Component, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={(props) => {
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
