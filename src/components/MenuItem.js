import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, makeStyles, Link } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export const ExpandableMenuItem = props => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <ListItem button onClick={toggle}>
                <ListItemText primary={props.text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.submenu.map(menuItem => {
                        return (
                            <SimpleMenuItem
                                key={menuItem.text}
                                text={menuItem.text}
                                path={menuItem.path}
                                className={classes.nested}
                            />
                        );
                    })}
                </List>
            </Collapse>
        </div>
    );
};

export const SimpleMenuItem = props => {
    return (
        <div>
            <ListItem button key={props.text} className={props.className}>
                <Link component={RouterLink} to={props.path}>
                    <ListItemText primary={props.text} />
                </Link>
            </ListItem>
        </div>
    );
};
