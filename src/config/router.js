import React from 'react';
import { MoveToInbox as InboxIcon } from '@material-ui/icons';

export const routes = [
    {
        text: 'Home',
        icon: <InboxIcon />,
        subRoutes: [
            {
                path: '/',
                text: 'Home',
                icon: <InboxIcon />,
                component: <span>Home</span>,
            },
            {
                path: '/sub',
                text: 'Sub Home',
                icon: <InboxIcon />,
                component: <span>Sub Home</span>,
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
                component: <span>Sub Content 2</span>,
            },
        ],
    },
];
