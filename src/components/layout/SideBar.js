import React from 'react';
import styled from 'styled-components';
import logo from '../../images/LOGO_4.png';
import { Button } from 'react-bootstrap';
import getNavigationLinks from '../../staticData/navigationLinks';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { startLogout } from '../../state/auth/actions';
import { sideBarLocalization } from '../../state/localization/selectors';
import LanguageSelector from '../common/LanguageSelector';
import appRoutes from '../../appRoutes';

const SideBar = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const onLogoutClick = () => {
        dispatch(startLogout());
    };

    const localization = useSelector(sideBarLocalization);
    const navigationLinks = getNavigationLinks(localization.links);
    debugger;

    return (
        <Bar>
            <Logo>
                <img alt='לוגו' src={logo} />
            </Logo>

            <NavigationLinks>
                {navigationLinks.map((link) => {
                    return (
                        <NavigationLink
                            isSelected={
                                (location.pathname.indexOf(link.path) > -1 &&
                                    link.path !== appRoutes.home) ||
                                location.pathname === link.path
                            }
                            key={link.text}
                        >
                            <Link to={link.path}>{link.text}</Link>
                        </NavigationLink>
                    );
                })}
                <LogoutButton>
                    <Button onClick={onLogoutClick} variant='link'>
                        {localization.links.logout}
                    </Button>
                </LogoutButton>
            </NavigationLinks>
            <LanguageSelector />
        </Bar>
    );
};

const NavigationLinks = styled.div`
    text-align: center;
    font-size: 20px;

    position: relative;
    top: 10px;

    @media screen and (max-width: 1400px) {
        font-size: 18px;
    }
`;

const NavigationLink = styled.div`
    margin-top: 12px;
    margin-bottom: 12px;

    & a {
        color: ${(props) =>
            props.isSelected
                ? props.theme.colors.darkBlueFont
                : props.theme.colors.grayFont};
        text-decoration: none;
        font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
    }

    &:hover a {
        transition: font-weight 0.1s linear;
        font-weight: bold;
    }
`;

const Bar = styled.div`
    left: 0;
    width: 220px;
    position: fixed;
    min-height: 100vh;
    background-color: #f1f1f1;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
        0 4px 20px 0 rgba(0, 0, 0, 0.19);

    @media screen and (min-width: 1400px) {
        width: 280px;
    }
`;

const Logo = styled.div`
    height: 140px;
    position: relative;
    top: 0;
    text-align: center;

    & img {
        height: 150px;
        width: 150px;
    }
`;

const LogoutButton = styled.div`
    font-size: 20px;
    margin-top: 12px;
    margin-bottom: 30px;

    & button {
        padding: 0;
        font-size: 18px;
        color: ${(props) => props.theme.colors.red};
        text-decoration: none !important;

        @media screen and (max-width: 1400px) {
            font-size: 18px;
        }
    }
`;

export default React.memo(SideBar);
