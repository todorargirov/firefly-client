import React from 'react';
import { ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import TopBar from '../components/TopBar';
import SideMenu from '../components/SideMenu';
import MainFrame from '../components/MainFrame';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Top level Router for the app goes here */}
            <BrowserRouter>
                <main className={classes.root}>
                    <TopBar />
                    <SideMenu />
                    <MainFrame />
                </main>
            </BrowserRouter>
        </ThemeProvider>
    );
}
