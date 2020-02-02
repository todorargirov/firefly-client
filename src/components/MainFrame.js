import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import routerConfig from '../config/routerConfig';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MainFrame(props) {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
                {routerConfig.map(route => {
                    return (
                        <Route key={route.path} path={route.path}>
                            {route.component}
                        </Route>
                    );
                })}
            </Switch>
        </main>
    );
}
