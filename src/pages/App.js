import React from 'react';
import { Container, ThemeProvider, CssBaseline } from '@material-ui/core';
import { ThreeDRotation } from '@material-ui/icons';
import useGlobalStyles from './globalStyles';
import theme from './theme';

function App() {
    const classes = useGlobalStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="div" className={classes.main}>
                <ThreeDRotation />
                Create React App v4-beta example
            </Container>
        </ThemeProvider>
    );
}

export default App;
