import React from 'react';
import { startLogin } from '../../state/auth/actions';
import {
    hasFailed,
    isFetchingLogin,
    isAuthenticated as isUserAuthenticated
} from '../../state/auth/selectors';
import { loginLocalization } from '../../state/localization/selectors';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import styled, { keyframes } from 'styled-components';
import logo from '../../images/LOGO_cropped.png';
import { Link, Redirect } from 'react-router-dom';
import routes from '../../appRoutes';
import LanguageSelector from '../common/LanguageSelector';

const LoginPage = () => {
    const dispatch = useDispatch();
    let isFetching = useSelector(isFetchingLogin);
    let isLoginFailed = useSelector(hasFailed);
    let isAuthenticated = useSelector(isUserAuthenticated);
    let localization = useSelector(loginLocalization);

    const handleLogin = async (email, password) => {
        dispatch(startLogin({ email, password }));
    };

    const redirectToApplication = () => {
        return <Redirect to={routes.home} />;
    };

    const renderLoginPage = () => {
        return (
            <LoginPageWrapper>
                <LoginBox>
                    <h2>{localization.title}</h2>
                    <Logo>
                        <img height='80' width='80' src={logo} alt='logo' />
                    </Logo>
                    <LoginForm
                        isFetching={isFetching}
                        onSubmit={handleLogin}
                        localization={localization.form}
                    />
                    {isLoginFailed && (
                        <LoginFailedMessage>
                            {localization.form.errors.loginFailed}
                        </LoginFailedMessage>
                    )}
                </LoginBox>
                <ForgotPassword>
                    <Link to={routes.forgotPassword}>
                        {localization.forgotPasswordButton}
                    </Link>
                </ForgotPassword>
                <LanguageSelection>
                    <LanguageSelector />
                </LanguageSelection>
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
    background-color: ${(props) => props.theme.colors.white};
    height: fit-content;
    max-width: 320px;
    position: relative;
    top: 10vh;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 12px #888;
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
    background-color: ${(props) => props.theme.colors.appBackground};
    width: 100%;

    /* & input {
        direction: rtl;
    }

    & label {
        float: right;
    } */
`;

const ForgotPassword = styled.div`
    animation: ${FadeInAnimation} 1s;
    text-align: center;

    & a {
        color: ${(props) => props.theme.colors.white};
        font-size: 15px;
        position: relative;
        top: 11.5vh;
        text-decoration: none !important;
    }
`;

const LanguageSelection = styled.div`
    animation: ${FadeInAnimation} 1s;
    position: relative;
    top: 12vh;
`;

const LoginFailedMessage = styled.div`
    margin-top: 2vh;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.inputValidationMessage};
    color: ${(props) => props.theme.colors.red};
`;

export default LoginPage;
