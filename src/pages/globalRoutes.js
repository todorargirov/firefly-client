import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

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
                    Home
                </Route>
                <Route exact path="/about">
                    About
                </Route>
            </Switch>
        );
    }
};
export default function GlobalRouter() {
    return <BrowserRouter>{renderAuthRedirect()}</BrowserRouter>;
}
