import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';

const Layout = ({ children }) => {
    return (
        <>
            <SideBar />
            <Content>{children}</Content>
        </>
    );
};

const Content = styled.div`
    height: 100vh;
`;

export default Layout;
