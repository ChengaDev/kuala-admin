import React from 'react';
import BaseErrorPage from './BaseErrorPage';
import logo from '../../images/LOGO_cropped.png';

const NotFoundPage = () => {
    return (
        <BaseErrorPage>
            <img height='150' src={logo} alt='לוגו קואלה' />
            <h1>Oops... :(</h1>
            <div>Looks like the page you requested not exists</div>
        </BaseErrorPage>
    );
};

export default NotFoundPage;
