import React from 'react';
import styled from 'styled-components';

const PersonalInfoWizard = () => {
    return (
        <PersonalInfo>
            <div>Personal Info</div>
        </PersonalInfo>
    );
};

const PersonalInfo = styled.div`
    height: 100%;
    background-color: ${(props) => props.theme.colors.appBackground};
    color: ${(props) => props.theme.colors.white};
`;

export default PersonalInfoWizard;
