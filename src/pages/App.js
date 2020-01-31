import React from 'react';
import { Container, createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { ThreeDRotation } from '@material-ui/icons';
import useGlobalStyles from './globalStyles';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Helvetica", "Arial", sans-serif',
    },
    palette: {
        background: {
            default: '#121212',
        },
    },
});

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
