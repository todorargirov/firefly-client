import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
// use an auth service here to check local storage for key and authorization header etc
const isAuthenticated = true;

const renderAuthRedirect = () => {
    if (!isAuthenticated) {
        return (
            <Switch>
                <Redirect to="/login" />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    About
                </Route>
            </Switch>
        );
    }
};
export default function GlobalRouter() {
    return <BrowserRouter>{renderAuthRedirect()} {...children}</BrowserRouter>;
}
