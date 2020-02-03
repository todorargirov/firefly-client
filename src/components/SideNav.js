import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, makeStyles, Collapse } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    heightAdjust: theme.mixins.toolbar,
}));

function ListItemLink(props) {
    const { icon, primary, to, className } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to]
    );

    return (
        <>
            <ListItem button component={renderLink} className={className}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </>
    );
}

function NestedMenu(props) {
    const classes = useStyles();
    const { text, icon, subRoutes } = props;
    const expandMenuKey = useSelector(state => state.expandMenuKey);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({
            type: 'expandMenu',
            payload: {
                expandMenuKey: expandMenuKey === text ? null : text,
            },
        });
    };

    const isOpen = expandMenuKey === text;

    return (
        <>
            <ListItem key={text} button onClick={handleClick}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={text} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List>
                    {subRoutes.map(subRoute => {
                        const { path, text, icon } = subRoute;
                        return (
                            <ListItemLink key={path} to={path} primary={text} icon={icon} className={classes.nested} />
                        );
                    })}
                </List>
            </Collapse>
        </>
    );
}

const renderMenu = routes => {
    return (
        <List>
            {routes.map(route => {
                const { path, text, icon, subRoutes } = route;
                if (Array.isArray(subRoutes)) {
                    return <NestedMenu key={text} text={text} icon={icon} subRoutes={subRoutes} />;
                } else {
                    return <ListItemLink key={path} to={path} primary={text} icon={icon} />;
                }
            })}
        </List>
    );
};

export default function SideNav(props) {
    const classes = useStyles();
    const { routes } = props;

    return (
        <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div className={classes.heightAdjust} />
            {renderMenu(routes)}
        </Drawer>
    );
}
