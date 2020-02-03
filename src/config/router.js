import React from 'react';
import { MoveToInbox as InboxIcon } from '@material-ui/icons';

export const routes = [
    {
        path: 'Category-Home',
        text: 'Home',
        icon: <InboxIcon />,
        component: <span>Content</span>,
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
        path: 'Category-Login',
        text: 'Login',
        icon: <InboxIcon />,
        component: <span>Login</span>,
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
