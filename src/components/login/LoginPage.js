import React, { useEffect, useState } from 'react';
import { login } from '../../api/kuala-api/users/users';
import LoginForm from './LoginForm';
import styled, { keyframes } from 'styled-components';
import logo from '../../images/LOGO_cropped.png';

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
        <LoginPageWrapper>
            <LoginBox>
                <h2>Login</h2>
                <Logo>
                    <img height='80' width='80' src={logo} alt='logo' />
                </Logo>
                <LoginForm />
            </LoginBox>
        </LoginPageWrapper>
    );
};

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Rotate = keyframes`
    to {transform: rotateZ(-720deg);}
`;

const LoginBox = styled.div`
    animation: ${FadeInAnimation} 1s;
    background-color: #fff;
    height: fit-content;
    max-width: 300px;
    position: relative;
    top: 10vh;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px #888;
    min-height: 400px;

    & h2 {
        text-align: center;
    }
`;

const Logo = styled.div`
    animation: ${Rotate} 1s;
    margin-top: 30px;
    text-align: center;
`;

const LoginPageWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: #60cbeb;
    width: 100%;
`;

export default LoginPage;
