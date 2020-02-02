import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { globalStore, globalReducer } from './store/global';

import * as serviceWorker from './serviceWorker';

const store = createStore(globalReducer, globalStore);
ReactDOM.render(
    <Provider store={store}>
        <h1>App</h1>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
