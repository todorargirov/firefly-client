export const applyChangeStateReducer = (state, action) => {
    switch (action.type) {
        case 'changeState':
            return {
                ...state,
                ...action.payload,
            };

        case 'expandMenu':
            return {
                ...state,
                expandMenuKey: action.payload.expandMenuKey,
            };
        default:
            return { ...state };
    }
};
