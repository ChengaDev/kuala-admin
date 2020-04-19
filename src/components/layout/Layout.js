import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import { isMobileOnly } from 'react-device-detect';

const Layout = ({ children }) => {
    return (
        <>
            {!isMobileOnly && <SideBar />}
            <Content isMobile={isMobileOnly}>{children}</Content>
        </>
    );
};

const Content = styled.div`
    min-height: 100vh;
    height: fit-content;
    margin-left: ${(props) => (props.isMobile ? '0' : '220px')};

    @media screen and (min-width: 1400px) {
        margin-left: 280px;
    }
`;

export default Layout;
