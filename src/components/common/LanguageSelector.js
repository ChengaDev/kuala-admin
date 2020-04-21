import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../state/localization/actions';
import { eLanguage } from '../../staticData/language';

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const onChangeLanguageClick = (newLanguage) => {
        dispatch(changeLanguage(newLanguage));
    };

    return (
        <Selector>
            <span onClick={() => onChangeLanguageClick(eLanguage.Herbew)}>
                {eLanguage.Herbew.displayText}
            </span>
            |
            <span onClick={() => onChangeLanguageClick(eLanguage.English)}>
                {eLanguage.English.displayText}
            </span>
        </Selector>
    );
};

const Selector = styled.div`
    text-align: center;

    & span {
        font-weight: bold;
        cursor: pointer;
        font-size: 12px;
    }
`;

export default LanguageSelector;
