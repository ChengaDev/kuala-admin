import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import CompletionGraph from './CompletionGraph';
import BoldedAreasChart from './BoldedAreasChart';
import { FadeInAnimation } from '../../../Animations';
import logo from '../../../../images/LOGO_cropped.png';

const ChartsSection = ({ summaryData }) => {
    const renderLoader = () => {
        return (
            <Logo>
                <img height='50' width='50' src={logo} alt='logo' />
            </Logo>
        );
    };

    const renderCompletionChart = () => {
        if (summaryData) {
            return <CompletionGraph summaryData={summaryData} />;
        } else {
            return renderLoader();
        }
    };

    const renderBoldedAreasChart = () => {
        if (summaryData) {
            return <BoldedAreasChart summaryData={summaryData} />;
        } else {
            return renderLoader();
        }
    };

    return (
        <Charts>
            <Container fluid>
                <Row>
                    <Col lg={6} md={12}>
                        <KualaChart>{renderCompletionChart()}</KualaChart>
                    </Col>
                    <Col lg={6} md={12}>
                        <KualaChart>{renderBoldedAreasChart()}</KualaChart>
                    </Col>
                </Row>
            </Container>
        </Charts>
    );
};

const Rotate = keyframes`
    to {transform: rotateZ(720deg);}
`;

const Logo = styled.div`
    margin: 0 auto;
    height: 50px;
    width: 50px;
    position: relative;
    animation: ${Rotate} 3s linear infinite;
    margin-top: 30px;
    text-align: center;
`;

const Charts = styled.div`
    animation: ${FadeInAnimation} 2s;
    & > div:first-child {
        padding: 0 !important;
    }
`;

const KualaChart = styled.div`
    overflow: hidden;
    height: 300px;
    padding-top: 20px;
    text-align: center;
    margin-top: 30px;
    background-color: ${(props) => props.theme.colors.sectionBackground};
    width: 100%;
`;

export default ChartsSection;
