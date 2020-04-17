import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { user as userSelector } from '../../state/auth/selectors';
import SummaryBox from './SummaryBox';
import appRoutes from '../../appRoutes';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobileOnly } from 'react-device-detect';

const Home = () => {
    const user = useSelector(userSelector);
    return (
        <Page>
            <Summary>
                <Container fluid>
                    <WelcomeMessage isMobile={isMobileOnly}>
                        Welcome back, <b>{user.firstname}</b>!
                    </WelcomeMessage>
                    <Row>
                        <Col>
                            <SummaryBoxes>
                                <Container>
                                    <Row>
                                        <SummaryTitle isMobile={isMobileOnly}>
                                            Your resume contains
                                        </SummaryTitle>
                                    </Row>
                                    <Row>
                                        <SummaryBox
                                            isLoading={false}
                                            title='Skills'
                                            data='3'
                                            path={appRoutes.skills}
                                        />
                                        <SummaryBox
                                            isLoading={false}
                                            title='Projects'
                                            data='1'
                                            path={appRoutes.projects}
                                        />
                                        <SummaryBox
                                            md={4}
                                            sm={6}
                                            isLoading={false}
                                            title='Recommendations'
                                            data='2'
                                            path={appRoutes.recommendations}
                                        />
                                        <SummaryBox
                                            isLoading={false}
                                            title='Achievments'
                                            data='3'
                                            path={appRoutes.skills}
                                        />
                                        <SummaryBox
                                            isLoading={false}
                                            title='Experience'
                                            data='1'
                                            path={appRoutes.projects}
                                        />
                                        <SummaryBox
                                            isLoading={false}
                                            title='Education'
                                            data='2'
                                            path={appRoutes.recommendations}
                                        />
                                    </Row>
                                </Container>
                            </SummaryBoxes>
                        </Col>
                    </Row>
                </Container>
            </Summary>
        </Page>
    );
};

const Summary = styled.div`
    & > div:first-child {
        padding: 0 !important;
    }
`;

const Page = styled.div`
    padding: 30px;
    background-color: ${(props) => props.theme.colors.appBackground};
    min-height: 100%;
`;

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const WelcomeMessage = styled.div`
    margin-bottom: 30px;
    font-size: 30px;
    color: ${(props) => props.theme.colors.white};
    animation: ${FadeInAnimation} 0.8s;

    ${(props) => props.isMobile && `text-align: center;`}
`;

const SummaryBoxes = styled.div`
    padding-top: 35px;
    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #d8e6f0;

    & a {
        display: block;
    }
`;

const SummaryTitle = styled.div`
    color: #465485;
    font-size: 40px;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
`;

export default Home;
