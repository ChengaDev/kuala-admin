import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { FadeInAnimation } from '../../../Animations';

const SummaryBox = ({ title, data, path }) => {
    return (
        <Col xl={3} lg={4} md={6} sm={6} xs={12}>
            <Box userHasItems={data > 0}>
                <Title>{title}</Title>
                <Data>{data}</Data>
            </Box>
        </Col>
    );
};

const Data = styled.div`
    font-size: 50px;

    @media screen and (max-width: 1000px) {
        font-size: 30px;
    }
`;

const Box = styled.div`
    animation: background-color 1s ease-out 1s;
    padding: 15px;
    float: left;
    color: ${(props) =>
        props.userHasItems ? props.theme.colors.green : props.theme.colors.red};
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

        ${Data} {
            color: ${(props) => props.theme.colors.white} !important;
            transition: 0.5s;
        }
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

export default React.memo(SummaryBox);
