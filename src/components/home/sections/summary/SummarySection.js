import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import SummaryBox from './SummaryBox';
import PersonalInfoBox from './PersonalInfoBox';
import appRoutes from '../../../../appRoutes';
import { FadeInAnimation } from '../../../Animations';
import logo from '../../../../images/LOGO_cropped.png';

const SummarySection = ({ summaryData, isMoblie, localization }) => {
    const renderSummaryBoxes = () => {
        return (
            <>
                <Row>
                    <SummaryTitle isMobile={isMoblie}>
                        {localization.summaryTitle}
                    </SummaryTitle>
                </Row>
                <Row>
                    <PersonalInfoBox
                        isLoading={false}
                        title={localization.personalInfo}
                        data='X'
                        path={appRoutes.personalInfo}
                    />
                    {Object.keys(summaryData).map((key) => {
                        return (
                            <SummaryBox
                                key={localization[key]}
                                isLoading={false}
                                title={localization[key]}
                                data={summaryData[key]}
                            />
                        );
                    })}
                </Row>
            </>
        );
    };

    const renderLoader = () => {
        return (
            <Row>
                <Col>
                    <Logo>
                        <img height='120' width='120' src={logo} alt='logo' />
                    </Logo>
                </Col>
            </Row>
        );
    };

    const renderSummary = () => {
        if (summaryData) {
            return renderSummaryBoxes();
        } else {
            return renderLoader();
        }
    };

    return (
        <Summary>
            <Container fluid>
                <Row>
                    <Col>
                        <SummaryBoxes>
                            <Container>{renderSummary()}</Container>
                        </SummaryBoxes>
                    </Col>
                </Row>
            </Container>
        </Summary>
    );
};

const Rotate = keyframes`
    to {transform: rotateZ(720deg);}
`;

const Logo = styled.div`
    position: relative;
    top: 20px;
    animation: ${Rotate} 3s linear infinite;
    margin-top: 30px;
    text-align: center;
`;

const Summary = styled.div`
    & > div:first-child {
        padding: 0 !important;
    }
`;

const SummaryBoxes = styled.div`
    animation: ${FadeInAnimation} 0.8s;
    min-height: 460px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.sectionBackground};

    & a {
        display: block;
    }
`;

const SummaryTitle = styled.div`
    color: ${(props) => props.theme.colors.darkBlueFont};
    font-size: 40px;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
`;

export default SummarySection;
