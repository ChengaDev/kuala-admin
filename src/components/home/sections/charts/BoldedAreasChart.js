import React from 'react';
import styled from 'styled-components';
import Chart from 'react-google-charts';

const BoldedAreasChart = () => {
    return (
        <>
            <ChartTitle>Leading areas</ChartTitle>
            <Chart
                chartType='ColumnChart'
                height='220px'
                data={[
                    ['Element', 'Density', { role: 'style' }],
                    ['Blue', 3, '#5d8fe8'], // English color name
                    ['Copper', 1, '#5d8fe8'], // RGB value
                    ['Silver', 2, '#5d8fe8'], // English color name
                    ['Gold', 0, '#5d8fe8'],
                    ['Platinum', 1, 'color: #5d8fe8'], // CSS-style declaration
                    ['Gold', 2, '#5d8fe8']
                ]}
                options={{
                    backgroundColor: 'transparent',
                    legend: 'none',
                    animation: {
                        duration: 1000,
                        easing: 'in',
                        startup: true
                    }
                }}
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

export default BoldedAreasChart;
