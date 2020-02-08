import React from 'react';
import { MoveToInbox as InboxIcon } from '@material-ui/icons';
import Demo from '../views/Demo';
import CatalogMockup from '../views/CatalogMockup';

export const routes = [
    {
        path: '/index',
        text: 'Index',
        icon: <InboxIcon />,
        component: <span>Index</span>,
    },
    {
        path: '/catalogmockup',
        text: 'Catalog Mockup',
        icon: <InboxIcon />,
        component: <CatalogMockup />,
    },
    {
        text: 'Home',
        icon: <InboxIcon />,
        subRoutes: [
            {
                path: '/',
                text: 'Home',
                icon: <InboxIcon />,
                component: <Demo />,
            },
            {
                path: '/sub',
                text: 'Sub Home',
                icon: <InboxIcon />,
                component: <span>Sub</span>,
            },
        ],
    },
    {
        text: 'Login',
        icon: <InboxIcon />,
        subRoutes: [
            {
                path: '/login',
                text: 'Login',
                icon: <InboxIcon />,
                component: <span>Login</span>,
            },
            {
                path: '/sub2',
                text: 'Sub Home',
                icon: <InboxIcon />,
                component: <span>Sub Home</span>,
            },
        ],
    },
];
