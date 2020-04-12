import React, { useEffect, useState } from 'react';
import { login } from '../../api/kuala-api/users/users';
import LoginForm from './LoginForm';

const LoginPage = () => {
    let [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const loginRequest = async () => {
            const response = await login('gazit.chen@gmail.com', 'chen123');

            if (response.status === 200) {
                setIsAuthenticated(true);
            }
        };

        loginRequest();
    }, [isAuthenticated]);

    return (
        <React.Fragment>
            <div>Login</div>
            <LoginForm />
            <div>{isAuthenticated ? 'Authenticated' : 'Not authenticated'}</div>
        </React.Fragment>
    );
};

export default LoginPage;
