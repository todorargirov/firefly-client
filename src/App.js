import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, CircularProgress } from '@material-ui/core';

const Login = lazy(() => import('./views/Login'));
const MainContent = lazy(() => import('./views/MainContent'));

export default function App(props) {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        <BrowserRouter>
            <CssBaseline />
            <Suspense fallback={<CircularProgress />}>{isLoggedIn ? <MainContent /> : <Login />}</Suspense>
        </BrowserRouter>
    );
}
