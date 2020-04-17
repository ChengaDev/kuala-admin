import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const GotSummaryBox = ({ title, data, path }) => {
    return (
        <Col xl={3} lg={4} md={6} sm={6} xs={12}>
            <Link to={path}>
                <Box>
                    <Title>{title}</Title>
                    <Data>{data}</Data>
                </Box>
            </Link>
        </Col>
    );
};

const Title = styled.div`
    font-size: 20px;
    color: black;

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

const Box = styled.div`
    animation: background-color 1s ease-out 1s;
    padding: 15px;
    float: left;
    color: black;
    margin-bottom: 30px;
    width: 100%;
    background-color: white;
    text-align: center;
    transition: 0.5s;
    animation: gqJLNN 1.5s;

    &:hover {
        background-color: #5d8fe8;
        color: white;

        & ${Title} {
            transition: 0.5s;
            color: white;
        }
    }
`;

const Data = styled.div`
    font-size: 50px;

    @media screen and (max-width: 1000px) {
        font-size: 30px;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

export default React.memo(GotSummaryBox);
