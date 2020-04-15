import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { user as userSelector } from '../../state/auth/selectors';

const Home = () => {
    const user = useSelector(userSelector);
    return (
        <Page>
            <WelcomeMessage>
                Welcome back, <b>{user.firstname}</b>!
            </WelcomeMessage>
        </Page>
    );
};

const Page = styled.div`
    padding: 30px;
    margin-left: 220px;
    background-color: ${(props) => props.theme.colors.appBackground};
    height: 100%;
`;

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const WelcomeMessage = styled.div`
    font-size: 40px;
    color: ${(props) => props.theme.colors.white};
    animation: ${FadeInAnimation} 0.8s;
`;

export default Home;
