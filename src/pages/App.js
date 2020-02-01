import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import GlobalRouter from './globalRoutes';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Top level Router for the app goes here */}
            <GlobalRouter />
        </ThemeProvider>
    );
}
