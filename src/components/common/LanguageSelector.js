import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../state/localization/actions';

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const onChangeLanguageClick = (newLanguage) => {
        dispatch(changeLanguage(newLanguage));
    };

    return (
        <Selector>
            <span onClick={() => onChangeLanguageClick('he')}>עברית</span> |
            <span onClick={() => onChangeLanguageClick('en')}>English</span>
        </Selector>
    );
};

const Selector = styled.div`
    text-align: center;

    & span {
        cursor: pointer;
        font-size: 12px;
    }
`;

export default LanguageSelector;
