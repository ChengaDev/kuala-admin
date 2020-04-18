import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import PasswordRecoveryPage from '../password/PasswordRecoveryPage';
import NotFoundPage from '../errors/NotFoundError';
import { createBrowserHistory } from 'history';
import ProtectedRoute from './ProtectedRoute';
import routes from '../../appRoutes';
import KualaLoader from '../layout/KualaLoader';
import ErrorBoundary from '../errors/ErrorBoundery';

const Home = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve(import(/* webpackChunkName: "home" */ '../home/Home')),
            1000
        );
    });
});

const PersonalInfo = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve(
                    import(
                        /* webpackChunkName: "personalInfo" */ '../personalInfo/PersonalInfo'
                    )
                ),
            1000
        );
    });
});

const ApplicationRouter = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <ErrorBoundary>
                <Switch>
                    <Route exact component={LoginPage} path={routes.login} />
                    <Route
                        exact
                        component={PasswordRecoveryPage}
                        path={routes.forgotPassword}
                    />
                    <Suspense fallback={<KualaLoader />}>
                        <ProtectedRoute
                            exact
                            component={Home}
                            path={routes.home}
                        />
                        <ProtectedRoute
                            exact
                            path={routes.personalInfo}
                            component={PersonalInfo}
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
                        <Route
                            path={routes.notFound}
                            component={NotFoundPage}
                        />
                    </Suspense>
                </Switch>
            </ErrorBoundary>
        </Router>
    );
};

export default ApplicationRouter;
