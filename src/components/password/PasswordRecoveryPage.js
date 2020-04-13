import React from 'react';
import styled from 'styled-components';

const PasswordRecoveryPage = () => {
    return <Page>Password recovery page</Page>;
};

const Page = styled.div`
    background-color: ${(props) => props.theme.colors.appBackground};
    min-height: 100vh;
`;

export default PasswordRecoveryPage;
