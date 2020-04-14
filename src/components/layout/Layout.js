import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
            Layout
            {children}
        </LayoutWrapper>
    );
};

const LayoutWrapper = styled.div`
    height: 100vh;
`;

export default Layout;
