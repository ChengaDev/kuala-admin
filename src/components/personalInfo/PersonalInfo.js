import React from 'react';
// import { useSelector } from 'react-redux';
// import { user as userSelector } from '../../state/auth/selectors';
import styled from 'styled-components';

const PersonalInfo = () => {
    // const user = useSelector(userSelector);

    return <PersonalInfoPage></PersonalInfoPage>;
};

const PersonalInfoPage = styled.div`
    padding: 5%;
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.appBackground};
    color: ${(props) => props.theme.colors.white};
`;

export default PersonalInfo;
