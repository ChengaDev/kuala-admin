import React from 'react';
import styled from 'styled-components';
import Chart from 'react-google-charts';
import localization from '../../../../localization/home/sections/charts/CompletionGraph';

const CompletionGraph = () => {
    localization.setLanguage('en');

    return (
        <>
            <ChartTitle>{localization.title}</ChartTitle>
            <Chart
                height='220px'
                chartType='PieChart'
                loader={<div>Loading Chart</div>}
                data={[
                    ['Pizza', 'Popularity'],
                    ['Pepperoni', 33],
                    ['Hawaiian', 26],
                    ['Mushroom', 22],
                    ['Sausage', 10], // Below limit.
                    ['Anchovies', 9] // Below limit.
                ]}
                options={{
                    sliceVisibilityThreshold: 0.2,
                    backgroundColor: 'transparent',
                    legend: 'none',
                    animation: {
                        duration: 2000,
                        easing: 'out',
                        startup: true
                    },
                    pieHole: 0.3,
                    colors: ['#5d8fe8'],
                    chartArea: { height: '75%' }
                }}
                rootProps={{ 'data-testid': '7' }}
            />
        </>
    );
};

const ChartTitle = styled.div`
    color: ${(props) => props.theme.colors.darkBlueFont};
    font-size: 30px;
    text-align: center;
    width: 100%;
`;

export default CompletionGraph;
