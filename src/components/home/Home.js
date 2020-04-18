import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { user as userSelector } from '../../state/auth/selectors';
import { isMobileOnly } from 'react-device-detect';
import SummarySection from './sections/summary/SummarySection';
import ChartsSection from './sections/charts/ChartsSection';
import { loadSummary } from '../../api/kuala-api/summary/summary';

const Home = () => {
    const user = useSelector(userSelector);
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
            <SummarySection
                summaryData={summaryData}
                user={user}
                isMobile={isMobileOnly}
            />
            {!isMobileOnly && <ChartsSection summaryData={summaryData} />}
        </Page>
    );
};

const Page = styled.div`
    padding: 30px;
    background-color: ${(props) => props.theme.colors.appBackground};
    min-height: 100vh;
`;

export default Home;
