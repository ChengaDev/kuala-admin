import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { user as userSelector } from '../../state/auth/selectors';

const Home = () => {
    const user = useSelector(userSelector);
    return (
        <Page>
            <WelcomeMessage>Welcome back, {user.firstname}!</WelcomeMessage>
        </Page>
    );
};

const Page = styled.div`
    padding: 30px;
    margin-left: 220px;
    background-color: ${(props) => props.theme.colors.appBackground};
    height: 100%;
`;

const WelcomeMessage = styled.div`
    font-size: 40px;
    color: ${(props) => props.theme.colors.white};
`;

export default Home;
