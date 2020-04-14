import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import PasswordRecoveryPage from '../password/PasswordRecoveryPage';
import NotFoundPage from '../errors/NotFoundError';
import { createBrowserHistory } from 'history';
import ProtectedRoute from './ProtectedRoute';
import routes from '../../appRoutes';
import KualaLoader from '../layout/KualaLoader';
const Home = lazy(() =>
    import(/* webpackChunkName: "homepage" */ '../home/Home')
);

const ApplicationRouter = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
                <Route exact component={LoginPage} path={routes.login} />
                <Route
                    exact
                    component={PasswordRecoveryPage}
                    path={routes.forgotPassword}
                />
                <Suspense fallback={<KualaLoader />}>
                    <ProtectedRoute exact component={Home} path={routes.home} />
                </Suspense>
                <Route path='*' component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default ApplicationRouter;
