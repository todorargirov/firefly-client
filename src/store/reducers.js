export const applyChangeStateReducer = (state, payload) => {
  return {
    ...state,
    ...payload
  };
};
