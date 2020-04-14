import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../images/LOGO_cropped.png';

const KualaLoader = () => {
    return (
        <Background>
            <Logo src={logo} alt='לוגו' />
        </Background>
    );
};

const Background = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.colors.appBackground};
    text-align: center;
`;

const Rotate = keyframes`
    to {
        transform: rotateZ(360deg);
    }
`;

const Logo = styled.img`
    height: 20vh;
    min-height: 120px;
    position: relative;
    top: 20vh;
    animation: ${Rotate} 1.5s linear infinite;
    background-color: ${(props) => props.theme.colors.white};
    overflow: hidden;
    border-radius: 100px;
`;

export default React.memo(KualaLoader);
