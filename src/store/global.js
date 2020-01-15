export const globalStore = {
  newAPI: {
    count: 0,
    name: 'newAPI'
  }
};

export const globalReducer = (state = {}, action = 'changeState') => {
  const { type, payload } = action;
  switch (type) {
    case 'changeState':
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
