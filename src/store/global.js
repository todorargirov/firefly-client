import { applyChangeStateReducer } from './reducers';

export const globalStore = {
    // initial State
    isLoggedIn: true,
    currentUser: null,
    expandMenuKey: null,
};

export const globalReducer = applyChangeStateReducer;
