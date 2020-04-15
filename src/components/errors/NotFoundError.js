import React from 'react';
import styled from 'styled-components';
import logo from '../../images/LOGO_cropped.png';

const NotFoundPage = () => {
    return (
        <Page>
            <img height='150' src={logo} alt='לוגו קואלה' />
            <h1>Oops... :(</h1>
            <div>Looks like the page you requested not exists</div>
        </Page>
    );
};

const Page = styled.div`
    background-color: ${(props) => props.theme.colors.appBackground};
    color: ${(props) => props.theme.colors.white};
    height: 100vh;
    width: 100vw;
    text-align: center;
    padding: 20px;
    padding-top: 10vh;

    & img {
        margin-bottom: 8vh;
    }

    & h1 {
        font-weight: bold;
    }

    & div {
        font-size: 40px;
    }
`;

export default NotFoundPage;
