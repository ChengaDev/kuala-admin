import React from 'react';
import ApplicationRouter from './components/router/Router';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <ApplicationRouter />
            </ThemeProvider>
        </div>
    );
}

export default App;
