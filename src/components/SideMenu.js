import React from 'react';
import { Drawer, List, makeStyles } from '@material-ui/core';
import routerConfig from '../config/routerConfig';
import { ExpandableMenuItem, SimpleMenuItem } from '../components/MenuItem';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

export default function SideMenu(props) {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <List>
                {routerConfig.map(menuItem => {
                    if (menuItem.submenu && menuItem.submenu.length > 0) {
                        return (
                            <ExpandableMenuItem key={menuItem.text} text={menuItem.text} submenu={menuItem.submenu} />
                        );
                    }
                    return <SimpleMenuItem key={menuItem.text} text={menuItem.text} path={menuItem.path} />;
                })}
            </List>
        </Drawer>
    );
}
