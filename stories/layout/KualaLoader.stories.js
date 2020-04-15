import React from 'react';
import KualaLoader from '../../src/components/layout/KualaLoader';
import theme from '../../src/theme';
import { ThemeProvider } from 'styled-components';

export default { title: 'Kuala Loader' };

export const loading = () => (
    <ThemeProvider theme={theme}>
        <KualaLoader />
    </ThemeProvider>
);
