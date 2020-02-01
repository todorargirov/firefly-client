import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

export default function GlobalRoutes() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>

            <Switch>
                <Route path="/login">
                    <p>Login</p>
                </Route>
                <Route path="/">
                    {/* Check auth before rendering this and any below routes */}
                    <p>Home</p>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
