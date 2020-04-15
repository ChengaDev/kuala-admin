import React from 'react';
import styled from 'styled-components';
import logo from '../../images/LOGO_cropped.png';
import { Button } from 'react-bootstrap';
import navigationLinks from '../../staticData/navigationLinks';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../state/auth/actions';

const SideBar = () => {
    const dispatch = useDispatch();
    const onLogoutClick = () => {
        dispatch(startLogout());
    };

    return (
        <Bar>
            <Logo>
                <img alt='לוגו' src={logo} />
            </Logo>

            <NavigationLinks>
                {navigationLinks.map((link) => {
                    return (
                        <NavigationLink key={link.text}>
                            <Link to={link.path}>{link.text}</Link>
                        </NavigationLink>
                    );
                })}
            </NavigationLinks>

            <LogoutButton>
                <Button onClick={onLogoutClick} variant='danger'>
                    Logout
                </Button>
            </LogoutButton>
        </Bar>
    );
};

const NavigationLinks = styled.div`
    font-size: 18px;
    padding: 30px;

    & a {
        color: #6a7380;
        text-decoration: none;
    }
`;

const NavigationLink = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Bar = styled.div`
    left: 0;
    width: 220px;
    position: fixed;
    height: fit-content;
    min-height: 100vh;
    background-color: #f1f1f1;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
        0 4px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Logo = styled.div`
    height: 140px;
    position: relative;
    top: 0;
    text-align: center;

    & img {
        margin-top: 30px;
        height: 85px;
        width: 85px;
    }
`;

const LogoutButton = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 30px;

    & button {
        font-size: 14px;
    }
`;

export default SideBar;
