import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return <Page>This is the homepage</Page>;
};

const Page = styled.div`
    background-color: ${(props) => props.theme.colors.appBackground};
    height: 100%;
    width: 100%;
`;

export default Home;
