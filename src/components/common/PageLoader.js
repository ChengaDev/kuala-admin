import React from 'react';
import styled from 'styled-components';
import logo from '../../images/LOGO_cropped.png';
import { Rotate } from '../Animations';

const PageLoader = ({ text }) => {
    return (
        <Loader>
            <Logo src={logo} alt='לוגו' />
            <LoaderText>{text}</LoaderText>
        </Loader>
    );
};

const LoaderText = styled.div`
    color: ${(props) => props.theme.colors.white};
    font-size: 35px;
    position: relative;
    top: 25vh;
    margin: 0 auto;
`;

const Loader = styled.div`
    text-align: center;
    background-color: ${(props) => props.theme.colors.appBackground};
    width: 100%;
    height: 100vh;
    margin: 0 auto;
`;

const Logo = styled.img`
    height: 18vh;
    min-height: 100px;
    position: relative;
    top: 20vh;
    animation: ${Rotate} 1.5s linear infinite;
    background-color: ${(props) => props.theme.colors.white};
    overflow: hidden;
    border-radius: 100px;
`;

export default PageLoader;
