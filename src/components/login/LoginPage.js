import React, { useEffect, useState } from 'react';
import { login } from '../../api/kuala-api/users/users';

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
            <div>This is the login page</div>
            <div>{isAuthenticated ? 'Authenticated' : 'Not authenticated'}</div>
        </React.Fragment>
    );
};

export default LoginPage;
