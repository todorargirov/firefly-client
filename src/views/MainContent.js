import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { routes } from '../config/router';
import TopBar from './TopBar';
import SideNav from './SideNav';

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

export default function MainContent(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar />
            <SideNav routes={routes} />
            <main className={classes.content}>
                <div className={classes.heightAdjust} />

                <Switch>
                    {routes.map(route => {
                        const { path, component, subRoutes } = route;
                        if (Array.isArray(subRoutes)) {
                            return subRoutes.map(subRoute => {
                                const { path, component } = subRoute;
                                return (
                                    <Route key={path} exact path={path}>
                                        {component}
                                    </Route>
                                );
                            });
                        } else {
                            return (
                                <Route key={path} exact path={path}>
                                    {component}
                                </Route>
                            );
                        }
                    })}
                </Switch>
            </main>
        </div>
    );
}
