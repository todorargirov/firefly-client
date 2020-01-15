import { applyChangeStateReducer } from './reducers';

export const globalStore = {
  // initial State
  newAPI: {
    count: 0,
    name: 'newAPI'
  }
};

export const globalReducer = applyChangeStateReducer;
