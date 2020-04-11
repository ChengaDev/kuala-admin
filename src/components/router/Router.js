import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import Home from '../home/Home';
import { createBrowserHistory } from 'history';

const ApplicationRouter = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
                <Redirect exact from='/' to='/login' />
                <Route exact component={LoginPage} path='/login' />
                <Route exact component={Home} path='/' />
            </Switch>
        </Router>
    );
};

export default ApplicationRouter;
