import { applyChangeStateReducer } from './reducers';

export const globalStore = {
    // initial State
    expandMenuKey: null,
};

export const globalReducer = applyChangeStateReducer;
