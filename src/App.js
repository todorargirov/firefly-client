import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { globalStore, globalReducer } from './store/global';
import { ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core';

import { BrowserRouter } from 'react-router-dom';

import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import MainContentSwitch from './components/MainContentSwitch';
import { routes } from './config/router';

const store = createStore(globalReducer, globalStore);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    heightAdjust: theme.mixins.toolbar,
}));

export default function App(props) {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={classes.root}>
                    <CssBaseline />
                    <TopBar />
                    <SideNav routes={routes} />
                    <main className={classes.content}>
                        <div className={classes.heightAdjust} />

                        <MainContentSwitch routes={routes} />
                    </main>
                </div>
            </BrowserRouter>
        </Provider>
    );
}
