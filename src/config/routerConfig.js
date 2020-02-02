import Home from '../pages/Home';
import React from 'react';

const routerConfig = [
    {
        text: 'Home',
        path: '/home',
        component: () => {
            return <h2>home</h2>;
        },
        // submenu: [
        //     {
        //         text: 'Home Sub 1',
        //         path: '/home1',
        //         component: () => {
        //             return <h2>homes1</h2>;
        //         },
        //     },
        //     {
        //         text: 'Home Sub 2',
        //         path: '/home2',
        //         component: () => {
        //             return <h2>homes2</h2>;
        //         },
        //     },
        // ],
    },
    {
        text: 'Home 2',
        path: '/homemain',
        component: () => {
            return <h2>homem</h2>;
        },
    },
];

export default routerConfig;
