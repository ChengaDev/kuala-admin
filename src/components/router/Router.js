import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import PasswordRecoveryPage from '../password/PasswordRecoveryPage';
import NotFoundPage from '../errors/NotFoundError';
import { createBrowserHistory } from 'history';
import ProtectedRoute from './ProtectedRoute';
import routes from '../../appRoutes';
import KualaLoader from '../layout/KualaLoader';
const Home = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve(import(/* webpackChunkName: "home" */ '../home/Home')),
            1000
        );
    });
});

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
                    <ProtectedRoute
                        exact
                        path={routes.personalInfo}
                        component={Home}
                    />
                    <ProtectedRoute
                        exact
                        path={routes.education}
                        component={Home}
                    />
                    <ProtectedRoute
                        exact
                        path={routes.experience}
                        component={Home}
                    />
                </Suspense>
                <Route path='*' component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default ApplicationRouter;
