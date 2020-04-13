import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import PasswordRecoveryPage from '../password/PasswordRecoveryPage';
import NotFoundPage from '../errors/NotFoundError';
import Home from '../home/Home';
import { createBrowserHistory } from 'history';
import ProtectedRoute from './ProtectedRoute';

const ApplicationRouter = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
                <Route exact component={LoginPage} path='/login' />
                <Route
                    exact
                    component={PasswordRecoveryPage}
                    path='/password'
                />
                <ProtectedRoute exact component={Home} path='/' />
                <Route path='*' component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default ApplicationRouter;
