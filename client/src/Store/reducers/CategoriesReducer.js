const INITIAL_STATE = [];

const categoriesReducer = (state = INITIAL_STATE, action) => {
    if(action.type === "ADD_CATEGORIES" && state.length === 0) {
        return [...state, ...action.value]
    }
    return state;
};

export default categoriesReducer;
