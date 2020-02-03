import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function MainContentSwitch(props) {
    const { routes } = props;

    return (
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
    );
}
