import { applyChangeStateReducer } from './reducers';

export const globalStore = {
  // initial State
  newAPI: {
    count: 0,
    name: 'newAPI'
  }
};

export const globalReducer = (
  state = {},
  action = { type: '', payload: {} }
) => {
  switch (action.type) {
    case 'changeState':
      return applyChangeStateReducer(state, action.payload);
    default:
      return state;
  }
};
