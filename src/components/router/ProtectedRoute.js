import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticated as isAuthenticatedSelector } from '../../state/auth/selectors';
import { Route, Redirect } from 'react-router-dom';
// import Layout from '../layout/Layout';
import routes from '../../appRoutes';
const Layout = lazy(() =>
    import(/* webpackChunkName: "layout" */ '../layout/Layout')
);

const ProtectedRoute = ({ component: Component, ...restProps }) => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);

    return (
        <Route
            {...restProps}
            render={(props) => {
                if (isAuthenticated) {
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
