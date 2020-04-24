import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { currentUser } from '../../state/users/selectors';
import { homeLocalization } from '../../state/localization/selectors';
import { isMobileOnly } from 'react-device-detect';
import SummarySection from './sections/summary/SummarySection';
import ChartsSection from './sections/charts/ChartsSection';
import { loadSummary } from '../../api/kuala-api/summary/summary';
import { FadeInAnimation } from '../Animations';
import { Container } from 'react-bootstrap';
import withLanguage from '../hoc/WithLanguage';
import { eLanguageDirection } from '../../staticData/language';

const Home = ({ currentLanguage }) => {
    const user = useSelector(currentUser);
    const localization = useSelector(homeLocalization);

    let [summaryData, setSummaryData] = useState(null);

    useEffect(() => {
        const loadSummaryData = async () => {
            const result = await loadSummary();
            setSummaryData(result);
        };

        loadSummaryData();
    }, []);

    return (
        <Page>
            <WelcomeMessage
                direction={currentLanguage.direction}
                isMobile={isMobileOnly}
            >
                <Container fluid>
                    {localization.welcomeMessage}, <b>{user.firstname}</b>!
                </Container>
            </WelcomeMessage>
            <SummarySection
                summaryData={summaryData}
                user={user}
                isMobile={isMobileOnly}
                localization={localization.summary}
            />
            {!isMobileOnly && (
                <ChartsSection
                    localization={localization.charts}
                    summaryData={summaryData}
                />
            )}
        </Page>
    );
};

const WelcomeMessage = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    animation: ${FadeInAnimation} 0.8s;
    direction: ${(props) => props.direction};

    & > div:first-child {
        padding: 0 !important;
    }

    ${(props) => props.isMobile && `text-align: center;`}
    ${(props) =>
        props.direction === eLanguageDirection.RightToLeft &&
        `text-align: right;`}
`;

const Page = styled.div`
    padding: 30px;
    background-color: ${(props) => props.theme.colors.appBackground};
    min-height: 100vh;
`;

export default withLanguage(Home);
