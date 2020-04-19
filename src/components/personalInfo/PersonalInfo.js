import React from 'react';
import { useSelector } from 'react-redux';
import { user as userSelector } from '../../state/auth/selectors';
import styled from 'styled-components';
import PersonalInfoForm from './PersonalInfoForm';

const PersonalInfo = () => {
    const user = useSelector(userSelector);

    return (
        <PersonalInfoPage>
            <PersonalInfoForm user={user} />
        </PersonalInfoPage>
    );
};

const PersonalInfoPage = styled.div`
    padding: 3%;
    padding-right: 20%;
    padding-left: 20%;
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    background-color: ${(props) => props.theme.colors.appBackground};
    color: ${(props) => props.theme.colors.white};

    @media screen and (max-width: 1400px) {
        padding-right: 5%;
        padding-left: 5%;
    }
`;

export default PersonalInfo;
