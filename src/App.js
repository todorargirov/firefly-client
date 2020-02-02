import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { globalStore, globalReducer } from './store/global';
import { ThemeProvider, CssBaseline, Container, AppBar, Drawer } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const store = createStore(globalReducer, globalStore);

export default function App(props) {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <CssBaseline />

                <Container>
                    <AppBar>TopBar</AppBar>
                    <Drawer>SideNav</Drawer>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/">
                                <Container>
                                    <h1>Content</h1>
                                </Container>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </Container>
            </ThemeProvider>
        </Provider>
    );
}
