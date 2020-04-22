import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { FadeInAnimation } from '../../../Animations';

const PersonalInfoBox = ({ title, data, path }) => {
    return (
        <Col xl={6} lg={4} md={6} sm={6} xs={12}>
            <Link to={path}>
                <Box>
                    <Title>{title}</Title>
                    <Data>
                        <span className='material-icons'>perm_identity</span>
                    </Data>
                </Box>
            </Link>
        </Col>
    );
};

const Box = styled.div`
    color: ${(props) => props.theme.colors.orangeFont};
    animation: background-color 1s ease-out 1s;
    padding: 15px;
    float: left;
    margin-bottom: 30px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    text-align: center;
    transition: 0.5s;
    animation: ${FadeInAnimation} 1.5s;

    @media screen and (max-width: 1000px) {
        margin-bottom: 20px;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.blue};
        color: ${(props) => props.theme.colors.white} !important;
    }
`;

const Title = styled.div`
    font-size: 20px;

    ${Box}:hover {
        color: ${(props) => props.theme.colors.white};
        transition: 0.5s;
    }

    @media screen and (max-width: 1300px) {
        font-size: 18px;
    }

    @media screen and (max-width: 980px) {
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

const Data = styled.div`
    margin-top: 15px;

    ${Box}:hover {
        color: ${(props) => props.theme.colors.white} !important;
        transition: 0.5s;
    }

    & span {
        font-size: 52px;
    }

    @media screen and (max-width: 1000px) {
        margin-top: 0;

        & span {
            font-size: 33px;
            margin-top: 3px;
        }
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

export default React.memo(PersonalInfoBox);
