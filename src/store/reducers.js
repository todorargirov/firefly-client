export const applyChangeStateReducer = (state, action) => {
  switch (action.type) {
    case 'changeState':
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
};
