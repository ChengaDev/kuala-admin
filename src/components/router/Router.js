import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import PasswordRecoveryPage from '../password/PasswordRecoveryPage';
import NotFoundPage from '../errors/NotFoundError';
import Home from '../home/Home';
import { createBrowserHistory } from 'history';
import ProtectedRoute from './ProtectedRoute';
import routes from '../../appRoutes';

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
                <ProtectedRoute exact component={Home} path={routes.home} />
                <Route path='*' component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default ApplicationRouter;
