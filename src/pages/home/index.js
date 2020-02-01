import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from '../../components/TopBar';
import SideMenu from '../../components/SideMenu';
import MainFrame from '../../components/MainFrame';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar className={classes.appBar} />
            <SideMenu className={classes.drawer} classes={{ drawerPaper: classes.drawerPaper }} />
            <MainFrame />
        </div>
    );
}
