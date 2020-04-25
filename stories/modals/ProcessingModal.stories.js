import React from 'react';
import theme from '../../src/theme';
import { ThemeProvider } from 'styled-components';
import ProcessingModal from '../../src/components/modals/ProcessingModal';

export default { title: 'Modals|Processing Modal' };

export const display = () => (
    <ThemeProvider theme={theme}>
        <ProcessingModal />
    </ThemeProvider>
);
