import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../state/users/selectors';
import { personalInfoLocalization } from '../../state/localization/selectors';
import styled from 'styled-components';
import PersonalInfoForm from './PersonalInfoForm';
import withLanguage from '../hoc/WithLanguage';
import { updateUserStart } from '../../state/users/actions';

const PersonalInfo = ({ currentLanguage }) => {
    const dispatch = useDispatch();
    const user = useSelector(currentUser);
    const localization = useSelector(personalInfoLocalization);

    const onFormSubmit = async (user) => {
        dispatch(updateUserStart(user));
    };

    return (
        <PersonalInfoPage>
            <PersonalInfoForm
                onSubmit={onFormSubmit}
                user={user}
                localization={localization.form}
                currentLanguage={currentLanguage}
            />
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

export default withLanguage(PersonalInfo);
