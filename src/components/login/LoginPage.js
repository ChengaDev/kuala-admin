import React, { useState } from 'react';
import { login } from '../../api/kuala-api/users/users';
import LoginForm from './LoginForm';
import styled, { keyframes } from 'styled-components';
import logo from '../../images/LOGO_cropped.png';
import { Link, Redirect } from 'react-router-dom';
import auth from '../../auth/Auth';

const LoginPage = () => {
    let [isAuthenticated, setIsAuthenticated] = useState(false);
    let [isLoginFailed, setIsLoginFailed] = useState(false);
    let [isFetching, setIsFetching] = useState(false);

    const handleLogin = async (email, password) => {
        setIsFetching(true);
        const response = await login(email, password);
        setIsFetching(false);
        if (response.status === 200) {
            auth.login();
            setIsAuthenticated(true);
        } else {
            setIsLoginFailed(true);
        }
    };

    const redirectToApplication = () => {
        return <Redirect to='/' />;
    };

    const renderLoginPage = () => {
        return (
            <LoginPageWrapper>
                <LoginBox>
                    <h2>Login</h2>
                    <Logo>
                        <img height='80' width='80' src={logo} alt='logo' />
                    </Logo>
                    <LoginForm isFetching={isFetching} onSubmit={handleLogin} />
                    {isLoginFailed && (
                        <LoginFailedMessage>
                            Login failed, please try again
                        </LoginFailedMessage>
                    )}
                </LoginBox>
                <ForgotPassword>
                    <Link to='/password'>Forgot your password?</Link>
                </ForgotPassword>
            </LoginPageWrapper>
        );
    };

    return (
        <React.Fragment>
            {isAuthenticated ? redirectToApplication() : renderLoginPage()}
        </React.Fragment>
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
    max-width: 320px;
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
    animation: ${Rotate} 1.25s;
    margin-top: 30px;
    text-align: center;
`;

const LoginPageWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: #60cbeb;
    width: 100%;
`;

const ForgotPassword = styled.div`
    animation: ${FadeInAnimation} 1s;
    text-align: center;

    & a {
        color: #fff;
        font-size: 15px;
        position: relative;
        top: 11.5vh;
        text-decoration: none !important;
    }
`;

const LoginFailedMessage = styled.div`
    margin-top: 2vh;
    text-align: center;
    font-size: 14px;
    color: red;
`;

export default LoginPage;
