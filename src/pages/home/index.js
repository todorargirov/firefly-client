import React from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThreeDRotation } from '@material-ui/icons';
import useGlobalStyles from '../globalStyles';

export default function Home() {
    const classes = useGlobalStyles();
    return (
        <Container component="div" className={classes.main}>
            <ThreeDRotation />
            Create React App v4-beta example
            <Link to="/login">Login</Link>
        </Container>
    );
}
