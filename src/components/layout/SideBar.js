import React from 'react';
import styled from 'styled-components';
import logo from '../../images/LOGO_cropped.png';

const SideBar = () => {
    return (
        <Bar>
            <Logo>
                <img alt='לוגו' src={logo} />
            </Logo>
        </Bar>
    );
};

const Bar = styled.div`
    left: 0;
    width: 200px;
    position: fixed;
    height: fit-content;
    min-height: 100vh;
    background-color: #f1f1f1;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
        0 4px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Logo = styled.div`
    height: 200px;
    position: relative;
    top: 0;
    text-align: center;

    & img {
        margin-top: 30px;
        height: 70px;
        width: 70px;
    }
`;

export default SideBar;
