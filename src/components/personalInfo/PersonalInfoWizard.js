import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FadeInAnimation } from '../Animations';
import logo from '../../images/LOGO_cropped.png';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { user as userSelector } from '../../state/auth/selectors';

const PersonalInfoWizard = () => {
    const nameInput = useRef(null);
    const user = useSelector(userSelector);

    // const [phase, setPhase] = useState(0);
    // const [personalInfo, setPersonalInfo] = useState(user);

    useEffect(() => {
        nameInput.current.focus();
    });

    return (
        <PersonalInfo>
            <Message>
                <Logo>
                    <img height='150' width='150' src={logo} alt='logo' />
                </Logo>
                <FirstNameLabel>
                    So, as far as we know, your first name is...
                </FirstNameLabel>
                <NameInput>
                    <input ref={nameInput} type='text' value={user.firstname} />
                </NameInput>
                <NextButton>
                    <Button variant='success'>Go on!</Button>
                </NextButton>
            </Message>
        </PersonalInfo>
    );
};

const NextButton = styled.div`
    width: 20%;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    margin-top: 50px;
    font-size: 50px;
    color: ${(props) => props.theme.colors.green};

    & span {
        font-size: 50px;
    }

    &:hover {
        transition: 0.5s;
        color: ${(props) => props.theme.colors.white};
    }
`;

const Logo = styled.div`
    margin: 0 auto;
    border-radius: 100px;
    position: relative;
    top: 20px;
    background-color: white;
    width: fit-content;
    margin-top: 30px;
    text-align: center;
`;

const NameInput = styled.div`
    text-align: center;

    & input {
        color: ${(props) => props.theme.colors.blue};
        border-radius: 5px;
        background-color: #c3ccd9;
        caret-color: white;
        box-shadow: 0 0 2px #430;
        font-size: 3vw;
        border: none;
        text-align: center;

        &:focus {
            outline: none;
        }
    }
`;

const WelcomeMessage = styled.div`
    text-align: center;
    color: ${(props) => props.theme.colors.white};
`;

const Message = styled.div`
    animation: 2s ${FadeInAnimation};
`;

const FirstNameLabel = styled(WelcomeMessage)`
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 2.2vw;
`;

const PersonalInfo = styled.div`
    padding: 5%;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.appBackground};
    color: ${(props) => props.theme.colors.white};
`;

export default PersonalInfoWizard;
