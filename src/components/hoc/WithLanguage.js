import React from 'react';
import { useSelector } from 'react-redux';
import { currentLanguage } from '../../state/localization/selectors';

const withLanguage = (Component) => (props) => {
    const language = useSelector(currentLanguage);

    return <Component currentLanguage={language} {...props} />;
};

export default withLanguage;
